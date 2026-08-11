import { Phone, Mail, Clock, ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";


export default function Contact() {
  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-12">
        <div className="container-page max-w-4xl text-center">
          <Reveal><p className="overline mb-4">Contact</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">Let's Talk About Your <span className="accent-word">Growth</span></h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl mx-auto">Free 30-minute discovery call. No obligation.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-24 lg:pb-28">
        <div className="container-page max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT — Book Your Call */}
            <Reveal>
              <div className="card-warm p-8 lg:p-10 shadow-lg h-full flex flex-col">
                <div className="text-2xl mb-4" aria-hidden="true">📅</div>
                <h2 className="text-xl font-extrabold text-navy mb-3">Book Your Call</h2>
                <p className="text-sm leading-relaxed text-bodytext mb-6 flex-grow">
                  Pick a time that works for you and we'll take it from there — a free 30-minute discovery call with our team.
                </p>
                <a
                  href="https://api.bookingmantra.club/widget/booking/wLEuL7W7zyWjVbsEk9EA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Book a Free 30-Min Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            {/* RIGHT — Prefer to Reach Out Directly? */}
            <Reveal delay={0.05}>
              <div className="card-warm p-8 lg:p-10 shadow-lg h-full flex flex-col">
                <div className="text-2xl mb-4" aria-hidden="true">💬</div>
                <h2 className="text-xl font-extrabold text-navy mb-4">Prefer to Reach Out Directly?</h2>
                <div className="space-y-3 text-sm">
                  <a href="tel:+16476992997" className="flex items-center gap-3 text-navy hover:text-amber transition-colors">
                    <Phone className="w-4 h-4 text-amber flex-shrink-0" />
                    <span className="font-semibold">+1-647-699-2997</span>
                  </a>
                  <a href="mailto:info@thecfo.site" className="flex items-center gap-3 text-navy hover:text-amber transition-colors">
                    <Mail className="w-4 h-4 text-amber flex-shrink-0" />
                    <span className="font-semibold">info@thecfo.site</span>
                  </a>
                  <div className="flex items-center gap-3 text-bodytext">
                    <Clock className="w-4 h-4 text-amber flex-shrink-0" />
                    <span>We respond within one business day</span>
                  </div>
                </div>
                <p className="text-sm text-bodytext leading-relaxed mt-auto pt-5 border-t border-[hsl(var(--border-warm))]">
                  No pitch — just a conversation about your business goals.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Divider + trust points */}
          <Reveal delay={0.1}>
            <div className="mt-10 pt-10 border-t border-[hsl(var(--border-warm))]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Free 30-minute call",
                  "No obligation",
                  "Confidential discussion",
                  "Clear next steps",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-navy">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber/10 text-amber flex items-center justify-center text-xs" aria-hidden="true">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[hsl(var(--canvas))] py-20 px-8 border-t border-[hsl(var(--border-warm))]">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="overline mb-3">Find Us</p>
              <h2 className="h2">Visit Our Office</h2>
              <p className="lead mt-4 max-w-2xl mx-auto">
                Located in the heart of Oakville, Ontario — serving businesses across Canada and the United States.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-7 rounded-xl bg-[#FEFDFB] border border-[#E1DDD6] hover:border-[#B9832B]/30 transition-colors h-full">
                <MapPin size={24} color="#B9832B" className="mb-4" />
                <p className="overline mb-2">Our Office</p>
                <p className="text-sm text-[hsl(var(--body-text))] leading-relaxed">
                  Unit 210 – 2030 Bristol Cir<br />
                  Oakville, ON, L6H 6P5
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="p-7 rounded-xl bg-[#FEFDFB] border border-[#E1DDD6] hover:border-[#B9832B]/30 transition-colors h-full">
                <Phone size={24} color="#B9832B" className="mb-4" />
                <p className="overline mb-2">Call Us</p>
                <a href="tel:+16476992997" className="text-sm font-semibold text-[hsl(var(--navy))] hover:text-[hsl(var(--amber))] transition-colors">
                  +1-647-699-2997
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-7 rounded-xl bg-[#FEFDFB] border border-[#E1DDD6] hover:border-[#B9832B]/30 transition-colors h-full">
                <Mail size={24} color="#B9832B" className="mb-4" />
                <p className="overline mb-2">Email Us</p>
                <a href="mailto:info@thecfo.site" className="text-sm font-semibold text-[hsl(var(--navy))] hover:text-[hsl(var(--amber))] transition-colors">
                  info@thecfo.site
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 w-full overflow-hidden rounded-2xl border border-[#E1DDD6]">
              <iframe
                title="TheCFO.Site Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.5!2d-79.7!3d43.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUnit+210+2030+Bristol+Cir+Oakville+ON!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
