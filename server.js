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
const whitelist = ['https://edweb.site', 'http://edweb.site', 'https://www.edweb.site'];

// Инициализация приложения
const app = express();

app.use(express.json());
app.use(express.static(staticFilesPath));
app.options('*', cors());

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

    if (!response.data.success) {
      return res.status(403).send({ success: false, message: 'reCAPTCHA verification failed. Are you a robot?' });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send({ success: false, message: 'Failed to verify reCAPTCHA or send email.' });
  }
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

const PORT = process.env.NODE_ENV === 'production' ? 443 : 5000;
app.listen(PORT);
