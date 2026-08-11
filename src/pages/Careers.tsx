import { useState } from "react";
import { Globe, GraduationCap, DollarSign, Users, CheckCircle2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { FormEmbed } from "@/components/site/FormEmbed";

const benefits = [
  { icon: Globe, title: "Primarily Remote", body: "Work from anywhere. We've been remote-first since day one." },
  { icon: GraduationCap, title: "Growth-First", body: "Certifications paid for, mentorship built into your week." },
  { icon: DollarSign, title: "Competitive Pay", body: "Market-rate compensation with profit-sharing for senior roles." },
  { icon: Users, title: "Variety", body: "Work with 10+ industries — never get bored." },
];

export default function Careers() {
  const [formKey, setFormKey] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSubmitted = () => {
    setSuccess(true);
    window.setTimeout(() => {
      setSuccess(false);
      setFormKey((k) => k + 1);
    }, 3000);
  };

  return (
    <>
      {/* HERO — only this page allows navy hero per spec */}
      <section className="bg-navy text-white pt-36 lg:pt-40 pb-20 lg:pb-24">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Join Us</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1 text-white">
              Join a Team That's Redefining <span className="accent-word">Financial Leadership</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/75 mt-6 max-w-2xl text-lg leading-relaxed">
              Senior finance work, primarily remote, with the variety only fractional work can offer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Why Join Us</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">A Better Way to <span className="accent-word">Practice Finance</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><b.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{b.title}</h3>
                  <p className="text-sm leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* GENERAL APPLICATION */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-2xl">
          <Reveal><p className="overline mb-4">General Application</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-3">Don't See Your <span className="accent-word">Role?</span></h2></Reveal>
          <Reveal delay={0.1}><p className="lead mb-10">Tell us about yourself. We're always looking for senior finance talent.</p></Reveal>

          <Reveal delay={0.15}>
            <div className="card-warm p-4 sm:p-6 relative">
              {success && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-lg bg-[hsl(var(--card-warm))] p-8 text-center animate-fade-in">
                  <CheckCircle2 className="h-10 w-10 text-amber" aria-hidden="true" />
                  <p className="font-bold text-navy">
                    Thank you! Your application has been received. We'll be in touch shortly.
                  </p>
                </div>
              )}
              <FormEmbed
                key={formKey}
                src="https://api.bookingmantra.club/widget/form/kXHjK1LNpx3ZQYgvUsOa"
                id={`inline-kXHjK1LNpx3ZQYgvUsOa-${formKey}`}
                formId="kXHjK1LNpx3ZQYgvUsOa"
                title="Careers Application - CFO Site"
                height={1120}
                onSubmitted={handleSubmitted}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
