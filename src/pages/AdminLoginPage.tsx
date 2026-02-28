import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const { signIn, signUp, user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user && isAdmin) navigate("/admin");
  }, [user, isAdmin, navigate]);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({ title: "Please enter your email", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setIsLoading(false);
    if (error) {
      toast({ title: "Failed to send reset email", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Reset email sent!", description: "Check your inbox for the password reset link." });
      setIsForgotPassword(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      toast({ title: "Request timed out", description: "Please try again.", variant: "destructive" });
    }, 15000);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
        } else {
          toast({ title: "Account created!", description: "Please check your email to verify your account, then ask the site admin to grant you admin access." });
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast({ title: "Login failed", description: error.message, variant: "destructive" });
        } else {
          try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
              const { data: isAdminResult } = await supabase.rpc("has_role", {
                _user_id: session.user.id,
                _role: "admin",
              });
              if (isAdminResult) {
                toast({ title: "Welcome back!" });
                clearTimeout(timeout);
                window.location.href = "/admin";
                return;
              }
            }
            toast({ title: "Login successful", description: "But you don't have admin access.", variant: "destructive" });
          } catch (rpcErr) {
            console.error("Admin check failed:", rpcErr);
            toast({ title: "Login successful", description: "Could not verify admin access. Please try refreshing.", variant: "destructive" });
          }
        }
      }
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err?.message || "Please try again.", variant: "destructive" });
    } finally {
      clearTimeout(timeout);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 section-padding flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">
              {isForgotPassword ? "Reset Password" : isSignUp ? "Create Admin Account" : "Admin Login"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isForgotPassword ? (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <p className="text-sm text-muted-foreground">Enter your email and we'll send you a password reset link.</p>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
                <button
                  type="button"
                  className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsForgotPassword(false)}
                >
                  Back to login
                </button>
              </form>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Please wait..." : isSignUp ? "Sign Up" : "Sign In"}
                  </Button>
                </form>
                {!isSignUp && (
                  <button
                    type="button"
                    className="w-full mt-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot password?
                  </button>
                )}
                <button
                  type="button"
                  className="w-full mt-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
                </button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
