import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Send, Trash2, Eye, EyeOff, FileText, ImageIcon, Palette, Upload } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  thumbnail_url: string | null;
  email_style: string;
  email_design_url: string | null;
  published: boolean;
  created_at: string;
}

const NewsletterManager = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [emailDesignFile, setEmailDesignFile] = useState<File | null>(null);
  const [emailDesignPreview, setEmailDesignPreview] = useState<string | null>(null);
  const [emailStyle, setEmailStyle] = useState("editorial");
  const [isCreating, setIsCreating] = useState(false);
  const [isSending, setIsSending] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const NEWSLETTER_TEMPLATE = `Dear Supporters, Donors, and Friends,

Please find attached the [Month Year] edition of the Delhi House Society – Sewa Ashram Newsletter.

We are deeply grateful for your continued support, encouragement, and partnership. Your generosity enables us to extend care, hope, and meaningful change to those we serve. We hope the stories and updates shared in this edition inspire you and offer a glimpse into the impact your support makes possible.

Your feedback is always valuable to us as we strive to strengthen our work and communication.

Thank you for journeying with us and for being a blessing to so many lives. We look forward to your continued support as we move ahead together in this shared mission of service and transformation.

Warm Regards,


Mary Ngaihte Peter
Communications Lead, DHS
www.delhihouse.org`;

  const loadTemplate = () => {
    setContent(NEWSLETTER_TEMPLATE);
    toast({ title: "Template loaded" });
  };

  const fetchNewsletters = async () => {
    const { data, error } = await supabase
      .from("newsletters")
        .select("id, title, content, pdf_url, thumbnail_url, email_style, email_design_url, published, created_at")
      .order("created_at", { ascending: false });
    if (!error && data) setNewsletters(data as Newsletter[]);
  };

  useEffect(() => { fetchNewsletters(); }, []);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setThumbnailFile(file);
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      setThumbnailPreview(null);
    }
  };

  const handleEmailDesignChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setEmailDesignFile(file);
    setEmailDesignPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleCreate = async () => {
    if (!title.trim()) {
      toast({ title: "Title is required", variant: "destructive" });
      return;
    }
    if (!user?.id) {
      toast({ title: "You must be signed in to create a newsletter", variant: "destructive" });
      return;
    }
    setIsCreating(true);

    let pdfUrl: string | null = null;
    let thumbnailUrl: string | null = null;
    let emailDesignUrl: string | null = null;

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

      const { data: urlData } = supabase.storage.from("newsletters").getPublicUrl(fileName);
      pdfUrl = urlData.publicUrl;
    }

    if (thumbnailFile) {
      const thumbName = `thumbnails/${Date.now()}-${thumbnailFile.name}`;
      const { error: thumbError } = await supabase.storage
        .from("newsletters")
        .upload(thumbName, thumbnailFile);

      if (thumbError) {
        toast({ title: "Thumbnail upload failed", description: thumbError.message, variant: "destructive" });
        setIsCreating(false);
        return;
      }

      const { data: thumbUrlData } = supabase.storage.from("newsletters").getPublicUrl(thumbName);
      thumbnailUrl = thumbUrlData.publicUrl;
    }

    if (emailDesignFile) {
      const designName = `email-designs/${Date.now()}-${emailDesignFile.name}`;
      const { error: designError } = await supabase.storage
        .from("newsletters")
        .upload(designName, emailDesignFile);

      if (designError) {
        toast({ title: "Email design upload failed", description: designError.message, variant: "destructive" });
        setIsCreating(false);
        return;
      }

      const { data: designUrlData } = supabase.storage.from("newsletters").getPublicUrl(designName);
      emailDesignUrl = designUrlData.publicUrl;
    }

    const { error } = await supabase
      .from("newsletters")
      .insert({
        title: title.trim(),
        content: content.trim() || null,
        pdf_url: pdfUrl,
        thumbnail_url: thumbnailUrl,
        email_style: emailStyle,
        email_design_url: emailDesignUrl,
        created_by: user.id,
        published: false,
      } as any);

    if (error) {
      toast({ title: "Failed to create newsletter", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Newsletter created!" });
      setTitle("");
      setContent("");
      setPdfFile(null);
      setThumbnailFile(null);
      setThumbnailPreview(null);
      setEmailDesignFile(null);
      setEmailDesignPreview(null);
      setEmailStyle("editorial");
      setDialogOpen(false);
      fetchNewsletters();
    }
    setIsCreating(false);
  };

  const togglePublish = async (id: string, published: boolean) => {
    await supabase.from("newsletters").update({ published: !published } as any).eq("id", id);
    fetchNewsletters();
  };

  const deleteNewsletter = async (id: string) => {
    await supabase.from("newsletters").delete().eq("id", id);
    fetchNewsletters();
    toast({ title: "Newsletter deleted" });
  };

  const sendNewsletter = async (newsletter: Newsletter) => {
    setIsSending(newsletter.id);
    try {
      const response = await supabase.functions.invoke("send-newsletter", {
        body: { newsletterId: newsletter.id },
      });

      if (response.error) throw new Error(response.error.message);

      toast({
        title: "Newsletter sent!",
        description: `Sent to ${response.data?.sent || 0} contacts.`,
      });
    } catch (error: any) {
      toast({ title: "Failed to send", description: error.message, variant: "destructive" });
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
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
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
                rows={10}
              />
              <Button type="button" variant="outline" size="sm" onClick={loadTemplate}>
                <FileText className="h-4 w-4 mr-2" /> Load Template
              </Button>
              <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email design</p>
                    <p className="text-xs text-muted-foreground">Choose how the message will look in the inbox.</p>
                  </div>
                </div>
                <RadioGroup value={emailStyle} onValueChange={setEmailStyle} className="grid gap-2 sm:grid-cols-3">
                  {[
                    { value: "editorial", label: "Editorial", detail: "Warm header and clear reading flow" },
                    { value: "spotlight", label: "Spotlight", detail: "Teal announcement-style layout" },
                    { value: "minimal", label: "Minimal", detail: "Simple, spacious and print-like" },
                  ].map((option) => (
                    <Label
                      key={option.value}
                      htmlFor={`email-style-${option.value}`}
                      className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-background p-3 transition-colors hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <RadioGroupItem value={option.value} id={`email-style-${option.value}`} className="mt-0.5" />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">{option.label}</span>
                        <span className="block text-xs leading-snug text-muted-foreground">{option.detail}</span>
                      </span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  <Upload className="mr-1 inline h-4 w-4" /> Upload design image (optional)
                </label>
                <Input type="file" accept="image/*" onChange={handleEmailDesignChange} />
                <p className="mt-1 text-xs text-muted-foreground">This image appears at the top of the email above the message.</p>
                {emailDesignPreview && (
                  <img src={emailDesignPreview} alt="Email design preview" className="mt-2 max-h-40 w-full rounded-md border object-contain" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <ImageIcon className="h-4 w-4 inline mr-1" /> Thumbnail Image (optional)
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                />
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="mt-2 w-full h-32 object-cover rounded-lg border"
                  />
                )}
              </div>
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
                <div className="flex items-start gap-4">
                  {nl.thumbnail_url ? (
                    <img
                      src={nl.thumbnail_url}
                      alt={nl.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0 border"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-lg flex-shrink-0 border bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground opacity-50" />
                    </div>
                  )}
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
                    <Button variant="outline" size="sm" onClick={() => togglePublish(nl.id, nl.published)}>
                      {nl.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => sendNewsletter(nl)} disabled={isSending === nl.id}>
                      <Send className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => deleteNewsletter(nl.id)}>
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
