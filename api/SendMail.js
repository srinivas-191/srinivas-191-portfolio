import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const msg = {
    to: "srinivasrajoli2002@gmail.com",
    from: "portfolio@srinivas.dev", // must be verified in SendGrid
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SENDGRID ERROR:", error.response?.body || error);
    return res.status(500).json({ success: false });
  }
}
