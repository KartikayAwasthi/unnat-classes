import Reveal from "@/components/Reveal";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
            Our Features
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            What Makes Learning Effective Here
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.08}
              className="relative overflow-hidden rounded-2xl bg-navy-950 p-7 text-white shadow-sm transition-transform hover:-translate-y-1.5"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/10" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
