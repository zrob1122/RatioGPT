export default function ResultCard({ result }) {
  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h2>Results:</h2>
      <p><strong>🔥 Ratio Risk:</strong> {result.ratioRisk}</p>
      <p><strong>🚩 Red Flags:</strong> {result.redFlags}</p>
      <p><strong>🧢 Sample Reply:</strong> {result.reply}</p>
      <p><strong>🧼 Suggested Fix:</strong> {result.fix}</p>
    </div>
  );
}
