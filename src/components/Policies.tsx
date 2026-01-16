import { useState } from "react";
import { Shield, Baby, FileText, ChevronDown, ChevronUp, Scale, Users, AlertTriangle, Heart, Lock, Phone, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Policies = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Policies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delhi House Society is committed to creating a safe, respectful, and inclusive environment 
            for all children, employees, and stakeholders. Our policies reflect our dedication to 
            protection, dignity, and ethical conduct.
          </p>
        </div>

        {/* Policy Tabs */}
        <Tabs defaultValue="cpp" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-10 h-auto p-1">
            <TabsTrigger value="cpp" className="flex items-center gap-2 py-3 text-sm md:text-base">
              <Baby className="h-4 w-4" />
              <span>Child Protection Policy</span>
            </TabsTrigger>
            <TabsTrigger value="posh" className="flex items-center gap-2 py-3 text-sm md:text-base">
              <Shield className="h-4 w-4" />
              <span>POSH Policy</span>
            </TabsTrigger>
          </TabsList>

          {/* Child Protection Policy */}
          <TabsContent value="cpp" className="space-y-8">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Baby className="h-7 w-7 text-primary" />
                  Child Protection Policy (CPP)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Every organisation working with children needs to be committed to protecting the children 
                    in their care against abuse, exploitation and violence. The core child protection legislation 
                    is enshrined in four main laws: Juvenile Justice (Care and Protection of Children) Act, 2015, 
                    The Protection of Children from Sexual Offences (POCSO) Act 2012, The Prohibition of Child 
                    Marriage Act, 2006 and The Child Labour (Prohibition and Regulation) Act 2016.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              {/* Policy Statement */}
              <AccordionItem value="policy-statement" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold">1. Policy Statement</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Delhi House Society is committed to creating a safe, supportive, and nurturing environment 
                      for all children, regardless of gender, ethnicity, disability, sexuality or religion, 
                      involved in our programs. We recognize that children have rights as articulated in the 
                      United Nations Convention on the Rights of the Child (UNCRC), and we adhere to these 
                      principles in all aspects of our work.
                    </p>
                    <p>
                      Our organization operates under the framework of the Constitution of India and complies 
                      with relevant child-centric legislation and international treaties. Our policies and 
                      practices are designed to respect and promote children's rights, including their right 
                      to survival, development, protection, and participation.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Definitions */}
              <AccordionItem value="definitions" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">2. Definitions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { term: "Child", definition: "Any person who has not completed 18 years of age is a child or termed as a minor." },
                      { term: "Abuse", definition: "Whosoever, having the actual charge of, or control over a child, assaults, abandons, physically, sexually, emotionally harms, exposes or wilfully neglects the child causing unnecessary mental/psychological or physical suffering." },
                      { term: "Exploitation", definition: "To use or treat a child unfairly or in an exploitative way for personal benefit, advantage or profit, in terms of resources, weaknesses, confidential information or child labour." },
                      { term: "Violence", definition: "Any use of words or action with an intent of hurting or threatening a child, physically, sexually, emotionally or verbally." },
                      { term: "POCSO Act 2012", definition: "Prevention of Children from Sexual Offences Act 2012 - formulated to effectively address heinous crimes of sexual abuse and exploitation of children." },
                      { term: "Corporal Punishment", definition: "Physical punishment intended to cause physical pain to a child, at home or schools, such as spanking, beating, flogging etc." },
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{item.term}</h4>
                        <p className="text-sm text-muted-foreground">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Legal Framework */}
              <AccordionItem value="legal-framework" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="font-semibold">3. Legal Framework</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Juvenile Justice Act 2016</h4>
                      <p className="text-muted-foreground mb-3">
                        The Juvenile Justice (Care and Protection of Children) Act provides a framework for:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>General principles of care and protection of children</li>
                        <li>Procedures for children in need of care and protection</li>
                        <li>Rehabilitation and social re-integration measures</li>
                        <li>Adoption of orphan, abandoned and surrendered children</li>
                        <li>Offences committed against children</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">POCSO Act 2012</h4>
                      <p className="text-muted-foreground mb-3">
                        Protection of Children from Sexual Offences Act 2012 was formulated to effectively 
                        address heinous crimes of sexual abuse and exploitation of children below 18 years. Key features:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>POCSO Act is a special law extending to the whole of India</li>
                        <li>POCSO Act is gender neutral and comprehensive</li>
                        <li>Provides child's right to get informed and right to be heard</li>
                        <li>Stringent punishments for sexual offences against children</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Scope, Roles & Responsibilities */}
              <AccordionItem value="scope" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">4. Scope, Roles & Responsibilities</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Scope</h4>
                      <p>
                        The CPP applies to leadership/management, employees, volunteers (part time or full time), 
                        contractors/sub-contractors, donors and partners of DHS working with children, regardless 
                        of gender, ethnicity, disability, sexuality or religion, on various projects or otherwise 
                        all across India.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Child Protection Officer (CPO)</h4>
                      <p>
                        The leadership or Board of DHS is responsible to appoint and or designate a Child Protection 
                        Officer who is trained and knowledgeable in child protection. The CPO oversees the implementation 
                        of the child protection policy, coordinates responses to child protection concerns, provides 
                        guidance to staff, and ensures compliance with policies and procedures.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Code of Conduct */}
              <AccordionItem value="code-of-conduct" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-semibold">5. Code of Conduct</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      DHS is committed to the highest standards of conduct, within the organisation as well as 
                      on the personal front, keeping in view the mission, vision and beliefs of the organisation. 
                      We aim to create safe space for our children, staff and all associated with the organisation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Safe Touch & Physical Boundaries</h5>
                        <p className="text-sm">
                          All interactions should respect personal boundaries and physical autonomy. Physical contact 
                          should only be initiated when necessary and always in a safe, respectful manner.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Safe Environment</h5>
                        <p className="text-sm">
                          Ensure physical spaces are safe and conducive to well-being, free from hazards and 
                          accessible to children with disabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Reporting Procedures */}
              <AccordionItem value="reporting" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">6. Reporting Procedures</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        Each incident or suspicion of misconduct needs to be immediately reported to the Child Protection Officer (CPO).
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        Any individual who suspects abuse must report to Child Line 1098, CWC or local police.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        Any form of sexual abuse shall be treated as serious and formal complaint to be made before competent authorities.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        Non-reporting of an offence shall be considered as an offence in itself.
                      </li>
                    </ul>
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mt-4">
                      <p className="text-sm font-medium text-destructive">
                        📞 Childline India: 1098 (24/7 Emergency helpline for children)
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Confidentiality */}
              <AccordionItem value="confidentiality-cpp" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">7. Confidentiality</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Personnel must not use or disclose information about children unless necessary for their role.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      All confidential documents shared by a child or family must be kept securely.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Principle of right to privacy and confidentiality to be followed at all times.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Never ask a child to keep secrets.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Victim Assistance */}
              <AccordionItem value="victim-assistance" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold">8. Victim Assistance & Survivor Support</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      DHS is committed to providing a safe and supportive environment for children who are 
                      victims and survivors of abuse. Our survivor-centric approach includes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Dignity & Respect</h5>
                        <p className="text-sm text-muted-foreground">
                          Prioritizing the dignity and respect of every child victim/survivor throughout disclosure, 
                          investigation, and recovery.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Comprehensive Support</h5>
                        <p className="text-sm text-muted-foreground">
                          Legal, emotional, physical, and social support tailored to individual needs of each child.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* POSH Policy */}
          <TabsContent value="posh" className="space-y-8">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-7 w-7 text-primary" />
                  POSH Policy - Prevention of Sexual Harassment at Workplace
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    DHS is committed to providing a work environment that ensures dignity and respect for all 
                    employees. We follow a zero tolerance policy towards any form of abuse, exploitation and 
                    violence against all our employees, volunteers, partners, beneficiaries, etc.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 
                    was framed to secure the fundamental rights of women to equality, life with dignity, and right 
                    to practice any profession in a safe environment free from sexual harassment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              {/* Policy Statement */}
              <AccordionItem value="posh-statement" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold">1. Policy Statement</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our organization is committed to fostering a safe, respectful, and inclusive work environment 
                      for all employees, regardless of gender. Sexual harassment in any form is strictly prohibited 
                      and will not be tolerated.
                    </p>
                    <p>
                      This policy applies to all employees, contractors, interns, volunteers, and any other individuals 
                      engaged in work-related activities on behalf of the organization. We strive to prevent sexual 
                      harassment through education, awareness, and proactive measures.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Definitions */}
              <AccordionItem value="posh-definitions" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">2. Definitions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { term: "Aggrieved Person", definition: "Any person who alleges to have been subjected to any act of sexual harassment by the respondent." },
                      { term: "Employee", definition: "Any person employed for wages or salary, whether on temporary, permanent basis, including co-workers, contract workers, probationers, trainees, apprentices." },
                      { term: "Employer", definition: "Any person responsible for the management, supervision and control of the workplace, including formulation and administration of policies." },
                      { term: "Internal Committee (IC)", definition: "A committee constituted by the employer to hear and redress grievances pertaining to sexual harassment." },
                      { term: "Respondent", definition: "A person against whom the aggrieved woman/person has made the complaint." },
                      { term: "Workplace", definition: "Any private sector organisation carrying on professional, commercial, vocational, educational, or other activities, including any place visited during course of employment." },
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{item.term}</h4>
                        <p className="text-sm text-muted-foreground">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* What Constitutes Sexual Harassment */}
              <AccordionItem value="harassment-types" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">3. What Constitutes Sexual Harassment</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>As per the POSH Act, the following unwelcome acts may be considered as sexual harassment:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Physical contact and advances
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        A demand or request for sexual favours
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Making sexually coloured remarks
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Showing pornography
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Any other unwelcome physical, verbal or non-verbal conduct of sexual nature
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Implied or explicit promise of preferential treatment in employment
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Implied or explicit threat about employment status
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        Creating an intimidating or hostile work environment
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Internal Complaint Committee */}
              <AccordionItem value="icc" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="font-semibold">4. Internal Complaint Committee (ICC)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The POSH Act requires an employer to set up an 'internal committee' for each office/branch 
                      employing 10 or more employees, to hear and redress grievances pertaining to sexual harassment.
                    </p>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-semibold text-foreground mb-3">Committee Composition:</h5>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Presiding Officer:</strong> A woman employed at senior level</li>
                        <li>• <strong>Two Members:</strong> Employees committed to the cause of women or with social work/legal experience</li>
                        <li>• <strong>External Member:</strong> From NGOs or associations committed to women's causes</li>
                        <li>• At least half of total members shall be women</li>
                        <li>• Minimum 3 members including Presiding Officer required for inquiry</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Complaint Mechanism */}
              <AccordionItem value="complaint" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold">5. Complaint Mechanism</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">1.</span>
                        Any aggrieved person may make a written complaint to the Internal Committee within 3 months from the date of incident.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">2.</span>
                        If complaint cannot be made in writing, the Presiding Officer shall render reasonable assistance.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">3.</span>
                        The Committee may extend the time limit by 3 months for valid reasons.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">4.</span>
                        Where the aggrieved person is unable to make a complaint, legal heir or prescribed person may file on their behalf.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Inquiry Process */}
              <AccordionItem value="inquiry" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="font-semibold">6. Inquiry & Redressal Process</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Conciliation</h5>
                        <p className="text-sm">
                          The IC may attempt to settle the matter through conciliation before formal inquiry, 
                          at the request of the aggrieved person. No monetary settlement is allowed.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Interim Relief</h5>
                        <p className="text-sm">
                          During inquiry, the IC may recommend transfer, leave (up to 3 months), or other relief 
                          to the aggrieved person.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Inquiry Timeline</h5>
                        <p className="text-sm">
                          The inquiry shall be completed within 90 days. Both parties are given opportunity 
                          to be heard and receive copies of findings.
                        </p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">Action</h5>
                        <p className="text-sm">
                          If allegations are proved, disciplinary action may include warning, termination, 
                          counselling, or compensation payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Confidentiality */}
              <AccordionItem value="confidentiality-posh" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">7. Confidentiality</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      The contents of the complaint, identity of parties, information relating to proceedings, 
                      and actions taken shall not be published or made known to the public, press and media.
                    </p>
                    <p>
                      Information regarding justice secured may be disseminated without disclosing identity 
                      or particulars of the aggrieved woman and witnesses.
                    </p>
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mt-4">
                      <p className="text-sm font-medium text-destructive">
                        ⚠️ Breach of confidentiality is punishable under the POSH Act and organizational policies.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Duties of Employer */}
              <AccordionItem value="duties" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="font-semibold">8. Duties of Employer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Promoting a gender sensitive workplace
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Providing a safe working environment
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Displaying penal consequences and IC details conspicuously
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Organizing regular awareness workshops and orientation programs
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Providing assistance if aggrieved person chooses to file police complaint
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Treating sexual harassment as misconduct under service rules
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      Ensuring annual report submission by IC
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Penalty */}
              <AccordionItem value="penalty" className="border rounded-lg shadow-sm bg-card">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">9. Penalty for Non-Compliance</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>Where an employer fails to constitute an IC, take action as per the Act, or contravenes provisions:</p>
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li>• Fine up to ₹50,000 for first offence</li>
                        <li>• Double punishment for repeat offences</li>
                        <li>• Cancellation of license or registration may apply</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <Card className="mt-12 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-8">
            <div className="text-center">
              <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Need to Report a Concern?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any concerns or need to report an incident, please contact us immediately.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-destructive/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Childline India</p>
                  <p className="text-lg font-bold text-destructive">1098</p>
                </div>
                <div className="px-6 py-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-bold text-primary">info@delhihousesociety.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          © 2024 Delhi House Society. All policies are effective as of publication and subject to periodic review.
        </p>
      </div>
    </section>
  );
};

export default Policies;
