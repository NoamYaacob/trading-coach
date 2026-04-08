"use client";

import { useState } from "react";

export default function TestUserPage() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<unknown>(null);

  async function handleSubmit() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={handleSubmit}>Create test user</button>
      {result !== null && (
        <pre style={{ marginTop: "1rem" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
