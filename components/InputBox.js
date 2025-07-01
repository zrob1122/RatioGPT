export default function InputBox({ value, onChange, onAnalyze }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Paste your hot take here..."
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      />
      <button onClick={onAnalyze} style={{ marginTop: "0.5rem", padding: "0.5rem 1rem" }}>
        Analyze
      </button>
    </div>
  );
}
