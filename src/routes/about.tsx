import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ACE" },
      { name: "description", content: "ACE — Alliance of Commerce and Entrepreneurship, Delhi Public School Dwarka." },
      { property: "og:title", content: "About — ACE" },
      { property: "og:description", content: "ACE — Alliance of Commerce and Entrepreneurship, DPS Dwarka." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title="ACE — Alliance of Commerce and Entrepreneurship."
        description="Delhi Public School Dwarka."
      />
      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>
    </Layout>
  );
}
