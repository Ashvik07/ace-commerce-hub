import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { projects } from "@/lib/placeholders";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ACE" },
      { name: "description", content: "Selected projects built by ACE members — platforms, publications, and workshops." },
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
        title="Projects we built — for competitions, for ourselves, for everyone after us."
      />
      <section className="container-page py-20">
        <div className="divide-y divide-hairline border-y border-hairline">
          {projects.map((p, i) => (
            <article key={p.title} className="py-10 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="md:col-span-3">
                <span className="inline-block text-xs uppercase tracking-wider border border-hairline px-2 py-1">{p.tag}</span>
              </div>
              <h3 className="md:col-span-4 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="md:col-span-4 text-muted-foreground leading-relaxed">{p.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
