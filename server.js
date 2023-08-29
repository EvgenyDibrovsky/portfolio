const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');
dotenv.config();
// Позволяет обрабатывать JSON-запросы
app.use(express.json());

// Настройка CORS
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: 's160.cyber-folks.pl',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'contact@edweb.site',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let mailOptions = {
    from: email, // Адрес отправителя
    to: 'contact@edweb.site',
    subject: subject,
    text: `Имя: ${name}\nEmail: ${email}\nТема сообщения: ${subject}\nСообщение: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    // console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
