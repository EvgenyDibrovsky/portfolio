// Импорты
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');

// Конфигурация
dotenv.config();
const staticFilesPath = path.join('/home/tnpexygoyu/domains/edweb.site/public_html');
const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
const secretKey = process.env.RECAPTCHA_SECRET_KEY;
const whitelist = ['https://edweb.site', 'http://edweb.site'];

// Инициализация приложения
const app = express();
app.use(express.json());
app.use(express.static(staticFilesPath));
app.use(
  cors({
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

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

    console.log('reCAPTCHA Response:', verifyResponse);

    if (!verifyResponse.success) {
      return res.status(403).send({ success: false, message: 'reCAPTCHA verification failed. Are you a robot?' });
    }
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return res.status(500).send({ success: false, message: 'Failed to verify reCAPTCHA' });
  }
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).send('Internal Server Error');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
