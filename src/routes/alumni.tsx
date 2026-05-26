import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — ACE" },
      { name: "description", content: "Where ACE alumni are now." },
      { property: "og:title", content: "Alumni — ACE" },
      { property: "og:description", content: "Where ACE alumni are now." },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: Alumni,
});

function Alumni() {
  return (
    <Layout>
      <PageHero
        eyebrow="The network"
        title="Where ACE alumni went next."
      />
      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>
    </Layout>
  );
}
