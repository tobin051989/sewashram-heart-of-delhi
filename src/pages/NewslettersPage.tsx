import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Newsletter {
  id: string;
  title: string;
  content: string | null;
  pdf_url: string | null;
  created_at: string;
}

const NewslettersPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [selected, setSelected] = useState<Newsletter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("newsletters" as any)
        .select("id, title, content, pdf_url, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (data) setNewsletters(data as any);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Newsletters
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest stories, impact reports, and community news.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : newsletters.length === 0 ? (
            <Card>
              <CardContent className="py-16 text-center text-muted-foreground">
                <FileText className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">No newsletters published yet. Check back soon!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((nl) => (
                <Card key={nl.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {nl.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(nl.created_at).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        {nl.content && (
                          <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                            {nl.content}
                          </p>
                        )}
                        <div className="flex gap-2 mt-4">
                          {nl.content && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelected(nl)}
                            >
                              Read
                            </Button>
                          )}
                          {nl.pdf_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                            >
                              <a href={nl.pdf_url} target="_blank" rel="noopener noreferrer">
                                <Download className="h-4 w-4 mr-1" /> Download PDF
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selected?.title}</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
            {selected?.content}
          </div>
          {selected?.pdf_url && (
            <div className="mt-4">
              <Button asChild>
                <a href={selected.pdf_url} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default NewslettersPage;
