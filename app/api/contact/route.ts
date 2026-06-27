import { NextResponse } from "next/server";
import { site } from "@/lib/site";

// Lead intake endpoint for the "Request a cleaning" form.
//
// Delivery: if a RESEND_API_KEY is configured (env), the lead is emailed to
// LEAD_RECIPIENT (defaults to the site email) via Resend's REST API — no SDK
// needed. Without a key, the lead is logged server-side and the request still
// succeeds, so the form is fully functional in development. Drop in the key +
// a verified sending domain to go live.

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  serviceType?: string;
  frequency?: string;
  timing?: string;
  message?: string;
  newsletter?: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let lead: Lead;
  try {
    lead = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Minimal required-field validation (matches the form's required inputs).
  if (!lead.name?.trim() || !lead.email?.trim() || !isValidEmail(lead.email)) {
    return NextResponse.json(
      { error: "A name and valid email are required." },
      { status: 422 }
    );
  }

  const recipient = process.env.LEAD_RECIPIENT ?? site.email;
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress =
    process.env.LEAD_FROM ?? "Pure Home Website <onboarding@resend.dev>";

  const rows: Array<[string, string | undefined]> = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Location", lead.location],
    ["Service type", lead.serviceType],
    ["Frequency", lead.frequency],
    ["Preferred timing", lead.timing],
    ["Message", lead.message],
    ["Newsletter opt-in", lead.newsletter ? "Yes" : "No"],
  ];

  const html = `
    <h2 style="font-family:Georgia,serif;color:#241F1C">New cleaning request</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#241F1C">
      ${rows
        .filter(([, v]) => v && String(v).trim())
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#6B5F58"><strong>${k}</strong></td><td style="padding:4px 0">${escapeHtml(
              String(v)
            )}</td></tr>`
        )
        .join("")}
    </table>
  `;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [recipient],
          reply_to: lead.email,
          subject: `New cleaning request — ${lead.name}`,
          html,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend delivery failed:", res.status, detail);
        return NextResponse.json(
          { error: "Could not send the request. Please try again." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Resend request error:", err);
      return NextResponse.json(
        { error: "Could not send the request. Please try again." },
        { status: 502 }
      );
    }
  } else {
    // No mail provider configured yet — log so nothing is lost in dev.
    console.info("[contact] New lead (no RESEND_API_KEY set):", lead);
  }

  return NextResponse.json({ ok: true });
}
