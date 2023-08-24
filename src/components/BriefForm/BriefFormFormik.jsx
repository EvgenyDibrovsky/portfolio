import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BsInfoSquare } from 'react-icons/bs';

export default function BriefForm() {
  const { t } = useTranslation();

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    business_type: '',
    website_url: '',
    business_info: '',
    website_type: [],
    design_project: [],
    liked_sites: '',
    marketing_type: [],
    extra_services: [],
    dop_info: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t('brief-form.enter-name')),
    email: Yup.string().email(t('brief-form.enter-valid-email')).required(t('brief-form.enter-email')),
    phone_number: Yup.string().required(t('brief-form.enter-phone')),
    // ... Добавьте дополнительные правила валидации по мере необходимости
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Данные формы', values);
    // Здесь вы можете обработать отправку формы к API или выполнить другую логику.
    setSubmitting(false);
  };

  return (
    <>
      <div className="mb-8  py-5 md:p-5 flex md:gap-5 justify-between ">
        <div className="flex items-start">
          <BsInfoSquare className="hidden  md:inline-block text-orange-400 w-8 h-8" />
        </div>
        <div className="border-l-2 border-orange-400 pl-2">
          <p className="italic mb-5 text-black dark:text-white">{t('brief-page.text-information-1')}</p>
          <div>
            <p className=" underline mb-2 text-black dark:text-white">{t('brief-page.text-information-2')}</p>
            <p className="text-black dark:text-white">{t('brief-page.text-information-3')}</p>
          </div>
        </div>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-1')}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                {t('brief-form.name')}
                <Field
                  name="first_name"
                  type="text"
                  className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.enter-name')}
                />
                <ErrorMessage name="first_name" component="div" />
              </label>
              <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                {t('brief-form.last-name')}
                <Field
                  name="last_name"
                  type="text"
                  className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.enter-last-name')}
                />
                <ErrorMessage name="last_name" component="div" />
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                {t('brief-form.email')}
                <Field
                  name="email"
                  type="email"
                  className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.enter-email')}
                />
                <ErrorMessage name="email" component="div" />
              </label>
              <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                {t('brief-form.phone')}
                <Field
                  name="phone_number"
                  type="tel"
                  className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.enter-phone')}
                />
                <ErrorMessage name="phone_number" component="div" />
              </label>
            </div>
            {/* ... По аналогии добавьте остальные поля */}
            {/* Продолжайте добавлять поля по аналогии */}
            <button className="btn-contact-form" type="submit" disabled={isSubmitting}>
              {t('brief-form.submit-brief')}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
