import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { EmailSignup } from "@/components/site/EmailSignup";
import { ArrowRight } from "lucide-react";
import { achievements, events, pastEvents } from "@/lib/placeholders";
import heroImg from "@/assets/hero.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACE — Commerce Club" },
      { name: "description", content: "ACE is a student-led commerce club exploring markets, finance, and entrepreneurship. Events, projects, and the ACEit quarterly." },
      { property: "og:title", content: "ACE — Commerce Club" },
      { property: "og:description", content: "Where students learn markets, build ideas, and run real competitions." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="container-page py-20 md:py-32 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">The Commerce Club · Est. on first principles</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              Markets, ideas,<br />and the people<br />behind them.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ACE is a student-led commerce club where members trade simulated portfolios, pitch real ideas, write a quarterly publication, and compete across schools.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 h-12 px-6 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                About the club <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/events" className="inline-flex items-center gap-2 h-12 px-6 border border-input text-sm font-medium hover:bg-accent transition-colors">
                Upcoming events
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-surface-2">
              <img src={heroImg} alt="ACE members at work" width={1600} height={1100} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-hairline">
        <div className="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 80}>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold">{a.stat}</div>
                <div className="mt-2 text-sm text-muted-foreground max-w-[14ch]">{a.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MONTAGE */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">A year at ACE</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From the floor to the podium.</h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground text-lg leading-relaxed self-end">
              Moments from competitions, workshops, and quiet hours of preparation that made them possible.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <Reveal className="md:col-span-7 aspect-[16/10] overflow-hidden bg-surface-2">
              <img src={event1} alt="Student presenting at podium" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 aspect-[16/10] overflow-hidden bg-surface-2">
              <img src={event2} alt="Financial analysis notebook" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
            </Reveal>
            <Reveal delay={200} className="md:col-span-12 aspect-[21/9] overflow-hidden bg-surface-2">
              <img src={event3} alt="Students celebrating a win" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3">What's next</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming events</h2>
            </div>
            <Link to="/events" className="text-sm inline-flex items-center gap-1 hover:underline">
              All events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {events.slice(0, 3).map((e) => (
              <li key={e.title} className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2 text-sm tabular-nums text-muted-foreground">
                  {new Date(e.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                </div>
                <div className="md:col-span-4 font-display font-semibold text-lg">{e.title}</div>
                <div className="md:col-span-6 text-muted-foreground">{e.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SIGNUP */}
      <section>
        <div className="container-page py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">Stay in the loop</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get the next ACEit issue in your inbox.</h2>
          </div>
          <div className="lg:col-span-6 self-end">
            <p className="text-muted-foreground mb-6">
              One email a quarter. Our latest issue, event invitations, and the occasional reading list. No noise.
            </p>
            <EmailSignup />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// silence unused import linter for legacy past events
void pastEvents;
