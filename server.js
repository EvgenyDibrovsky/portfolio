const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Позволяет обрабатывать JSON-запросы
app.use(express.json());

// Настройка CORS
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Настройка транспорта для nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'email',
      pass: 'Пароль',
    },
  });

  let mailOptions = {
    from: email, // Адрес отправителя
    to: 'ed190687@gmail.com',
    subject: subject,
    text: `${name} (${email}) says: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
