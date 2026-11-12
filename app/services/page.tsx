"use client";

import { ArrowRight, Check, Clock3, ClipboardList, FileText, SearchCheck, PackageCheck } from "lucide-react";
import Link from "next/link";
import { pricingData, slugify } from "@/app/components/pricedata";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { scrollToSection as go } from "@/app/components/scroll";
import s from "./services.module.css";

const steps = [
  { icon: ClipboardList, title: "Choose a service", text: "Pick the option below that matches your case." },
  { icon: FileText, title: "Share your details", text: "Tell us about your background and send your documents." },
  { icon: SearchCheck, title: "We prepare and check", text: "Your documents are put together and reviewed for completeness." },
  { icon: PackageCheck, title: "Receive your package", text: "You get a finished, organised set that is ready to submit." },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className={s.page}>
        {/* HERO: what this page is, in one glance */}
        <section className={s.hero}>
          <div className={s.wrap}>
            <h1 className={s.h1}>Choose the immigration document service you need.</h1>
            <p className={s.lead}>
              We prepare the documents and petition materials for your U.S. immigration case.
              Find your category, check the price, and start.
            </p>

            <nav className={s.jump} aria-label="Service categories">
              <span className={s.jumpLabel}>Jump to:</span>
              {pricingData.map((c) => (
                <a key={c.tab} href={`#${slugify(c.tab)}`} className={s.chip}>
                  {c.tab}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* HOW IT WORKS: a real sequence, so numbering is meaningful */}
        <section className={s.how} aria-labelledby="how-title">
          <div className={s.wrap}>
            <h2 id="how-title" className={s.h2small}>How it works</h2>
            <ol className={s.steps}>
              {steps.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className={s.step}>
                  <span className={s.stepNum}>{i + 1}</span>
                  <Icon size={20} aria-hidden="true" className={s.stepIcon} />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CATEGORIES */}
        {pricingData.map((category) => (
          <section key={category.tab} id={slugify(category.tab)} className={s.group}>
            <div className={s.wrap}>
              <div className={s.groupHead}>
                <div className={s.groupText}>
                  <h2 className={s.h2}>{category.tab}</h2>
                  <p className={s.tagline}>{category.tagline}</p>
                  {category.desc && <p className={s.muted}>{category.desc}</p>}
                  {category.categories && (
                    <p className={s.muted}>
                      <b>Who this is for:</b> {category.categories}
                    </p>
                  )}
                </div>

                {/* Shared info shown ONCE per group instead of on every card */}
                <aside className={s.included} aria-label={`Included in every ${category.tab} service`}>
                  {category.time && (
                    <div className={s.time}>
                      <Clock3 size={16} aria-hidden="true" />
                      <span>Typical turnaround: <b>{category.time}</b></span>
                    </div>
                  )}
                  {category.features?.length > 0 && (
                    <>
                      <strong className={s.includedTitle}>Included in every service here</strong>
                      <ul>
                        {category.features.map((f) => (
                          <li key={f}>
                            <Check size={15} aria-hidden="true" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </aside>
              </div>

              <div className={s.grid}>
                {category.items.map((item) => {
                  const isQuote = !item.price;
                  return (
                    <article className={s.card} key={item.name}>
                      <h3 className={s.cardTitle}>{item.name}</h3>
                      <p className={s.cardDesc}>{item.desc ?? category.desc}</p>

                      <div className={s.cardBottom}>
                        <div className={s.price}>
                          {isQuote ? (
                            <>
                              <span className={s.priceMain}>Custom quote</span>
                              <span className={s.priceNote}>Price depends on your case</span>
                            </>
                          ) : (
                            <>
                              <span className={s.priceMain}>{item.price}</span>
                              <span className={s.priceNote}>Standard price</span>
                            </>
                          )}
                        </div>
                        <Link
                          href={`/services/${slugify(item.name)}`}
                          className={isQuote ? s.btnOutline : s.btn}
                          aria-label={`${isQuote ? "Request a quote for" : "Start"} ${item.name}`}
                        >
                          {isQuote ? "Request a quote" : "Start this service"}
                          <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* HELP CTA */}
        <section className={s.help}>
          <div className={s.wrap}>
            <h2 className={s.h2}>Not sure which service fits you?</h2>
            <p className={s.lead}>
              Tell us about your situation and we will point you to the right option.
            </p>
            <button type="button" onClick={() => go("contact")} className={s.btnLight}>
              Book a consultation
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}