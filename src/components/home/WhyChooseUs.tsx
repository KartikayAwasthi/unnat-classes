import Reveal from "@/components/Reveal";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            A Foundation Built for Success
          </h2>
          <p className="mt-4 text-base text-navy-900/60 sm:text-lg">
            Everything we do is designed around one goal — helping your child learn,
            grow, and lead with confidence.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={`group rounded-2xl border border-navy-900/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
