// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

const app = express();

dotenv.config();
app.use(express.json());

const whitelist = ['https://edweb.site', 'http://edweb.site'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Настройка CORS
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome to edweb.site!');
});

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

    // console.log('reCAPTCHA Response:', verifyResponse);

    if (!verifyResponse.success) {
      return res.status(403).send({ success: false, message: 'reCAPTCHA verification failed. Are you a robot?' });
    }
    try {
      await transporter.sendMail(mailOptions);
      // console.log('Email sent successfully');
      res.status(200).send('Email sent successfully');
    } catch (error) {
      // console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  } catch (error) {
    // console.error('reCAPTCHA verification error:', error);
    return res.status(500).send({ success: false, message: 'Failed to verify reCAPTCHA' });
  }
});

// Обработчик ошибок должен идти последним
app.use((err, req, res, next) => {
  // console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
