import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { alumni } from "@/lib/placeholders";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — ACE" },
      { name: "description", content: "Where ACE alumni are now — universities, companies, and ventures they have built." },
      { property: "og:title", content: "Alumni — ACE" },
      { property: "og:description", content: "Where ACE alumni are now." },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: Alumni,
});

function Alumni() {
  const years = Array.from(new Set(alumni.map((a) => a.year))).sort((a, b) => Number(b) - Number(a));
  return (
    <Layout>
      <PageHero
        eyebrow="The network"
        title="Where ACE alumni went next."
        description="Members of ACE have gone on to study, work, and build companies. A few of them, by graduating class."
      />
      <section className="container-page py-20 space-y-16">
        {years.map((year) => (
          <div key={year}>
            <div className="flex items-baseline gap-4 mb-6 border-b border-hairline pb-3">
              <h2 className="font-display text-2xl font-bold tabular-nums">{year}</h2>
              <span className="text-sm text-muted-foreground">{alumni.filter((a) => a.year === year).length} alumni</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
              {alumni
                .filter((a) => a.year === year)
                .map((a) => (
                  <div key={a.name} className="py-3 border-b border-hairline flex justify-between gap-4">
                    <div className="font-display font-semibold">{a.name}</div>
                    <div className="text-sm text-muted-foreground text-right">{a.now}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
