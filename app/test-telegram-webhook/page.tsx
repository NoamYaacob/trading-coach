"use client";

import { useState } from "react";

const SAMPLE_PAYLOAD = JSON.stringify(
  {
    update_id: 123456789,
    message: {
      message_id: 1,
      from: { id: 111222333, first_name: "Test", username: "testuser" },
      chat: { id: 111222333, first_name: "Test", username: "testuser", type: "private" },
      date: 1700000000,
      text: "Hello coach!",
    },
  },
  null,
  2
);

export default function TestTelegramWebhookPage() {
  const [raw, setRaw] = useState(SAMPLE_PAYLOAD);
  const [result, setResult] = useState<unknown>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/telegram/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1 style={{ marginBottom: "1rem" }}>Test Telegram Webhook</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <label>
          Raw JSON payload
          <textarea
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            rows={16}
            style={{ display: "block", width: "100%", fontFamily: "monospace", fontSize: "0.85rem" }}
          />
        </label>
        <button type="submit">Send webhook test</button>
      </form>

      {result !== null && (
        <pre style={{ marginTop: "1.5rem", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
