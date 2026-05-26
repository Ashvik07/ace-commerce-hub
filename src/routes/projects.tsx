import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ACE" },
      { name: "description", content: "Selected projects built by ACE members." },
      { property: "og:title", content: "Projects — ACE" },
      { property: "og:description", content: "Things we have built." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Layout>
      <PageHero
        eyebrow="Selected work"
        title="Projects."
      />
      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>
    </Layout>
  );
}
