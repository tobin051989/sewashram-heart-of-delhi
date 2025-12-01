import { Card } from "@/components/ui/card";
import { Users, User } from "lucide-react";

const Team = () => {
  const boardMembers = [
    { name: "Satya Chakrapani", role: "General Secretary | Chief Functionary" },
    { name: "Pramod Kumar Singh", role: "Board Chair" },
    { name: "Esther Anupama Ghosh", role: "Board Member" },
    { name: "Ekta Ahuja John", role: "Board Member" },
    { name: "Sumit K Chetty", role: "Treasurer" },
    { name: "N. Christina", role: "Board Member" },
    { name: "Samir Deokuliar", role: "Board Member" },
  ];

  const staffMembers = [
    { name: "Satya Chakrapani", role: "Chief Functionary" },
    { name: "Keshav Pandey", role: "DHS Team Leader" },
    { name: "Suresh Kumar", role: "Accounts" },
    { name: "Greenson", role: "Manager, Accounts" },
    { name: "Prakash Chander Arya", role: "Team Leader, Daily Operation" },
    { name: "Sarin Thapa", role: "Team Leader, Daily Development" },
    { name: "Bipul Borgohain", role: "Team Leader, Healthcare" },
    { name: "Savita", role: "Team Leader, Learning Center" },
    { name: "Mary Ngaihte Peter", role: "Communications Lead" },
    { name: "Tia", role: "Researcher" },
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

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Board of Directors */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Board of Directors</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Board brings wisdom, accountability, and vision to guide the mission of Delhi House Society.
            </p>
            
            <div className="space-y-4">
              {boardMembers.map((member, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* DHS Team */}
          <Card className="p-8 shadow-lg">
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
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          Detailed bios and photos of board members will be added soon
        </p>
      </div>
    </section>
  );
};

export default Team;
