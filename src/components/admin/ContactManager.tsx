import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Users, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Contact {
  id: string;
  email: string;
  name: string | null;
  subscribed: boolean;
  created_at: string;
}

const ContactManager = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bulkEmails, setBulkEmails] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [bulkDialogOpen, setBulkDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from("contacts" as any)
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setContacts(data as any);
  };

  useEffect(() => { fetchContacts(); }, []);

  const addContact = async () => {
    if (!email.trim()) {
      toast({ title: "Email is required", variant: "destructive" });
      return;
    }

    const { error } = await supabase
      .from("contacts" as any)
      .insert({ email: email.trim(), name: name.trim() || null } as any);

    if (error) {
      toast({ title: "Failed to add contact", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Contact added!" });
      setEmail("");
      setName("");
      setDialogOpen(false);
      fetchContacts();
    }
  };

  const addBulkContacts = async () => {
    const emails = bulkEmails
      .split(/[\n,;]+/)
      .map((e) => e.trim())
      .filter((e) => e && e.includes("@"));

    if (emails.length === 0) {
      toast({ title: "No valid emails found", variant: "destructive" });
      return;
    }

    const rows = emails.map((e) => ({ email: e }));
    const { error } = await supabase
      .from("contacts" as any)
      .upsert(rows as any, { onConflict: "email" });

    if (error) {
      toast({ title: "Failed to add contacts", description: error.message, variant: "destructive" });
    } else {
      toast({ title: `${emails.length} contact(s) added!` });
      setBulkEmails("");
      setBulkDialogOpen(false);
      fetchContacts();
    }
  };

  const deleteContact = async (id: string) => {
    await supabase.from("contacts" as any).delete().eq("id", id);
    fetchContacts();
    toast({ title: "Contact removed" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-foreground">
          Contacts ({contacts.length})
        </h2>
        <div className="flex gap-2">
          <Dialog open={bulkDialogOpen} onOpenChange={setBulkDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline"><Upload className="h-4 w-4 mr-2" /> Bulk Add</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Bulk Add Contacts</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Paste emails separated by commas, semicolons, or new lines.
                </p>
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="john@example.com&#10;jane@example.com"
                  value={bulkEmails}
                  onChange={(e) => setBulkEmails(e.target.value)}
                />
                <Button onClick={addBulkContacts} className="w-full">Add Contacts</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button><Plus className="h-4 w-4 mr-2" /> Add Contact</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Contact</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={addContact} className="w-full">Add Contact</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No contacts yet. Add your first contact!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-2">
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{contact.email}</p>
                  {contact.name && (
                    <p className="text-sm text-muted-foreground">{contact.name}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteContact(contact.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactManager;
