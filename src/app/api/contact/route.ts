import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody;
    const { name, email, subject, message } = body;

    // --- Basic Input Validation ---
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required. Please fill in all fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address provided." }, { status: 400 });
    }

    // --- Nodemailer Transporter Setup ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_SENDER_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // --- Email Options ---
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_SENDER_EMAIL}>`,
      to: "sulananh@gmail.com",
      replyTo: email,
      subject: `[Portfolio Contact] - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This email was sent from your portfolio contact form.</em></p>
      `,
    };

    // --- Send Email ---
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to sulananh@gmail.com");
      return NextResponse.json({ message: "Thank you! Your message has been sent successfully." }, { status: 200 });
    } catch (emailError) {
      console.error("Error sending email with Nodemailer:", emailError);
      return NextResponse.json({ message: "Failed to send the email. Please try again later." }, { status: 500 });
    }

  } catch (error) {
    console.error("Error processing contact API request:", error);
    const errorMessage = "An unexpected error occurred on the server.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
