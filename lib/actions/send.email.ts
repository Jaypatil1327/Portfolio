"use server";

import { config } from "dotenv";
import nodemailer from "nodemailer";

type Prop = {
  name: string;
  email: string;
  description: string;
  subject: string;
};
config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMail(data: Prop) {
  try {
    await NewContact(data);
    await reply(data);
  } catch (error) {
    console.log(error);
  }
}

async function NewContact(data: Prop) {
  try {
    await transporter.sendMail({
      to: process.env.SMTP_EMAIL,
      from: data.email,
      subject: "Someone contact my portfolio website",
      html: `
  <div style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background-color: #ffffff;
  ">
    <h1 style="
      color: #2563eb;
      margin-bottom: 20px;
    ">
      New Portfolio Contact
    </h1>

    <p style="margin-bottom: 12px;">
      Someone contacted you through your portfolio website.
    </p>

    <div style="
      background-color: #f8fafc;
      padding: 16px;
      border-radius: 10px;
      margin-top: 20px;
    ">
      <p>
        <strong>Name:</strong> ${data.name}
      </p>

      <p>
        <strong>Email:</strong> ${data.email}
      </p>

      <p>
        <strong>Subject:</strong> ${data.subject}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p style="
        line-height: 1.6;
        color: #334155;
      ">
        ${data.description}
      </p>
    </div>
  </div>

`,
    });
  } catch (error) {
    console.log(error);
  }
}

async function reply(data: Prop) {
  try {
    await transporter.sendMail({
      to: data.email,
      from: process.env.SMTP_EMAIL,
      subject: "Thank you for contacting uss!",
      html: "Thank you for reaching out! Your message has been received successfully. I appreciate your time and will get back to you as soon as possible.",
    });
  } catch (error) {
    console.log(error);
  }
}
