import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmailSignup } from "@/components/site/EmailSignup";

export const Route = createFileRoute("/aceit")({
  head: () => ({
    meta: [
      { title: "ACEit — ACE" },
      { name: "description", content: "ACEit is the publication of ACE — Alliance of Commerce and Entrepreneurship, DPS Dwarka." },
      { property: "og:title", content: "ACEit — ACE" },
      { property: "og:description", content: "Our publication." },
    ],
    links: [{ rel: "canonical", href: "/aceit" }],
  }),
  component: ACEit,
});

function ACEit() {
  return (
    <Layout>
      <PageHero
        eyebrow="ACEit · The ACE publication"
        title="ACEit."
      />

      <section className="container-page py-20">
        <p className="text-muted-foreground">Details coming soon.</p>
      </section>

      <section className="border-t border-hairline">
        <div className="container-page py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">Subscribe</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get the next issue in your inbox.</h2>
          </div>
          <div className="lg:col-span-6 self-end">
            <EmailSignup />
          </div>
        </div>
      </section>
    </Layout>
  );
}
