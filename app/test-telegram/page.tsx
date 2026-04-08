"use client";

import { useState } from "react";

export default function TestTelegramPage() {
  const [form, setForm] = useState({ email: "", telegramUserId: "", telegramChatId: "" });
  const [result, setResult] = useState<unknown>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/telegram/connect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "480px" }}>
      <h1 style={{ marginBottom: "1rem" }}>Connect Telegram</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Telegram User ID
          <input name="telegramUserId" type="text" value={form.telegramUserId} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Telegram Chat ID
          <input name="telegramChatId" type="text" value={form.telegramChatId} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <button type="submit" style={{ marginTop: "0.5rem" }}>Connect Telegram</button>
      </form>

      {result !== null && (
        <pre style={{ marginTop: "1.5rem", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
