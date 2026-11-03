import { processSteps } from "./data";

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <div className="center">
          <div className="eyebrow">THE IMMIGRA PROCESS</div>
          <h2>
            From documents to <em>opportunity.</em>
          </h2>
          <p>
            A simple, transparent process designed around your convenience.
          </p>
        </div>

        <div className="processGrid">
          {processSteps.map(([number, title, text]) => (
            <div className="processItem" key={number}>
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
