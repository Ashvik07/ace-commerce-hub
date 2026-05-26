import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { faculty } from "@/lib/placeholders";
import { Mail } from "lucide-react";

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
        <div className="border-y border-hairline divide-y divide-hairline">
          {faculty.map((f) => (
            <div key={f.email} className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-4 font-display font-semibold text-lg">{f.name}</div>
              <div className="md:col-span-4 text-muted-foreground">{f.role}</div>
              <a href={`mailto:${f.email}`} className="md:col-span-4 inline-flex items-center gap-2 text-sm hover:underline">
                <Mail className="h-4 w-4" /> {f.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
