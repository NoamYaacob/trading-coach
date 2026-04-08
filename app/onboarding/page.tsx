"use client";

import { useState } from "react";

const initialForm = {
  email: "",
  tradingStyle: "DAY_TRADING",
  experienceYears: "",
  tradingDays: "",
  tradingSession: "",
  accountSize: "",
  dailyLossLimit: "",
  riskPerTrade: "",
  maxTradesPerDay: "",
  stopAfterLosses: "",
};

export default function OnboardingPage() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState<unknown>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "480px" }}>
      <h1 style={{ marginBottom: "1rem" }}>Onboarding</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Trading Style
          <select name="tradingStyle" value={form.tradingStyle} onChange={handleChange} style={{ display: "block", width: "100%" }}>
            <option value="SCALP">SCALP</option>
            <option value="DAY_TRADING">DAY_TRADING</option>
            <option value="SWING">SWING</option>
          </select>
        </label>

        <label>
          Experience Years
          <input name="experienceYears" type="number" value={form.experienceYears} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Trading Days (e.g. Mon,Tue,Wed)
          <input name="tradingDays" type="text" value={form.tradingDays} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Trading Session (e.g. 09:30-16:00)
          <input name="tradingSession" type="text" value={form.tradingSession} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Account Size ($)
          <input name="accountSize" type="number" value={form.accountSize} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Daily Loss Limit ($)
          <input name="dailyLossLimit" type="number" value={form.dailyLossLimit} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Risk Per Trade ($)
          <input name="riskPerTrade" type="number" value={form.riskPerTrade} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Max Trades Per Day
          <input name="maxTradesPerDay" type="number" value={form.maxTradesPerDay} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Stop After Losses
          <input name="stopAfterLosses" type="number" value={form.stopAfterLosses} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <button type="submit" style={{ marginTop: "0.5rem" }}>Save onboarding</button>
      </form>

      {result !== null && (
        <pre style={{ marginTop: "1.5rem", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
