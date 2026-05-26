import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ACE" },
      { name: "description", content: "Events run by ACE — competitions, bootcamps, and the annual fest." },
      { property: "og:title", content: "Events — ACE" },
      { property: "og:description", content: "Events run by ACE." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

function Events() {
  return (
    <Layout>
      <PageHero
        eyebrow="Calendar"
        title="Events."
      />
      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>
    </Layout>
  );
}
