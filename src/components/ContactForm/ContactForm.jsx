import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AnimateElements from 'components/Utility/AnimateElements';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactForm() {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contact-form.enter-name')),
    email: Yup.string().email().required(t('contact-form.enter-email')),
    subject: Yup.string().required(t('contact-form.enter-message-subject')),
    message: Yup.string().required(t('contact-form.enter-message')),
    confirmation_of_conditions: Yup.boolean().required(t('contact-form.confirmation-required')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!values.confirmation_of_conditions) {
      setStatusMessage(t('contact-form.confirmation-required'));
      setIsSuccess(false);
      setSubmitting(false);
      return;
    }

    if (executeRecaptcha) {
      const token = await executeRecaptcha('contact_form');
      values.recaptchaToken = token;
    }

    axios
      .post('https://edweb.site/contact-form', values) // Замените на актуальный URL сервера
      .then(response => {
        setStatusMessage(t('contact-form.sent-successfully'));
        setIsSuccess(true);
        resetForm();
      })
      .catch(error => {
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
              confirmation_of_conditions: '',
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

                <div className="block mb-4">
                  <label className="lg:inline-flex lg:items-center lg:gap-1 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="confirmation_of_conditions"
                      className={`form-checkbox mr-2 ${errors.confirmation_of_conditions && touched.confirmation_of_conditions ? 'error' : ''}`}
                    />
                    {t('contact-form.accept-form')}
                    <a href="/regulations-edweb" target="_blank" rel="noopener noreferrer" className="inline-block font-semibold underline duration-200 hover:text-sky-600 ml-1 lg:ml-0">
                      {t('regulations-edweb.title')}
                    </a>
                  </label>
                </div>
                <div className="mb-10">
                  <p className="text-xs text-black dark:text-white">
                    {t('recaptcha.text-1')}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-bold underline duration-200  hover:text-sky-600">
                      {t('recaptcha.privacy-policy')}
                    </a>
                    {t('recaptcha.text-2')}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="font-bold underline duration-200  hover:text-sky-600">
                      {t('recaptcha.terms-of-service')}
                    </a>
                    {t('recaptcha.text-3')}
                  </p>
                </div>
                {statusMessage && (
                  <div className={`flex justify-center items-center text-white text-center status-message h-16 sm:h-12 mb-10 rounded-sm ${isSuccess ? 'bg-green-600' : 'bg-red-600'}`}>
                    {statusMessage}
                  </div>
                )}
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
