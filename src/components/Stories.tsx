import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import gulistanImg1 from "@/assets/stories/gulistan-1.jpeg";
import gulistanImg2 from "@/assets/stories/gulistan-2.jpeg";
import sureshKumarImg from "@/assets/stories/suresh-kumar.jpeg";
import radhaImg from "@/assets/stories/radha.jpeg";
import narenderSinghImg from "@/assets/stories/narender-singh.jpg";
import surajImg from "@/assets/stories/suraj.jpg";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "Empowerment Through Women's Literacy",
      name: "Gulistan Rehan Khan",
      images: [gulistanImg1, gulistanImg2],
      content: [
        "Gulistan Rehan Khan, a spirited and determined 31-year-old woman, lives with her husband and four children in a nearby slum within our community. Originally from Uttar Pradesh, Gulistan joined our education program a few years ago, bringing with her a story of strength and a desire for change.",
        "She had studied up to the 3rd standard in a government school but dropped out early, finding the school environment restrictive, likening it to a jail. Years later, as her own children began attending school, she saw firsthand the value of education in shaping their future. This sparked something within her. She wanted not only to support her children better but also to rediscover the power of learning for herself.",
        "Restarting her education was no easy feat. Gulistan faced many hurdles, self-doubt, hesitation, and the challenge of balancing studies with household responsibilities. In the beginning, she often relied on her children for help with her lessons and was shy about asking questions. But with steady encouragement and her own growing determination, she didn't give up.",
        "Today, Gulistan proudly reads Hindi books and writes with only minor errors. She's no longer afraid or ashamed of learning. Instead, she celebrates her progress, she can now manage household expenses more confidently, assist her children with schoolwork, prepare grocery lists on her own, and contribute to the family income as a licensed E-Rickshaw driver.",
        "Gulistan's journey is a powerful reminder that it's never too late to learn, grow, and transform. Her story reflects the deep impact of literacy on women's empowerment - not just for themselves, but for their families and communities too."
      ],
      quote: "Through learning, Gulistan found new confidence and a fresh start."
    },
    {
      id: 2,
      title: "From Survivor to Supporter",
      name: "Suresh Kumar's Life-Changing Journey",
      images: [sureshKumarImg],
      content: [
        "My name is Suresh Kumar, and my journey from a small village near the Uttarakhand-Nepal border to becoming an accountant at Sewa Ashram is a story of resilience and compassion. I grew up in Nepal, and at 12, I ran away from home. Our house was near the railway tracks, and one day, out of curiosity, I boarded a train I'd never seen before. It started moving before I could get off, and I was too scared to ask for help. I ended up in Bareilly, where I fell while trying to get off and severely injured my leg. Doctors had to amputate it below the knee, and I spent six months recovering in the hospital.",
        "After hearing about a place in Jaipur that provided artificial limbs, I set out for Delhi. At the Old Delhi Railway Station, I asked a rickshaw puller to take me to a hospital, and he dropped me near Yamuna Bazaar, right where Sewa Ashram's old rescue center was located. That's where I met Ton Baba. He welcomed me warmly, offered food, and helped me get settled. The staff treated my wound and later sent me to their Laxmi Nagar center. Soon after, I was brought to the Narela center, where I've lived ever since.",
        "With the support of Ton Baba and Gaby Didi, I resumed my education and later completed a Tally course, which helped me take on accounting responsibilities at the Ashram from 2011. I got married in 2013 and now have two children who are both in school. From being rescued to now supporting others in need, my life has come full circle. The work can be tough, especially dealing with people battling addiction, but my own journey reminds me why compassion and perseverance matter. I am forever grateful to Sewa Ashram. It gave me a new life, and today, I'm proud to give back."
      ],
      quote: "The love and support I received at Sewa Ashram transformed my life, and now I strive to give back by helping others who are in desperate need, just as I once was."
    },
    {
      id: 3,
      title: "A Girl with Dreams Bigger than Her Circumstances",
      name: "Radha",
      images: [radhaImg],
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
      id: 4,
      title: "A Journey of Healing and Purpose",
      name: "Narender Singh",
      images: [narenderSinghImg],
      content: [
        "Narender Singh's life has been marked by hardship, loss, and struggle. At 41, the pain he carries is evident in his guarded demeanor. He has been let down by those he trusted and, in turn, has let down others. Yet, through it all, he is discovering that healing is possible, and hope is within reach.",
        "Born and raised in Delhi, Narender grew up in a family of six, with his father working in construction and his mother managing the home. As a child, he enjoyed art and cricket, but his formal education ended in the tenth grade when he started working. Over the years, he took on various jobs, from masonry and construction to driving a rickshaw and selling lottery tickets. Addiction took a devastating toll on his life. For over 20 years, he battled substance abuse, leading to the breakdown of his marriage and estrangement from his children. He lost touch with his family and spent over a decade living on the streets, caught in the grip of addiction.",
        "Narender's downward spiral eventually led him to Sewa Ashram. In 2003, he was found with a severe infection from intravenous drug use. The Ashram provided medical care, nursed him back to health, and gave him a chance to rebuild his life. However, addiction's pull was strong, and he relapsed, returning to the streets.",
        "His third rescue came at an even more critical moment; severely malnourished and battling tuberculosis. Though reluctant to return, his frail condition left him with no choice. This time, something changed. At Sewa Ashram, he not only recovered physically but also found healing for his mind and spirit.",
        "Today, Narender is a permanent staff member, playing an essential role in patient care. He manages medication distribution, maintains medical records, and assists in wound treatment. His dedication has made him a valuable asset to the Ashram. More than just a place of work, Sewa Ashram has become a sanctuary for him. He has found solace in faith and purpose in serving others. \"If I'm feeling bad, I read the Bible,\" he shares. \"And I'm really touched by it. I know Jesus is my true friend, and I feel that very strongly.\"",
        "Looking ahead, Narender dreams of starting his own business with the skills he has gained. Until then, he remains dedicated to his work at the Ashram, continuing to learn and grow. And if you ever visit Sewa Ashram, don't hesitate to challenge him to a game of carom - he's always up for it!"
      ],
      quote: "If I'm feeling bad, I read the Bible. I know Jesus is my true friend, and I feel that very strongly."
    },
    {
      id: 5,
      title: "From Homelessness to Hope",
      name: "Suraj",
      images: [surajImg],
      content: [
        "On June 29, 2004, Suraj and his mother were found in the courtyard of Lok Nayak (LNJP) Hospital near Delhi Gate. They had been living on the streets for at least four months, with his mother doing all she could to care for him, begging for food and money while battling epilepsy and advanced tuberculosis. Her health had declined drastically. While Suraj was taken to the Rescue Center in Yamuna Bazar, she was admitted to the hospital for emergency treatment. Sadly, she passed away within hours, never regaining consciousness and leaving no information behind about herself or her son.",
        "Just two days later, Suraj arrived at Sewa Ashram for long-term medical care. His fight against tuberculosis lasted three years, during which he also underwent extensive physiotherapy, as he was paralyzed from the waist down. Through consistent and compassionate care, Suraj began his slow but steady recovery, and Sewa Ashram became the place he would call home.",
        "In 2008, he began attending school, confronting every obstacle with quiet courage. Over time, he completed his 12th grade and is now in the second year of a Bachelor of Arts program.",
        "Beyond academics, Suraj is exploring his creativity through graphic design and video production, acquiring editing skills that hold promise for a fulfilling career. Due to his physical condition, commuting to college and training centers had long been a challenge- public transport simply wasn't an option. Until recently, he depended entirely on the Ashram's vehicle or ad hoc arrangements. But in 2025, a new chapter began with the arrival of a NeoFly Base wheelchair, complete with a NeoBolt battery-powered attachment. This mobility solution has given Suraj a newfound sense of autonomy, allowing him to pursue his goals more freely and with confidence.",
        "Suraj's journey hasn't been easy, but he's come a long way from where he started. What stands out most is his quiet determination and the steady support he's received over the years. With each small step, through education, creativity, and now greater mobility - he's building a future shaped not by what he's been through, but by who he's becoming. His story reminds us that real change takes time, patience, and people who don't give up."
      ],
      quote: "Real change takes time, patience, and people who don't give up."
    }
  ];

  return (
    <section id="stories" className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stories of Transformation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real People. Real Change. Real Impact.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card key={story.id} className="overflow-hidden shadow-lg animate-fade-in h-[85vh]" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`grid md:grid-cols-2 gap-0 h-full ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {story.images.length > 1 ? (
                    <div className="grid grid-cols-2 h-full">
                      {story.images.map((img, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={img} 
                          alt={`${story.name} - ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={story.images[0]} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <CardContent className="p-6 md:p-8 flex flex-col h-full overflow-y-auto">
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {story.title}
                    </h2>
                    <p className="text-lg md:text-xl text-primary font-semibold">
                      {story.name}
                    </p>
                  </div>

                  <div className="space-y-3 text-base text-muted-foreground leading-relaxed flex-1">
                    {story.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex gap-3">
                      <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-base md:text-lg italic text-foreground">
                        {story.quote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
