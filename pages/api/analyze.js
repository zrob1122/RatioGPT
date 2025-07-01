export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { post } = req.body;

  const prompt = `
You are RatioGPT, a savage social media assistant. Given a post, reply with:

1. Ratio Risk (High / Medium / Low)
2. Red Flags (brief bullet list)
3. Sample Reply (roast-style)
4. Suggested Fix (optional rewrite that might help it go viral)

Post: "${post}"
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    }),
  });

  const data = await response.json();

  const text = data.choices?.[0]?.message?.content;

  console.log("🧠 RAW GPT OUTPUT:\n", text);

  // Improved pattern that works with both numbered bullets and labeled lines
  const match = text.match(
    /Ratio Risk:\s*(.*)\n(?:2\.|Red Flags:)\s*(.*)\n(?:3\.|Sample Reply:)\s*(.*)\n(?:4\.|Suggested Fix:)\s*(.*)/s
  );

  if (!match) {
    return res.status(500).json({ error: "Bad GPT response", raw: text });
  }

  const [, ratioRisk, redFlags, reply, fix] = match;

  res.status(200).json({
    ratioRisk: ratioRisk.trim(),
    redFlags: redFlags.trim(),
    reply: reply.trim(),
    fix: fix.trim(),
  });
}
