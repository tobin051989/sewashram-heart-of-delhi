import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Upload, Send, Trash2, Eye, EyeOff, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Newsletter {
  id: string;
  title: string;
  content: string | null;
  pdf_url: string | null;
  published: boolean;
  created_at: string;
}

const NewsletterManager = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isSending, setIsSending] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchNewsletters = async () => {
    const { data, error } = await supabase
      .from("newsletters" as any)
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setNewsletters(data as any);
  };

  useEffect(() => { fetchNewsletters(); }, []);

  const handleCreate = async () => {
    if (!title.trim()) {
      toast({ title: "Title is required", variant: "destructive" });
      return;
    }
    setIsCreating(true);

    let pdfUrl: string | null = null;

    if (pdfFile) {
      const fileName = `${Date.now()}-${pdfFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("newsletters")
        .upload(fileName, pdfFile);

      if (uploadError) {
        toast({ title: "PDF upload failed", description: uploadError.message, variant: "destructive" });
        setIsCreating(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("newsletters")
        .getPublicUrl(fileName);
      pdfUrl = urlData.publicUrl;
    }

    const { error } = await supabase
      .from("newsletters" as any)
      .insert({
        title: title.trim(),
        content: content.trim() || null,
        pdf_url: pdfUrl,
        created_by: user!.id,
        published: false,
      } as any);

    if (error) {
      toast({ title: "Failed to create newsletter", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Newsletter created!" });
      setTitle("");
      setContent("");
      setPdfFile(null);
      setDialogOpen(false);
      fetchNewsletters();
    }
    setIsCreating(false);
  };

  const togglePublish = async (id: string, published: boolean) => {
    await supabase
      .from("newsletters" as any)
      .update({ published: !published } as any)
      .eq("id", id);
    fetchNewsletters();
  };

  const deleteNewsletter = async (id: string) => {
    await supabase.from("newsletters" as any).delete().eq("id", id);
    fetchNewsletters();
    toast({ title: "Newsletter deleted" });
  };

  const sendNewsletter = async (newsletter: Newsletter) => {
    setIsSending(newsletter.id);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const response = await supabase.functions.invoke("send-newsletter", {
        body: { newsletterId: newsletter.id },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast({
        title: "Newsletter sent!",
        description: `Sent to ${response.data?.sent || 0} contacts.`,
      });
    } catch (error: any) {
      toast({
        title: "Failed to send",
        description: error.message,
        variant: "destructive",
      });
    }
    setIsSending(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Newsletters</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" /> Create Newsletter</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create Newsletter</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Newsletter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Newsletter content (optional if uploading PDF)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
              />
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload PDF (optional)
                </label>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                />
              </div>
              <Button onClick={handleCreate} disabled={isCreating} className="w-full">
                {isCreating ? "Creating..." : "Create Newsletter"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {newsletters.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No newsletters yet. Create your first one!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {newsletters.map((nl) => (
            <Card key={nl.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-foreground">{nl.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(nl.created_at).toLocaleDateString()}
                      {nl.published ? (
                        <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Published</span>
                      ) : (
                        <span className="ml-2 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Draft</span>
                      )}
                    </p>
                    {nl.content && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{nl.content}</p>
                    )}
                    {nl.pdf_url && (
                      <a
                        href={nl.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline mt-2"
                      >
                        <FileText className="h-4 w-4 mr-1" /> View PDF
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePublish(nl.id, nl.published)}
                    >
                      {nl.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => sendNewsletter(nl)}
                      disabled={isSending === nl.id}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteNewsletter(nl.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsletterManager;
