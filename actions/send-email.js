"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("❌ Missing RESEND_API_KEY. Did you set it in .env.local?");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "FinWise AI - Finance APP <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
