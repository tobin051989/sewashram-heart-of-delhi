import { Card, CardContent } from "@/components/ui/card";
import { Quote, Heart, Star, Sparkles } from "lucide-react";
import reetaDeviImg from "@/assets/stories/reeta-devi.jpeg";
import mdAllamImg from "@/assets/stories/md-allam.png";
import sureshKImg from "@/assets/stories/suresh-k.jpeg";
import surajImg from "@/assets/stories/suraj.jpg";
import sureshKumarFamilyImg from "@/assets/stories/suresh-kumar-family.jpg";
import radhaImg from "@/assets/stories/radha.jpeg";
import narenderSinghImg from "@/assets/stories/narender-singh.jpg";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "A Mother's Resolve for a Brighter Tomorrow",
      name: "Reeta Devi",
      images: [reetaDeviImg],
      imageCaption: "",
      content: [
        "Reeta Devi comes from Madhubani, Bihar. Her husband, Mr. Ganesh Saha, worked in a local factory to support the family until his untimely death ten years ago. Left to care for three young children on her own, Reeta turned to the Learning Center in Narela, where she began attending Adult Literacy classes. With guidance and support from our team, she was eventually able to secure a job in a nearby factory, becoming the sole breadwinner for her family.",
        "Following her husband's passing, Reeta's eldest son, who had just completed 7th grade at the time, stepped in to help shoulder responsibilities at home. Yet, despite the hardships, Reeta remained committed to one goal - ensuring her children's education. Her daughter Soni and younger son Shivam both attend the Learning Center, which has been a vital source of academic support and care. The Center has offered not just learning but a sense of stability, allowing Reeta to work with peace of mind, knowing her children are in a safe, nurturing environment.",
        "Currently living in a rented room, Reeta continues to work tirelessly to make ends meet. Her quiet strength and dedication to her children's future have not gone unnoticed. With the help of DHS and the Learning Center, her children have been able to stay on the path of learning and opportunity.",
        "Soni, Reeta's daughter, recently completed her 12th grade along with a Basic Nursing Course. Now 21 years old, Soni's journey is a reflection of her mother's sacrifices and vision. Her marriage was recently arranged by Reeta, and the wedding took place at Reeta's mother's home in Madhubani, a deeply meaningful milestone for a woman who has gracefully played the roles of both mother and father to her children.",
        "Reeta's story is not only one of survival but of quiet tenacity and love, the kind that shapes futures and inspires hope in the most challenging of circumstances."
      ],
      quote: "A mother's quiet strength and dedication can shape futures and inspire hope in the most challenging of circumstances."
    },
    {
      id: 2,
      title: "A Journey Towards Healing",
      name: "Md. Allam",
      images: [mdAllamImg],
      imageCaption: "Allam before (left) and after treatment (center & right)",
      content: [
        "Md. Allam, 33, from Mohihari, Bihar, has endured more hardship than most face in a lifetime. A difficult incident in his youth cast a long shadow over his life, forcing him to confront societal stigma from a young age. Yet, despite these challenges, Allam pressed on, pursuing his education and working tirelessly to rebuild his life. Over the years, he moved from pulling a rickshaw to securing a more stable job as a soil tester.",
        "Life dealt him another cruel blow during the COVID-19 lockdown, when a severe accident left him in a coma for 19 days. The aftermath brought financial hardship, health complications, and deep emotional strain. With nowhere else to turn, Allam eventually arrived at Sewa Ashram, where his journey toward healing truly began.",
        "At the Ashram, he received the medical care he desperately needed, including treatment for a large hernia he had been suffering from for years. Despite challenges in procuring the required supplies, his case was eventually referred to AIIMS for advanced treatment.",
        "After a long wait, Allam underwent life-changing hernia surgery at AIIMS in June 2024. The surgery was a success, marking a major turning point in his life. With dedicated care and steady recovery at Sewa Ashram, Allam regained his strength, resilience, and hope for a better future.",
        "Today, we are delighted to share that Allam has fully recovered and is now working at Sewa Ashram. He contributes joyfully and responsibly to the community that once cared for him, proving that healing goes beyond the body, it transforms the heart, restores dignity, and opens doors to renewed purpose. He also continues to hope for reconciliation with his family someday.",
        "Allam's journey is one of many stories of resilience at Sewa Ashram. Today, we support over 100 residents, including a few of our dedicated staff who live on campus. Each person carries a story of hardship, courage, and the hope for a second chance."
      ],
      quote: "Healing goes beyond the body - it transforms the heart, restores dignity, and opens doors to renewed purpose."
    },
    {
      id: 3,
      title: "A Life of Healing and Service",
      name: "Suresh K",
      images: [sureshKImg],
      imageCaption: "",
      content: [
        "When Suresh K first arrived in India from Nepal, he was just another young man looking for work. But life took a hard turn. Living on the streets, he fell seriously ill with tuberculosis. By the time help reached him, he was unconscious. That help came in the form of Ton, the founder of Sewa Ashram, who took him in and made sure he received the full course of TB treatment. With care and time, Suresh slowly recovered.",
        "By 1998, just a year after regaining his strength, he began helping other patients at the ashram. He slowly took on more responsibility, accompanying people to the TB hospital, making sure they got their medicine and follow-up care, and offering the kind of support he had once needed himself.",
        "In 2001, Suresh married Satya at the ashram. Theirs was the first staff wedding in the community, and it marked a new beginning. They built a life of faith and service, raising two sons, Amrit and Anmol and later, opening their hearts to more children. In 2009, they started a home for orphans in Delhi, known as the Family House. Today, they care for ten children who call Suresh \"Papa\" and go to school under his and Satya's guidance.",
        "Despite his many responsibilities, Suresh remains deeply committed to the ashram. He arrives at 9:30 AM and stays till evening, sitting with the sick, checking on treatments, offering calm, steady support where it's needed most.",
        "Suresh's life speaks for itself. From someone who once needed help, he has become someone others rely on. It's not a dramatic story, it's a simple one, lived out with consistency, care, and deep love for the people around him."
      ],
      quote: "From being cared for to caring for others, Suresh's life is built on quiet acts of love and responsibility."
    },
    {
      id: 4,
      title: "From Homelessness to Hope",
      name: "Suraj",
      images: [surajImg],
      imageCaption: "",
      content: [
        "On June 29, 2004, Suraj and his mother were found in the courtyard of Lok Nayak (LNJP) Hospital near Delhi Gate. They had been living on the streets for at least four months, with his mother doing all she could to care for him, begging for food and money while battling epilepsy and advanced tuberculosis. Her health had declined drastically. While Suraj was taken to the Rescue Center in Yamuna Bazar, she was admitted to the hospital for emergency treatment. Sadly, she passed away within hours, never regaining consciousness and leaving no information behind about herself or her son.",
        "Just two days later, Suraj arrived at Sewa Ashram for long-term medical care. His fight against tuberculosis lasted three years, during which he also underwent extensive physiotherapy, as he was paralyzed from the waist down. Through consistent and compassionate care, Suraj began his slow but steady recovery, and Sewa Ashram became the place he would call home.",
        "In 2008, he began attending school, confronting every obstacle with quiet courage. Over time, he completed his 12th grade and is now in the second year of a Bachelor of Arts program.",
        "Beyond academics, Suraj is exploring his creativity through graphic design and video production, acquiring editing skills that hold promise for a fulfilling career. Due to his physical condition, commuting to college and training centers had long been a challenge - public transport simply wasn't an option. Until recently, he depended entirely on the Ashram's vehicle or ad hoc arrangements. But in 2025, a new chapter began with the arrival of a NeoFly Base wheelchair, complete with a NeoBolt battery-powered attachment. This mobility solution has given Suraj a newfound sense of autonomy, allowing him to pursue his goals more freely and with confidence.",
        "Suraj's journey hasn't been easy, but he's come a long way from where he started. What stands out most is his quiet determination and the steady support he's received over the years. With each small step, through education, creativity, and now greater mobility - he's building a future shaped not by what he's been through, but by who he's becoming. His story reminds us that real change takes time, patience, and people who don't give up."
      ],
      quote: "Real change takes time, patience, and people who don't give up."
    },
    {
      id: 5,
      title: "From Survivor to Supporter",
      name: "Suresh Kumar & Family",
      images: [sureshKumarFamilyImg],
      imageCaption: "",
      content: [
        "My name is Suresh Kumar, and my journey from a small village near the Uttarakhand-Nepal border to becoming an accountant at Sewa Ashram is a story of resilience and compassion. I grew up in Nepal, and at 12, I ran away from home. Our house was near the railway tracks, and one day, out of curiosity, I boarded a train I'd never seen before. It started moving before I could get off, and I was too scared to ask for help. I ended up in Bareilly, where I fell while trying to get off and severely injured my leg. Doctors had to amputate it below the knee, and I spent six months recovering in the hospital.",
        "After hearing about a place in Jaipur that provided artificial limbs, I set out for Delhi. At the Old Delhi Railway Station, I asked a rickshaw puller to take me to a hospital, and he dropped me near Yamuna Bazaar, right where Sewa Ashram's old rescue center was located. That's where I met Ton Baba. He welcomed me warmly, offered food, and helped me get settled. The staff treated my wound and later sent me to their Laxmi Nagar center. Soon after, I was brought to the Narela center, where I've lived ever since.",
        "With the support of Ton Baba and Gaby Didi, I resumed my education and later completed a Tally course, which helped me take on accounting responsibilities at the Ashram from 2011. I got married in 2013 and now have two children who are both in school. From being rescued to now supporting others in need, my life has come full circle. The work can be tough, especially dealing with people battling addiction, but my own journey reminds me why compassion and perseverance matter. I am forever grateful to Sewa Ashram. It gave me a new life, and today, I'm proud to give back."
      ],
      quote: "The love and support I received at Sewa Ashram transformed my life, and now I strive to give back by helping others who are in desperate need, just as I once was."
    },
    {
      id: 6,
      title: "A Girl with Dreams Bigger than Her Circumstances",
      name: "Radha",
      images: [radhaImg],
      imageCaption: "",
      content: [
        "In one of Delhi's crowded neighborhoods lives 13-year-old Radha, a bright, determined girl whose dreams stretch far beyond her surroundings. Her family moved from Uttar Pradesh nearly a decade ago, not seeking comfort but a better future for their children.",
        "Radha lives with her parents and two younger brothers. Her mother and father work as daily-wage laborers - jobs that are tough and uncertain. But they press on, driven by the hope that their children's lives will be different. Sweet-natured and focused, Radha joined our Learning Center six years ago and quickly stood out. She's among the top students, not just for her academic ability but for her dedication and effort. Teachers often mention her quiet discipline and thoughtful approach to every task.",
        "Outside class, Radha excels in martial arts. She trains regularly, competes often, and usually wins, bringing the same drive and spirit to the field as she does to her studies.",
        "Radha dreams of becoming a police officer. Her face lights up when she talks about standing up for what's right and inspiring other girls like her. She believes your background shouldn't limit your future.",
        "Her path isn't easy, but with her family's support and the Learning Center behind her, we believe Radha will go far. One day, we hope to see her in uniform, standing tall and inspiring others to dream big too."
      ],
      quote: "Your background shouldn't limit your future."
    },
    {
      id: 7,
      title: "A Journey of Healing and Purpose",
      name: "Narender Singh",
      images: [narenderSinghImg],
      imageCaption: "",
      content: [
        "Narender Singh's life has been marked by hardship, loss, and struggle. At 41, the pain he carries is evident in his guarded demeanor. He has been let down by those he trusted and, in turn, has let down others. Yet, through it all, he is discovering that healing is possible, and hope is within reach.",
        "Born and raised in Delhi, Narender grew up in a family of six, with his father working in construction and his mother managing the home. As a child, he enjoyed art and cricket, but his formal education ended in the tenth grade when he started working. Over the years, he took on various jobs, from masonry and construction to driving a rickshaw and selling lottery tickets. Addiction took a devastating toll on his life. For over 20 years, he battled substance abuse, leading to the breakdown of his marriage and estrangement from his children. He lost touch with his family and spent over a decade living on the streets, caught in the grip of addiction.",
        "Narender's downward spiral eventually led him to Sewa Ashram. In 2003, he was found with a severe infection from intravenous drug use. The Ashram provided medical care, nursed him back to health, and gave him a chance to rebuild his life. However, addiction's pull was strong, and he relapsed, returning to the streets.",
        "His third rescue came at an even more critical moment; severely malnourished and battling tuberculosis. Though reluctant to return, his frail condition left him with no choice. This time, something changed. At Sewa Ashram, he not only recovered physically but also found healing for his mind and inner self.",
        "Today, Narender is a permanent staff member, playing an essential role in patient care. He manages medication distribution, maintains medical records, and assists in wound treatment. His dedication has made him a valuable asset to the Ashram. More than just a place of work, Sewa Ashram has become a sanctuary for him. He has found strength and purpose in serving others. \"If I'm feeling low, I take time to reflect and regain my strength,\" he shares.",
        "Looking ahead, Narender dreams of starting his own business with the skills he has gained. Until then, he remains dedicated to his work at the Ashram, continuing to learn and grow. And if you ever visit Sewa Ashram, don't hesitate to challenge him to a game of carom - he's always up for it!"
      ],
      quote: "If I'm feeling low, I take time to reflect and regain my strength."
    }
  ];

  return (
    <section id="stories" className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container-custom">
        {/* Hero Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Heart className="w-64 h-64 text-primary" />
          </div>
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium uppercase tracking-widest text-sm">Lives Transformed</span>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Stories of Transformation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real People. Real Change. Real Impact.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-card/80 backdrop-blur-sm" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative min-h-[350px] lg:min-h-[500px] ${index % 2 === 1 ? 'lg:col-start-2' : ''} group overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                  <img 
                    src={story.images[0]} 
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {story.imageCaption && (
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <p className="text-white/90 text-sm bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                        {story.imageCaption}
                      </p>
                    </div>
                  )}
                  {/* Decorative Number */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-6xl font-bold text-white/20">
                      {String(story.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Title & Name */}
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                      {story.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-primary rounded-full"></div>
                      <p className="text-lg text-primary font-semibold">
                        {story.name}
                      </p>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="space-y-4 text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {story.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex gap-4 items-start bg-primary/5 p-4 rounded-xl">
                      <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <p className="text-base md:text-lg italic text-foreground font-medium leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-8">
          <p className="text-lg text-muted-foreground mb-4">
            Every story begins with a moment of hope. You can be part of someone's transformation.
          </p>
          <a 
            href="/donate" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            <Heart className="w-5 h-5" />
            Support a Life Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
