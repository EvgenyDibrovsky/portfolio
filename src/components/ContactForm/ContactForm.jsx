import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
function ContactForm() {
  const { t } = useTranslation();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-[40rem] mx-auto my-10"
    >
      <label className="text-black dark:text-white">
        {t('contact-form.name')}

        <input
          type="text"
          name="name"
          placeholder={t('contact-form.enter-name')}
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>

      <label className="text-black dark:text-white">
        {t('contact-form.email')}
        <input
          type="email"
          name="email"
          placeholder={t('contact-form.enter-email')}
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>

      <label className="text-black dark:text-white">
        {t('contact-form.message-subject')}
        <input
          type="text"
          name="subject"
          placeholder={t('contact-form.enter-message-subject')}
          value={formState.subject}
          onChange={handleChange}
          required
          className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>

      <label className="text-black dark:text-white">
        {t('contact-form.message')}

        <textarea
          name="message"
          value={formState.message}
          placeholder={t('contact-form.enter-message')}
          onChange={handleChange}
          required
          className="w-full h-32  bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>

      <button type="submit" className="btn-contact-form">
        {t('contact-form.send')}
      </button>
    </form>
  );
}

export default ContactForm;
