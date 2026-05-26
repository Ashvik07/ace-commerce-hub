import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { EmailSignup } from "@/components/site/EmailSignup";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACE — Alliance of Commerce and Entrepreneurship" },
      { name: "description", content: "ACE — Alliance of Commerce and Entrepreneurship, Delhi Public School Dwarka." },
      { property: "og:title", content: "ACE — Alliance of Commerce and Entrepreneurship" },
      { property: "og:description", content: "Alliance of Commerce and Entrepreneurship, DPS Dwarka." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="border-b border-hairline">
        <div className="container-page py-20 md:py-32">
          <div className="eyebrow mb-6">Delhi Public School Dwarka</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] max-w-5xl">
            ACE — Alliance of<br />Commerce and<br />Entrepreneurship.
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/members" className="inline-flex items-center gap-2 h-12 px-6 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
              Meet the Apex Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 h-12 px-6 border border-input text-sm font-medium hover:bg-accent transition-colors">
              About
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">Stay in the loop</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get ACE updates in your inbox.</h2>
          </div>
          <div className="lg:col-span-6 self-end">
            <EmailSignup />
          </div>
        </div>
      </section>
    </Layout>
  );
}
