import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AnimateElements from 'components/Utility/AnimateElements';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { IoIosArrowForward } from 'react-icons/io';

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
    confirmation_of_conditions: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t('brief-form.enter-name')),
    email: Yup.string().email().required(t('brief-form.enter-email')),
    phone_number: Yup.string().required(t('brief-form.enter-phone')),
    confirmation_of_conditions: Yup.boolean().required(t('contact-form.confirmation-required')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!values.confirmation_of_conditions) {
      setStatusMessage(t('brief-form.confirmation-required'));
      setIsSuccess(false);
      setSubmitting(false);
      return;
    }

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
        <div className="mb-8 opacity-0 init-animate-1">
          <div className="border-l-2 border-orange-400 pl-2">
            <p className="italic mb-5 text-black dark:text-white">{t('brief-page.text-information-1')}</p>
            <div>
              <p className=" underline mb-2 text-black dark:text-white">{t('brief-page.text-information-2')}</p>
              <p className="text-black dark:text-white">{t('brief-page.text-information-3')}</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-10/12 mx-auto bg-bgForms/80 dark:bg-neutral-900/80 p-10 opacity-0 init-animate-1">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-8">{t('brief-form.step-1')}</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                    {t('brief-form.name')}
                    <Field
                      name="first_name"
                      type="text"
                      placeholder={t('brief-form.enter-name')}
                      className={`h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5 ${
                        errors.first_name && touched.first_name ? 'error' : ''
                      }`}
                    />
                  </label>

                  <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
                    {t('brief-form.last-name')}
                    <Field
                      name="last_name"
                      type="text"
                      className="h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5"
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
                      className={`h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5 ${
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
                      className={`h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5"
                  ${errors.phone_number && touched.phone_number ? 'error' : ''}`}
                    />
                  </label>
                </div>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white my-8">{t('brief-form.step-2')}</h3>
                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.activity-sphere')}
                  <Field
                    name="business_type"
                    type="text"
                    className="w-full h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5"
                    placeholder={t('brief-form.specify-activity-sphere')}
                  />
                </label>

                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.www-address')}
                  <Field
                    name="website_url"
                    type="text"
                    className="w-full h-14 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-4 rounded-md focus:outline-none mt-2 mb-5"
                    placeholder={t('brief-form.specify-domain-name')}
                  />
                </label>

                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.general-activity-info')}
                  <Field
                    name="business_info"
                    as="textarea"
                    className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-4 rounded-md focus:outline-none mt-2 mb-5 resize-none "
                    placeholder={t('brief-form.general-activity-info')}
                  />
                </label>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white my-8">{t('brief-form.step-3')}</h3>
                <h4 className="text-[1rem] text-black dark:text-white mb-6">{t('brief-form.select-site-type')}</h4>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-10 gap-6">
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.visit-card')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.visit-card')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.corporate-site')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.corporate-site')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.e-shop')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.e-shop')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.internet-portal')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.internet-portal')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.ads-service')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.ads-service')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.blog')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.blog')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.site-upgrade')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.site-upgrade')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.site-redesign')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.site-redesign')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.online-catalog')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.online-catalog')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.mobile-app')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.mobile-app')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.custom-project')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.custom-project')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="website_type" value={t('brief-form.site-accessibility')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.site-accessibility')}
                  </label>
                </div>
                <h4 className=" text-[1rem] text-black dark:text-white mb-6">{t('brief-form.design')}</h4>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-6">
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="design_project" value={t('brief-form.has-design-project')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.has-design-project')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="design_project" value={t('brief-form.no-design-project')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.no-design-project')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="design_project" value={t('brief-form.ready-templates')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.ready-templates')}
                  </label>
                </div>
                <label className="w-full flex flex-col text-black dark:text-white">
                  {t('brief-form.liked-sites')}
                  <Field
                    name="liked_sites"
                    as="textarea"
                    className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-4 rounded-md focus:outline-none mt-2 mb-5 resize-none "
                    placeholder={t('brief-form.example-sites-prompt')}
                  />
                </label>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white my-8">{t('brief-form.step-4')}</h3>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-6">
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="marketing_type" value={t('brief-form.email-marketing')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.email-marketing')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="marketing_type" value={t('brief-form.smm-marketing')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.smm-marketing')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="marketing_type" value={t('brief-form.site-monetization')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.site-monetization')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="marketing_type" value={t('brief-form.online-advertising')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.online-advertising')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="marketing_type" value={t('brief-form.site-promotion')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.site-promotion')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="marketing_type" value={t('brief-form.ad-links')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.ad-links')}
                  </label>
                </div>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white  my-8">{t('brief-form.step-5')}</h3>
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-6">
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="extra_services" value={t('brief-form.hosting')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.hosting')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="extra_services" value={t('brief-form.domain-registration')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.domain-registration')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="extra_services" value={t('brief-form.ssl-certificate')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.ssl-certificate')}
                  </label>
                  <label className="flex items-center gap-2 text-black dark:text-white cursor-pointer">
                    <Field type="checkbox" name="extra_services" value={t('brief-form.brand-emails')} className="form-checkbox cursor-pointer" />
                    {t('brief-form.brand-emails')}
                  </label>
                </div>
                <h3 className="text-[1.25rem] font-medium text-black dark:text-white my-8">{t('brief-form.step-6')}</h3>
                <label className="w-full flex flex-col text-black dark:text-white">
                  <Field
                    name="dop_info"
                    as="textarea"
                    className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-4 rounded-md focus:outline-none mt-2 mb-5 resize-none "
                    placeholder={t('brief-form.additional-project-wishes')}
                  />
                </label>

                <div className="block mb-4">
                  <label className="lg:inline-flex lg:items-center lg:gap-1 text-black dark:text-white cursor-pointer">
                    <Field
                      type="checkbox"
                      name="confirmation_of_conditions"
                      className={`form-checkbox mr-2 cursor-pointer ${errors.confirmation_of_conditions && touched.confirmation_of_conditions ? 'error' : ''}`}
                    />
                    {t('brief-form.accept-form')}
                    <a
                      href="/regulations-edweb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold underline duration-200 hover:text-sky-600 ml-1 lg:ml-0"
                      aria-label={t('regulations-edweb.title')}
                    >
                      {t('regulations-edweb.title')}
                    </a>
                  </label>
                </div>
                <div className="mb-10">
                  <p className="text-xs text-black dark:text-white">
                    {t('recaptcha.text-1')}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline duration-200 hover:text-sky-600"
                      aria-label={t('recaptcha.privacy-policy')}
                    >
                      {t('recaptcha.privacy-policy')}
                    </a>
                    {t('recaptcha.text-2')}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline duration-200 hover:text-sky-600"
                      aria-label={t('recaptcha.terms-of-service')}
                    >
                      {t('recaptcha.terms-of-service')}
                    </a>
                    {t('recaptcha.text-3')}
                  </p>
                </div>

                {statusMessage && (
                  <div
                    className={`flex justify-center items-center text-white text-center font-semibold status-message h-16 sm:h-14 mb-10 rounded-sm ${
                      isSuccess ? 'bg-gradient-to-r from-green-600 via-green-400 to-green-600' : 'bg-gradient-to-r from-red-600 via-red-400 to-red-600'
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                <button className="btn-contact-form group" type="submit" disabled={isSubmitting} title={t('brief-form.submit-brief')}>
                  {t('brief-form.submit-brief')}
                  <IoIosArrowForward className="duration-200 group-hover:translate-x-2" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </AnimateElements>
    </>
  );
}
