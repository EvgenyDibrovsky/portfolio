const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');

const axios = require('axios');

dotenv.config();
// Позволяет обрабатывать JSON-запросы
app.use(express.json());

// Настройка CORS
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message, recaptchaToken } = req.body;

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
    from: email,
    to: 'contact@edweb.site',
    subject: subject,
    text: `Имя: ${name}\nEmail: ${email}\nТема сообщения: ${subject}\nСообщение: ${message}`,
  };

  // Проверка reCAPTCHA
  const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await axios.post(
      verificationURL,
      {},
      {
        params: {
          secret: secretKey,
          response: recaptchaToken,
        },
      }
    );

    const verifyResponse = response.data;
    console.log('reCAPTCHA Response:', verifyResponse); // Добавляем этот log

    if (!verifyResponse.success) {
      return res.status(403).send({ success: false, message: 'reCAPTCHA verification failed. Are you a robot?' });
    }
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully'); // Добавляем этот log
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error); // И этот log
      res.status(500).send('Error sending email');
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error); // И этот log

    return res.status(500).send({ success: false, message: 'Failed to verify reCAPTCHA' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
