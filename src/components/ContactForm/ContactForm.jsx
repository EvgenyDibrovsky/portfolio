import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contact-form.enter-name')),
    email: Yup.string().email().required(t('contact-form.enter-email')),
    subject: Yup.string().required(t('contact-form.enter-message-subject')),
    message: Yup.string().required(t('contact-form.enter-message')),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // axios
    //   .post('http://localhost:5000/send-email', values)
    //   .then(response => {
    //     console.log('Email sent successfully:', response.data);
    //     // Возможно, покажите уведомление об успешной отправке
    //   })
    //   .catch(error => {
    //     console.error('Error sending email:', error);
    //     // Возможно, покажите уведомление об ошибке
    //   })
    //   .finally(() => {
    //     setSubmitting(false);
    //   });

    // setSubmitting(false);
    setSubmitting(false);
  };

  return (
    <>
      <div className="w-full xl:w-10/12 mx-auto">
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
                      className={`w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none ${
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
                      className={`w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none ${
                        errors.email && touched.email ? 'error' : ''
                      }`}
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-black dark:text-white">
                    {t('contact-form.message-subject')}
                    <Field
                      name="subject"
                      type="text"
                      placeholder={t('contact-form.enter-message-subject')}
                      className={`w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none ${
                        errors.subject && touched.subject ? 'error' : ''
                      }`}
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

              <button type="submit" className="btn-contact-form inline-block mr-auto  ">
                {t('contact-form.send')}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ContactForm;
