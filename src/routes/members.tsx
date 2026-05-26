import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { members } from "@/lib/placeholders";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Members — ACE" },
      { name: "description", content: "Meet the current members of ACE — the students running the commerce club." },
      { property: "og:title", content: "Members — ACE" },
      { property: "og:description", content: "Current student members of ACE." },
    ],
    links: [{ rel: "canonical", href: "/members" }],
  }),
  component: Members,
});

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function Members() {
  return (
    <Layout>
      <PageHero
        eyebrow="The current cohort"
        title="The students running ACE this year."
      />
      <section className="container-page py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {members.map((m) => (
            <article key={m.name} className="bg-background p-6">
              <div className="aspect-square mb-4 bg-surface-2 grid place-items-center font-display text-4xl font-bold text-muted-foreground">
                {initials(m.name)}
              </div>
              <div className="font-display font-semibold text-lg leading-tight">{m.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
              <div className="text-xs text-muted-foreground mt-2 tabular-nums">Class {m.batch}</div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
