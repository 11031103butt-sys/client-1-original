import { GraduationCap, ShieldCheck } from "lucide-react";

export default function Standards() {
  return (
    <section className="standards">
      <div className="wrap standardsGrid">
        <div>
          <div className="eyebrow light">QUALITY & STANDARDS</div>
          <h2>
            Built for serious <em>professional documentation.</em>
          </h2>
          <p>
            Our applicable credential evaluation services are designed with
            AACRAO EDGE reference standards and relevant U.S. documentation
            requirements in mind.*
          </p>
        </div>

        <div className="standardCards">
          <div>
            <ShieldCheck />
            <b>USCIS-focused documentation*</b>
            <span>
              Structured around the evidentiary purpose of the engagement.
            </span>
          </div>
          <div>
            <GraduationCap />
            <b>AACRAO EDGE-aligned evaluations*</b>
            <span>
              Applied to applicable international credential evaluation
              services.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
