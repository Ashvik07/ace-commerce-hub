import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { resources } from "@/lib/placeholders";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — ACE" },
      { name: "description", content: "Guides, frameworks, and toolkits from ACE — mock stock, pitching, M&A, quizzes and more." },
      { property: "og:title", content: "Resources — ACE" },
      { property: "og:description", content: "Guides and toolkits used by ACE members." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

function Resources() {
  return (
    <Layout>
      <PageHero
        eyebrow="Check these out"
        title="The toolkits we wish we'd had when we started."
        description="Each module distills lessons from past competitions, mentor sessions, and our own attempts that didn't quite land."
      />
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {resources.map((r, i) => (
            <article key={r.title} className="bg-background p-8 group hover:bg-surface transition-colors">
              <div className="eyebrow mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
