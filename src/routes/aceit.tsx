import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmailSignup } from "@/components/site/EmailSignup";
import { aceitIssues } from "@/lib/placeholders";

export const Route = createFileRoute("/aceit")({
  head: () => ({
    meta: [
      { title: "ACEit Quarterly — ACE" },
      { name: "description", content: "ACEit is the quarterly publication of ACE — case studies, market commentary, and the season's achievements." },
      { property: "og:title", content: "ACEit Quarterly — ACE" },
      { property: "og:description", content: "Our quarterly publication." },
    ],
    links: [{ rel: "canonical", href: "/aceit" }],
  }),
  component: ACEit,
});

function ACEit() {
  return (
    <Layout>
      <PageHero
        eyebrow="ACEit · A quarterly publication"
        title="Case studies, commentary, and the quarter we just lived through."
        description="Each issue is written, edited, and laid out by our members. Below are the past issues; the next one drops every season."
      />

      <section className="container-page py-20 space-y-px">
        {aceitIssues.map((issue, i) => (
          <article key={issue.issue} className="grid md:grid-cols-12 gap-6 py-10 border-b border-hairline items-start">
            <div className="md:col-span-2">
              <div className="eyebrow">{issue.issue}</div>
              <div className="text-sm text-muted-foreground mt-1">{issue.season}</div>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-display text-3xl font-bold tracking-tight">{issue.cover}</h3>
            </div>
            <ul className="md:col-span-5 space-y-2 text-muted-foreground">
              {issue.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="text-foreground tabular-nums">0{i + 1}</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="border-t border-hairline">
        <div className="container-page py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">Subscribe</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The next issue lands in your inbox.</h2>
          </div>
          <div className="lg:col-span-6 self-end">
            <p className="text-muted-foreground mb-6">Quarterly. Free. Designed to be read in one sitting.</p>
            <EmailSignup />
          </div>
        </div>
      </section>
    </Layout>
  );
}
