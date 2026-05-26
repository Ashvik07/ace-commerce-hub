import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { events, pastEvents } from "@/lib/placeholders";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ACE" },
      { name: "description", content: "Upcoming and past events run by ACE — competitions, bootcamps, and the annual championship." },
      { property: "og:title", content: "Events — ACE" },
      { property: "og:description", content: "What's coming up and what we have hosted before." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function Events() {
  return (
    <Layout>
      <PageHero
        eyebrow="Calendar"
        title="What's coming up. What just happened."
        description="Open events are listed below. To attend an inter-school competition, write to us first."
      />
      <section className="container-page py-20">
        <div className="eyebrow mb-6">Upcoming</div>
        <ul className="divide-y divide-hairline border-y border-hairline mb-20">
          {events.map((e) => (
            <li key={e.title} className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-2 text-sm tabular-nums text-muted-foreground">{fmt(e.date)}</div>
              <div className="md:col-span-4 font-display font-semibold text-lg">{e.title}</div>
              <div className="md:col-span-6 text-muted-foreground">{e.description}</div>
            </li>
          ))}
        </ul>

        <div className="eyebrow mb-6">Past events</div>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {pastEvents.map((e) => (
            <li key={e.title} className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-2 text-sm tabular-nums text-muted-foreground">{fmt(e.date)}</div>
              <div className="md:col-span-4 font-display font-semibold text-lg">{e.title}</div>
              <div className="md:col-span-6 text-muted-foreground">{e.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
