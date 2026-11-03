import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

type InquiryMail = {
  name: string;
  email: string;
  category?: string | null;
  service?: string | null;
  message: string;
};

export async function sendInquiryEmail(data: InquiryMail) {
  const { name, email, category, service, message } = data;

  await transporter.sendMail({
    from: `"Immigra Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // aapko mail aayegi
    replyTo: email, // Reply karne par seedha client ko jayega
    subject: `New Case Inquiry from ${name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Category:</b> ${escapeHtml(category ?? "Not selected")}</p>
      <p><b>Service:</b> ${escapeHtml(service ?? "Not selected")}</p>
      <p><b>Message:</b></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });
}