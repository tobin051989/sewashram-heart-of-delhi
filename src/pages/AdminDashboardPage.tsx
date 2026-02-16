import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NewsletterManager from "@/components/admin/NewsletterManager";
import ContactManager from "@/components/admin/ContactManager";

const AdminDashboardPage = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <Button variant="outline" onClick={() => { signOut(); navigate("/"); }}>
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </Button>
          </div>

          <Tabs defaultValue="newsletters" className="space-y-6">
            <TabsList>
              <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>

            <TabsContent value="newsletters">
              <NewsletterManager />
            </TabsContent>

            <TabsContent value="contacts">
              <ContactManager />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
