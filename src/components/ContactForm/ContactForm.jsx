import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AnimateElements from 'components/Utility/AnimateElements';
import axios from 'axios';
// import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const { t } = useTranslation();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contact-form.enter-name')),
    email: Yup.string().email().required(t('contact-form.enter-email')),
    subject: Yup.string().required(t('contact-form.enter-message-subject')),
    message: Yup.string().required(t('contact-form.enter-message')),
  });
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  // const RECAPTCHA_KEY = process.env.RECAPTCHA_KEYT;

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post(API_ENDPOINT, values)
      .then(response => {
        setStatusMessage(t('contact-form.sent-successfully'));
        setIsSuccess(true);
        resetForm(); // Этот метод очистит вашу форму
      })
      .catch(error => {
        console.error('Ошибка при отправке формы:', error); // Добавляем логирование ошибки

        setStatusMessage(t('contact-form.sent-no-successfully'));
        setIsSuccess(false);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <AnimateElements>
        <div className="w-full xl:w-10/12 mx-auto opacity-0 init-animate-1">
          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-full my-10 ">
                <div className="w-full flex-col lg:flex-row min-h-[18rem] flex gap-4 mb-10">
                  <div className="w-full lg:w-6/12 flex gap-5 flex-col justify-between">
                    <label className="flex flex-col gap-2 text-black dark:text-white">
                      {t('contact-form.name')}
                      <Field
                        name="name"
                        type="text"
                        placeholder={t('contact-form.enter-name')}
                        className={`appearance-none  w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md ${
                          errors.name && touched.name ? 'error' : ''
                        }`}
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-black dark:text-white">
                      {t('contact-form.email')}
                      <Field
                        name="email"
                        type="email"
                        placeholder={t('contact-form.enter-email')}
                        className={`w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md ${errors.email && touched.email ? 'error' : ''}`}
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-black dark:text-white">
                      {t('contact-form.message-subject')}
                      <Field
                        name="subject"
                        type="text"
                        placeholder={t('contact-form.enter-message-subject')}
                        className={`w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md ${errors.subject && touched.subject ? 'error' : ''}`}
                      />
                    </label>
                  </div>

                  <div className="w-full lg:w-6/12">
                    <label className="flex flex-col gap-2 h-[20rem] lg:h-full text-black dark:text-white">
                      {t('contact-form.message')}
                      <Field
                        as="textarea"
                        name="message"
                        placeholder={t('contact-form.enter-message')}
                        className={`w-full h-full bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md resize-none ${
                          errors.message && touched.message ? 'error' : ''
                        }`}
                      />
                    </label>
                  </div>
                </div>
                {statusMessage && (
                  <div className={`flex justify-center items-center text-white text-center status-message h-16 sm:h-12 mb-10 rounded-sm ${isSuccess ? 'bg-green-600' : 'bg-red-600'}`}>
                    {statusMessage}
                  </div>
                )}
                {/* <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={value => setFieldValue('recaptcha', value)} /> */}

                <button type="submit" className="btn-contact-form inline-block mr-auto  ">
                  {t('contact-form.send')}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </AnimateElements>
    </>
  );
}
