const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint to receive form data
app.post('/api/volunteer', async (req, res) => {
  const { fullName, email, phone, interest, message } = req.body;

  // Setup transporter (use your actual email service)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namrata.shirsaat@gmail.com',
      pass: 'lusy nzyg beed wixv' // NOT your normal password, use App Password!
    }
  });

  // Email content
  let mailOptions = {
    from: email,
    to: 'yourgmail@gmail.com', // Your email to receive volunteer details
    subject: 'New Volunteer Submission',
    html: `
      <h2>New Volunteer Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Area of Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Volunteer form submitted successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
