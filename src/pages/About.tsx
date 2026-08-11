import { useEffect } from "react";
import { Target, Zap, Handshake, TrendingUp, Linkedin, User } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const TEAM_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85";

const values = [
  { icon: Target, title: "Transparency", body: "No surprises, no jargon. You always know what we're doing and why." },
  { icon: Zap, title: "Precision", body: "Every number tells a story — and we make sure it's the right one." },
  { icon: Handshake, title: "Partnership", body: "We grow when you grow. Your wins are the only metric that matters." },
  { icon: TrendingUp, title: "Growth-Minded", body: "Always looking forward. We model what's next, not just what was." },
];

const team: { name: string; role: string; photo?: string; linkedin: string }[] = [
   { name: "Ankit B, CPA, CA (Ontario & Quebec)", role: "Partner / Founder, CEO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/Ankit-1-Profile-Pic.png?resize=768%2C768&ssl=1", linkedin: "https://www.linkedin.com/in/ankitbh/" },
  { name: "Mahendra B, CA (India)", role: "Partner, CGO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/1581103984852.jpg?w=375&ssl=1", linkedin: "https://www.linkedin.com/in/mahendrabhandari/" },
  { name: "Allan F, CPA (Quebec)", role: "Partner, Quebec", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2023/07/Allan-F.jpg?w=213&ssl=1", linkedin: "https://www.linkedin.com/in/allanfefergrad/" },
  { name: "Ashok K, CPA, CA, CPA (Co)", role: "Partner", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2023/04/Ashok-Profile-Pic-400x400-1.jpg?w=400&ssl=1", linkedin: "https://www.linkedin.com/in/ashok-khandelwal-463b8425/" },
  { name: "Paul B, CPA", role: "Fractional CFO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2025/06/Paul-B.jpg?resize=768%2C768&ssl=1", linkedin: "https://www.linkedin.com/in/paul-bretton-cpa-cga-8a753858/" },
  { name: "Westphal J. P.", role: "Director of Strategy & Operations", linkedin: "https://www.linkedin.com/in/westphal-j-2212a921/" },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | TheCFO.Site";
  }, []);

  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">About Us</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">
              Built for the Businesses That Didn't Have a Seat at the <span className="accent-word">CFO Table</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <img src={TEAM_IMG} alt="Team collaborating in a bright office" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-2xl" />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><p className="overline mb-4">Why We Exist</p></Reveal>
            <Reveal delay={0.05}><h2 className="h2 mb-6">A Gap We Lived <span className="accent-word">Through</span></h2></Reveal>
            <div className="space-y-5 text-base leading-relaxed">
              <Reveal delay={0.1}>
                <p>TheCFO.Site was founded by senior finance operators who spent careers inside venture-backed and bootstrapped service firms. We watched founders crossing $2M, then $5M, then $10M — and falling into the same trap: clean books, but no one translating them into decisions.</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>The traditional options were broken. Hiring a full-time CFO at $200K+ before $20M in revenue rarely made sense. Outsourced controllership stopped at compliance. Big-firm consultants showed up for projects, not partnership.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>We built TheCFO.Site to be the third path: senior, embedded, and tuned specifically to how service businesses make money. The team you would hire if you were ready — available now, at a stage you can afford.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Our Approach</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-6 max-w-3xl">A Senior, Embedded <span className="accent-word">Finance Team</span></h2></Reveal>
          <Reveal delay={0.1}>
            <p className="lead max-w-3xl">
              We embed senior finance leadership into your operating cadence — owning the close, the reporting,
              and the strategic conversations. You get a Bookkeeper, Accountant, Controller, and Fractional CFO
              working as one team, scaled to whatever stage you're in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Our Values</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">What We <span className="accent-word">Stand For</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><v.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4 text-center">Our Team</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10 text-center">Our <span className="accent-word">Team</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="flex flex-col items-center text-center">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-40 h-40 rounded-full object-cover mb-5 ring-1 ring-[hsl(var(--border-warm))]"
                    />
                  ) : (
                    <div
                      className="w-40 h-40 rounded-full mb-5 flex items-center justify-center ring-1 ring-[hsl(var(--border-warm))]"
                      style={{ backgroundColor: "#EEEAE3" }}
                    >
                      <User className="w-16 h-16" style={{ color: "#5D524A" }} />
                    </div>
                  )}
                  <p className="overline mb-2">{m.role}</p>
                  <p className="font-bold text-navy text-lg leading-tight mb-3">{m.name}</p>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View LinkedIn Profile"
                    aria-label={`View LinkedIn profile of ${m.name}`}
                    className="inline-flex transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
                  >
                    <Linkedin size={18} style={{ color: "#B9832B" }} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
