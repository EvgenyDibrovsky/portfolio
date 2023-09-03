import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AnimateElements from 'components/Utility/AnimateElements';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function BriefForm() {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

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
    email: Yup.string().email().required(t('brief-form.enter-email')),
    phone_number: Yup.string().required(t('brief-form.enter-phone')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (executeRecaptcha) {
      const token = await executeRecaptcha('brief_form');
      values.recaptchaToken = token;
    }

    axios
      .post('https://edweb.site/brief-form', values)
      .then(response => {
        setStatusMessage(t('brief-form.sent-successfully'));
        setIsSuccess(true);
        resetForm();
      })
      .catch(error => {
        setStatusMessage(t('brief-form.sent-no-successfully'));
        setIsSuccess(false);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <AnimateElements>
        <div className="mb-8 py-5 md:p-5 opacity-0 init-animate-1">
          <div className="border-l-2 border-orange-400 pl-2">
            <p className="italic mb-5 text-black dark:text-white">{t('brief-page.text-information-1')}</p>
            <div>
              <p className=" underline mb-2 text-black dark:text-white">{t('brief-page.text-information-2')}</p>
              <p className="text-black dark:text-white">{t('brief-page.text-information-3')}</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-10/12 mx-auto opacity-0 init-animate-1">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-1')}</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                    {t('brief-form.name')}
                    <Field
                      name="first_name"
                      type="text"
                      placeholder={t('brief-form.enter-name')}
                      className={`h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5 ${
                        errors.first_name && touched.first_name ? 'error' : ''
                      }`}
                    />
                  </label>

                  <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                    {t('brief-form.last-name')}
                    <Field
                      name="last_name"
                      type="text"
                      className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                      placeholder={t('brief-form.enter-last-name')}
                    />
                  </label>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                    {t('brief-form.email')}
                    <Field
                      name="email"
                      type="email"
                      placeholder={t('brief-form.enter-email')}
                      className={`h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5 ${
                        errors.email && touched.email ? 'error' : ''
                      }`}
                    />
                  </label>
                  <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                    {t('brief-form.phone')}
                    <Field
                      name="phone_number"
                      type="tel"
                      placeholder={t('brief-form.enter-phone')}
                      className={`h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                  ${errors.phone_number && touched.phone_number ? 'error' : ''}`}
                    />
                  </label>
                </div>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-2')}</h3>
                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.activity-sphere')}
                  <Field
                    name="business_type"
                    type="text"
                    className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                    placeholder={t('brief-form.specify-activity-sphere')}
                  />
                </label>

                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.www-address')}
                  <Field
                    name="website_url"
                    type="text"
                    className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                    placeholder={t('brief-form.specify-domain-name')}
                  />
                </label>

                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.general-activity-info')}
                  <Field
                    name="business_info"
                    as="textarea"
                    className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5 resize-none "
                    placeholder={t('brief-form.general-activity-info')}
                  />
                </label>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-3')}</h3>
                <h4 className="text-[1rem] text-black dark:text-white mb-2">{t('brief-form.select-site-type')}</h4>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.visit-card')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.visit-card')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.corporate-site')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.corporate-site')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.e-shop')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.e-shop')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.internet-portal')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.internet-portal')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.ads-service')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.ads-service')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.blog')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.blog')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.site-upgrade')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.site-upgrade')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.site-redesign')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.site-redesign')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.online-catalog')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.online-catalog')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.mobile-app')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.mobile-app')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.custom-project')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.custom-project')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="website_type"
                      value={t('brief-form.site-accessibility')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.site-accessibility')}
                  </label>
                </div>
                <h4 className=" text-[1rem] text-black dark:text-white mb-2">{t('brief-form.design')}</h4>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="design_project"
                      value={t('brief-form.has-design-project')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.has-design-project')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="design_project"
                      value={t('brief-form.no-design-project')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.no-design-project')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="design_project"
                      value={t('brief-form.ready-templates')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.ready-templates')}
                  </label>
                </div>
                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.liked-sites')}
                  <Field
                    name="liked_sites"
                    as="textarea"
                    className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5 resize-none "
                    placeholder={t('brief-form.example-sites-prompt')}
                  />
                </label>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-4')}</h3>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="marketing_type"
                      value={t('brief-form.email-marketing')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.email-marketing')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="marketing_type"
                      value={t('brief-form.smm-marketing')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.smm-marketing')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="marketing_type"
                      value={t('brief-form.site-monetization')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.site-monetization')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="marketing_type"
                      value={t('brief-form.online-advertising')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.online-advertising')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="marketing_type"
                      value={t('brief-form.site-promotion')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.site-promotion')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="marketing_type"
                      value={t('brief-form.ad-links')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.ad-links')}
                  </label>
                </div>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-5')}</h3>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="extra_services"
                      value={t('brief-form.hosting')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.hosting')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="extra_services"
                      value={t('brief-form.domain-registration')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.domain-registration')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="extra_services"
                      value={t('brief-form.ssl-certificate')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.ssl-certificate')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white">
                    <Field
                      type="checkbox"
                      name="extra_services"
                      value={t('brief-form.brand-emails')}
                      className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                    />
                    {t('brief-form.brand-emails')}
                  </label>
                </div>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-6')}</h3>
                <label className="w-full flex flex-col text-black dark:text-white">
                  <Field
                    name="dop_info"
                    as="textarea"
                    className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5 resize-none "
                    placeholder={t('brief-form.additional-project-wishes')}
                  />
                </label>

                {statusMessage && (
                  <div className={`flex justify-center items-center text-white text-center status-message h-16 sm:h-12 mb-10 rounded-sm ${isSuccess ? 'bg-green-600' : 'bg-red-600'}`}>
                    {statusMessage}
                  </div>
                )}

                <button className="btn-contact-form" type="submit" disabled={isSubmitting}>
                  {t('brief-form.submit-brief')}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </AnimateElements>
    </>
  );
}
