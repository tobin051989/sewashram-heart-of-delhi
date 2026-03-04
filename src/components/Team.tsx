import { Card } from "@/components/ui/card";
import { Users, User } from "lucide-react";

const Team = () => {
  const staffMembers = [
    { name: "Satyavir Chakrapani", role: "General Secretary", email: "gen.secy@delhihouse.org" },
    { name: "Keshav Pandey", role: "DHS Team Leader", email: "keshav@delhihouse.org" },
    { name: "Sumrengchung Hmangte", role: "LDI Coordinator", email: "lovedelhiinitiative@gmail.com" },
    { name: "NK Greenson", role: "Manager, Accounts", email: "greenson.shikhar@gmail.com" },
    { name: "Suresh Kumar", role: "Accounts" },
    { name: "Mary Ngaihte Peter", role: "Communications Lead", email: "communication@delhihouse.org" },
    { name: "Tia", role: "Researcher" },
    { name: "Prakash Chander Arya", role: "Team Leader, Daily Operation" },
    { name: "Sarin Thapa", role: "Team Leader, Daily Development" },
    { name: "Bipul Borgohain", role: "Team Leader, Healthcare" },
    { name: "Savita", role: "Team Leader, Learning Center" },
    { name: "Dr. Ashish Rohatgi", role: "Doctor MBBS DTCD MD" },
    { name: "Lalitha Viswanathan", role: "Nurse" },
    { name: "Dr. Gaurav Kumar Arya", role: "Physiotherapist" },
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At the heart of our work is a dedicated team of healthcare professionals, educators, social workers, 
            and community leaders, all united by one mission: to see lives transformed.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-6 md:p-8 shadow-lg overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-secondary/10">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">DHS Team</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our dedicated staff works tirelessly on the ground to bring our mission to life every day.
            </p>
            
            <div className="space-y-4">
              {staffMembers.map((member, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <User className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline">
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
