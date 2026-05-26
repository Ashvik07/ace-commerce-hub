import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — ACE" },
      { name: "description", content: "Guides, frameworks, and toolkits from ACE." },
      { property: "og:title", content: "Resources — ACE" },
      { property: "og:description", content: "Guides and toolkits from ACE." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

function Resources() {
  return (
    <Layout>
      <PageHero
        eyebrow="Toolkits"
        title="Resources."
      />
      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>
    </Layout>
  );
}
