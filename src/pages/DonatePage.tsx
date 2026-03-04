import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Phone, Globe, Building, Copy, Check } from "lucide-react";
import { useState } from "react";
import donateQR from "@/assets/donate-qr-clean.png";

const financialStatements = [
  { year: "2024", url: "https://delhihouse.org/wp-content/uploads/2024/10/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2024.pdf" },
  { year: "2023", url: "https://delhihouse.org/wp-content/uploads/2023/11/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2023.pdf" },
  { year: "2022", url: "https://delhihouse.org/wp-content/uploads/2022/11/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2022.pdf" },
  { year: "2021", url: "https://delhihouse.org/wp-content/uploads/2022/03/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2021.pdf" },
  { year: "2020", url: "https://delhihouse.org/wp-content/uploads/2021/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2020.pdf" },
  { year: "2019", url: "https://delhihouse.org/wp-content/uploads/2021/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2019.pdf" },
  { year: "2018", url: "https://delhihouse.org/wp-content/uploads/2019/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2018.pdf" },
  { year: "2017", url: "https://delhihouse.org/wp-content/uploads/2018/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2017.pdf" },
  { year: "2016", url: "https://delhihouse.org/wp-content/uploads/2018/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2016.pdf" },
  { year: "2015", url: "https://delhihouse.org/wp-content/uploads/2018/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2015.pdf" },
  { year: "2014", url: "https://delhihouse.org/wp-content/uploads/2018/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2014.pdf" },
  { year: "2013", url: "https://delhihouse.org/wp-content/uploads/2018/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2013.pdf" },
  { year: "2012", url: "https://delhihouse.org/wp-content/uploads/2018/05/Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-2012.pdf" },
];

const UPI_ID = "9311968001@okbizaxis";

const CopyUpiButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
      aria-label="Copy UPI ID"
    >
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
    </button>
  );
};

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-2 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your generosity transforms lives and restores hope to those in need
            </p>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-2 md:py-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom section-padding">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Quick Donate</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
              Scan the QR code below with any UPI app to make an instant donation
            </p>
            <div className="relative bg-card rounded-2xl shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden w-72 sm:w-80 md:w-96">
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-b-lg text-sm font-semibold z-10">
                UPI Payment
              </div>
              <img 
                src={donateQR} 
                alt="Donation QR Code - Scan to donate via UPI" 
                className="w-full h-auto object-cover"
              />
              <div className="py-3 px-4 text-center bg-card">
                <p className="text-sm font-medium text-foreground">UPI ID</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-primary font-semibold select-all">9311968001@okbizaxis</p>
                  <CopyUpiButton />
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center max-w-sm">
              Supports Google Pay, PhonePe, Paytm & all UPI apps
            </p>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-6 bg-muted/30">
        <div className="container-custom section-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Supporters</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our work at Delhi House Society is made possible by the generosity of those who believe in dignity, care, and opportunity for all. Your kindness helps us continue serving the most vulnerable and is deeply appreciated.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 p-4 bg-card rounded-lg border border-border">
              <span className="text-foreground font-medium">For any queries:</span>
              <a href="mailto:office@delhihouse.org" className="flex items-center gap-2 text-primary hover:underline text-sm sm:text-base break-all">
                <Mail className="h-4 w-4 flex-shrink-0" />
                office@delhihouse.org
              </a>
              <a href="tel:+919311968001" className="flex items-center gap-2 text-primary hover:underline text-sm sm:text-base">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91-9311968001
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Account Details Section */}
      <section className="py-6 bg-background">
        <div className="container-custom section-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Donation Account Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Indian Residents */}
            <Card className="border-primary/20 md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building className="h-5 w-5" />
                  Indian Residents (INR)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  All Indian contributions made to Delhi House Society are eligible for tax deduction of 50% u/s 80G of the Income Tax Act 1961.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* RBL Bank Account */}
                  <div className="space-y-2 text-sm p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Account 1 - RBL Bank</h4>
                    <p><span className="font-semibold">Account Name:</span> Delhi House Society</p>
                    <p><span className="font-semibold">Account No:</span> 309013239156</p>
                    <p><span className="font-semibold">Bank:</span> RBL Bank Limited</p>
                    <p><span className="font-semibold">Branch:</span> Dwarka, New Delhi</p>
                    <p><span className="font-semibold">IFSC Code:</span> RATN0000266</p>
                  </div>
                  
                  {/* Union Bank Account */}
                  <div className="space-y-2 text-sm p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Account 2 - Union Bank</h4>
                    <p><span className="font-semibold">Account Name:</span> Delhi House Society</p>
                    <p><span className="font-semibold">Account No:</span> 380902010006469</p>
                    <p><span className="font-semibold">Bank:</span> Union Bank of India</p>
                    <p><span className="font-semibold">Branch:</span> Ansari Road Branch, Dariyaganj, Delhi</p>
                    <p><span className="font-semibold">IFSC Code:</span> UBIN0538094</p>
                  </div>
                </div>
                
                <div className="text-sm p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground mb-1">UPI Payment</p>
                  <p className="text-muted-foreground">9311968001@okbizaxis</p>
                </div>
                
                <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
                  Contact office@delhihouse.org and supply full name, address, PAN Number and Mobile number of the contributor, else it will be treated as anonymous and will be subject to taxation.
                </p>
              </CardContent>
            </Card>

            {/* Other Countries */}
            <Card className="border-primary/20 md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Globe className="h-5 w-5" />
                  Donors From Other Countries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  It is required by law (FCRA) that you send us a copy of your passport to office@delhihouse.org. Then you can make an international bank transfer in your own currency (not in INR).
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Account Name:</span> Delhi House Society</p>
                  <p><span className="font-semibold">Account No:</span> 40001325500</p>
                  <p><span className="font-semibold">Branch Code:</span> 00691</p>
                  <p><span className="font-semibold">IFSC:</span> SBIN0000691</p>
                  <p><span className="font-semibold">SWIFT:</span> SBININBB104</p>
                  <p><span className="font-semibold">Bank:</span> FCRA Cell, 4th Floor, State Bank of India, New Delhi Main Branch, 11 Sansad Marg, New Delhi-110 001</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audited Financial Statements Section */}
      <section className="py-6 bg-muted/30">
        <div className="container-custom section-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Audited Financial Statements</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {financialStatements.map((statement) => (
                <a
                  key={statement.year}
                  href={statement.url}
                  download={`Delhi-House-Society-Audited-Financial-Statements-Year-Ended-March-31-${statement.year}.pdf`}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    Year Ended March 31, {statement.year}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonatePage;
