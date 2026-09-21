import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

type Status = "loading" | "downloading" | "done" | "error";

const NewsletterDownloadPage = () => {
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState<Status>("loading");
  const [title, setTitle] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const start = async () => {
      if (!id) {
        setStatus("error");
        return;
      }

      const { data, error } = await supabase
        .from("newsletters")
        .select("id, title, pdf_url, published")
        .eq("id", id)
        .maybeSingle();

      if (error || !data || !data.pdf_url) {
        setStatus("error");
        return;
      }

      setTitle(data.title);
      setPdfUrl(data.pdf_url);
      setStatus("downloading");

      try {
        const response = await fetch(data.pdf_url);
        if (!response.ok) throw new Error("Fetch failed");
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = objectUrl;
        anchor.download = `${data.title.replace(/[^\w\s-]/g, "").trim() || "newsletter"}.pdf`;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
        setStatus("done");
      } catch {
        // If the browser blocks the fetch, still let the user open the file directly.
        setStatus("done");
      }
    };

    start();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center space-y-6">
          {status === "loading" || status === "downloading" ? (
            <>
              <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary" />
              <h1 className="font-serif text-2xl font-bold text-foreground">
                Preparing your download…
              </h1>
              <p className="text-muted-foreground">
                {title ? `"${title}" will download in a moment.` : "Fetching the newsletter…"}
              </p>
            </>
          ) : status === "done" ? (
            <>
              <CheckCircle2 className="h-12 w-12 mx-auto text-primary" />
              <h1 className="font-serif text-2xl font-bold text-foreground">
                Your download has started
              </h1>
              <p className="text-muted-foreground">
                {title ? `"${title}"` : "The newsletter"} is downloading. If it didn't start, use
                the button below.
              </p>
              {pdfUrl && (
                <div className="flex flex-col gap-3">
                  <Button asChild>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/newsletters">Browse all newsletters</Link>
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              <AlertCircle className="h-12 w-12 mx-auto text-destructive" />
              <h1 className="font-serif text-2xl font-bold text-foreground">
                Newsletter not found
              </h1>
              <p className="text-muted-foreground">
                This download link is invalid or the newsletter is no longer available.
              </p>
              <Button asChild variant="outline">
                <Link to="/newsletters">Browse all newsletters</Link>
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsletterDownloadPage;
