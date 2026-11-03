const stats = [
  ["5,000+", "Cases completed*"],
  ["300+", "Experts on our panel*"],
  ["150+", "Countries represented*"],
  ["100%", "Documentation-focused service"]
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap statsGrid">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
