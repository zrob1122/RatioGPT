import { useState } from "react";
import InputBox from "../components/InputBox";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [postText, setPostText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzePost = async () => {
    setLoading(true);
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: postText }),
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>RatioGPT</h1>
      <InputBox value={postText} onChange={setPostText} onAnalyze={analyzePost} />
      {loading && <p>Analyzing...</p>}
      {result && <ResultCard result={result} />}
    </main>
  );
}
