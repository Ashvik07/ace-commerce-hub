import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — ACE" },
      { name: "description", content: "The teachers and mentors who guide ACE." },
      { property: "og:title", content: "Faculty — ACE" },
      { property: "og:description", content: "Teachers and mentors who guide ACE." },
    ],
    links: [{ rel: "canonical", href: "/faculty" }],
  }),
  component: Faculty,
});

function Faculty() {
  return (
    <Layout>
      <PageHero
        eyebrow="Mentors & faculty"
        title="The teachers who keep us on track."
      />
      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>
    </Layout>
  );
}
