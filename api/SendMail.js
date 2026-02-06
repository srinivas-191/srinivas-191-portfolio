console.log(process.env.SENDGRID_API_KEY ? "KEY LOADED" : "NO KEY");
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const msg = {
      to: "srinivasrajoli2002@gmail.com",
      from: "srinivasrajoli2002@gmail.com",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await sgMail.send(msg);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    return res.status(500).json({ success: false });
  }
}
