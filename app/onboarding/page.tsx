"use client";

import { useState } from "react";

const initialForm = {
  // user + trader profile
  email: "",
  tradingStyle: "DAY_TRADING",
  experienceYears: "",
  tradingDays: "",
  tradingSession: "",
  // risk rules
  accountSize: "",
  dailyLossLimit: "",
  riskPerTrade: "",
  maxTradesPerDay: "",
  stopAfterLosses: "",
  // mental profile
  mainWeaknesses: "",
  tiltTrigger: "",
  tiltThoughts: "",
  coachingTone: "DIRECT",
  interruptionStyle: "",
  responseStyle: "SHORT_WITH_EXPLANATION",
  // coaching preferences
  premarketCheckinEnabled: true,
  postmarketReviewEnabled: true,
  checkinFormat: "",
  reviewFocus: "",
  newsAlertsEnabled: true,
  preNewsMinutes: "10",
  highImpactOnly: true,
};

export default function OnboardingPage() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState<unknown>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
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

        <label>
          Main Weaknesses
          <input name="mainWeaknesses" type="text" value={form.mainWeaknesses} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Tilt Trigger
          <input name="tiltTrigger" type="text" value={form.tiltTrigger} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Tilt Thoughts
          <input name="tiltThoughts" type="text" value={form.tiltThoughts} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Coaching Tone
          <select name="coachingTone" value={form.coachingTone} onChange={handleChange} style={{ display: "block", width: "100%" }}>
            <option value="TOUGH">TOUGH</option>
            <option value="DIRECT">DIRECT</option>
            <option value="CALM_SHARP">CALM_SHARP</option>
          </select>
        </label>

        <label>
          Interruption Style
          <input name="interruptionStyle" type="text" value={form.interruptionStyle} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Response Style
          <select name="responseStyle" value={form.responseStyle} onChange={handleChange} style={{ display: "block", width: "100%" }}>
            <option value="VERY_SHORT">VERY_SHORT</option>
            <option value="SHORT_WITH_EXPLANATION">SHORT_WITH_EXPLANATION</option>
          </select>
        </label>

        <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input name="premarketCheckinEnabled" type="checkbox" checked={form.premarketCheckinEnabled} onChange={handleChange} />
          Pre-market Checkin Enabled
        </label>

        <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input name="postmarketReviewEnabled" type="checkbox" checked={form.postmarketReviewEnabled} onChange={handleChange} />
          Post-market Review Enabled
        </label>

        <label>
          Checkin Format
          <input name="checkinFormat" type="text" value={form.checkinFormat} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label>
          Review Focus
          <input name="reviewFocus" type="text" value={form.reviewFocus} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input name="newsAlertsEnabled" type="checkbox" checked={form.newsAlertsEnabled} onChange={handleChange} />
          News Alerts Enabled
        </label>

        <label>
          Pre-news Minutes
          <input name="preNewsMinutes" type="number" value={form.preNewsMinutes} onChange={handleChange} style={{ display: "block", width: "100%" }} />
        </label>

        <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input name="highImpactOnly" type="checkbox" checked={form.highImpactOnly} onChange={handleChange} />
          High Impact Only
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
