import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    email: Yup.string().email().required(t('brief-form.enter-email')),
    phone_number: Yup.string().required(t('brief-form.enter-phone')),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Данные формы', values);
    // Здесь вы можете обработать отправку формы к API или выполнить другую логику.
    setSubmitting(false);
  };

  return (
    <>
      <div className="mb-8 py-5 md:p-5 ">
        <div className="border-l-2 border-orange-400 pl-2">
          <p className="italic mb-5 text-black dark:text-white">{t('brief-page.text-information-1')}</p>
          <div>
            <p className=" underline mb-2 text-black dark:text-white">{t('brief-page.text-information-2')}</p>
            <p className="text-black dark:text-white">{t('brief-page.text-information-3')}</p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-10/12 mx-auto">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                <ErrorMessage name="business_type" component="div" />
              </label>

              <label className="w-full flex flex-col text-black dark:text-white">
                {t('brief-form.www-address')}
                <Field
                  name="website_url"
                  type="url"
                  className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.specify-domain-name')}
                />
                <ErrorMessage name="website_url" component="div" />
              </label>

              <label className="w-full flex flex-col text-black dark:text-white">
                {t('brief-form.general-activity-info')}
                <Field
                  name="business_info"
                  as="textarea"
                  className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.general-activity-info')}
                />
                <ErrorMessage name="business_info" component="div" />
              </label>
              <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-3')}</h3>
              <h4 className="text-[1rem] text-black dark:text-white mb-2">{t('brief-form.select-site-type')}</h4>
              <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="visit_card"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.visit-card')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="corporate"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.corporate-site')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="e_shop"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.e-shop')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="portal"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.internet-portal')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="ads_service"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.ads-service')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field type="checkbox" name="website_type" value="blog" className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black" />
                  {t('brief-form.blog')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="site_upgrade"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.site-upgrade')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="site_redesign"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.site-redesign')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="catalog"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.online-catalog')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="mobile_app"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.mobile-app')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="custom_project"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.custom-project')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="website_type"
                    value="site_accessibility"
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
                    value="design_present"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.has-design-project')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="design_project"
                    value="no_design"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.no-design-project')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="design_project"
                    value="templates"
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
                  className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.example-sites-prompt')}
                />
                <ErrorMessage name="liked_sites" component="div" />
              </label>
              <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-4')}</h3>
              <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="marketing_type"
                    value="email_marketing"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.email-marketing')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="marketing_type"
                    value="smm_marketing"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.smm-marketing')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="marketing_type"
                    value="monetization"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.site-monetization')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="marketing_type"
                    value="online_advertising"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.online-advertising')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="marketing_type"
                    value="seo"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.site-promotion')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="marketing_type"
                    value="ad_links"
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
                    value="hosting"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.hosting')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="extra_services"
                    value="domain_registration"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.domain-registration')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="extra_services"
                    value="ssl_certificate"
                    className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
                  />
                  {t('brief-form.ssl-certificate')}
                </label>
                <label className="flex items-center gap-2 text-black dark:text-white">
                  <Field
                    type="checkbox"
                    name="extra_services"
                    value="branded_email"
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
                  className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5"
                  placeholder={t('brief-form.additional-project-wishes')}
                />
                <ErrorMessage name="dop_info" component="div" />
              </label>
              <button className="btn-contact-form" type="submit" disabled={isSubmitting}>
                {t('brief-form.submit-brief')}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
