import { useTranslation } from 'react-i18next';
import { BsInfoSquare } from 'react-icons/bs';
export default function BriefForm() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-8 border py-5 px-4 md:p-5 flex md:gap-5 justify-between rounded-md">
        <div className="flex items-center">
          <BsInfoSquare className="hidden  md:inline-block text-orange-400 w-8 h-8" />
        </div>
        <div>
          <p className="italic mb-5 text-black dark:text-white">{t('brief-page.text-information-1')}</p>
          <div>
            <p className=" underline mb-2 text-black dark:text-white">{t('brief-page.text-information-2')}</p>
            <p className="text-black dark:text-white">{t('brief-page.text-information-3')}</p>
          </div>
        </div>
      </div>
      <form>
        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-1')}</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            {t('brief-form.name')}
            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="text"
              name="first_name"
              required
              placeholder={t('brief-form.enter-name')}
            />
          </label>
          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            {t('brief-form.last-name')}

            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="text"
              name="last_name"
              placeholder={t('brief-form.enter-last-name')}
            ></input>
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            {t('brief-form.email')}
            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="email"
              id="email"
              name="email"
              required
              placeholder={t('brief-form.enter-email')}
            />
          </label>

          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            {t('brief-form.phone')}
            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="tel"
              id="phone_number"
              name="phone_number"
              required
              placeholder={t('brief-form.enter-phone')}
            />
          </label>
        </div>
        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-2')}</h3>
        <label className="w-full flex flex-col text-black dark:text-white">
          {t('brief-form.activity-sphere')}

          <input
            className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
            type="text"
            id="business_type"
            name="business_type"
            placeholder={t('brief-form.specify-activity-sphere')}
          />
        </label>
        <label className="w-full flex flex-col text-black dark:text-white">
          {t('brief-form.www-address')}

          <input
            className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
            type="url"
            id="website_url"
            name="website_url"
            placeholder={t('brief-form.specify-domain-name')}
          ></input>
        </label>
        <label className="w-full flex flex-col text-black dark:text-white">
          {t('brief-form.general-activity-info')}

          <textarea
            className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5"
            id="business_info"
            name="business_info"
            placeholder={t('brief-form.general-activity-info')}
          ></textarea>
        </label>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-3')}</h3>
        <h4 className=" text-[1rem] text-black dark:text-white mb-2">{t('brief-form.select-site-type')}</h4>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="visit_card"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.visit-card')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="corporate"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.corporate-site')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="e_shop" className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black" />
            {t('brief-form.internet-portal')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="portal" className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black" />
            {t('brief-form.internet-portal')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="ads_service"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.ads-service')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="blog" className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black" />
            {t('brief-form.blog')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="site_upgrade"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.site-upgrade')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="site_redesign"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.site-redesign')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="catalog" className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black" />
            {t('brief-form.online-catalog')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="mobile_app"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.mobile-app')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="custom_project"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.custom-project')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="website_type[]"
              value="site_accessibility"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.site-accessibility')}
          </label>
        </div>
        <h4 className=" text-[1rem] text-black dark:text-white mb-2">{t('brief-form.design')}</h4>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="design_project[]"
              value="design_present"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.has-design-project')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="design_project[]"
              value="no_design"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.no-design-project')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="design_project[]"
              value="templates"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.ready-templates')}
          </label>
        </div>

        <h4 className=" text-[1rem] text-black dark:text-white mb-2">{t('brief-form.liked-sites')}</h4>
        <label className="w-full flex flex-col text-black dark:text-white">
          <textarea
            id="liked_sites"
            name="liked_sites"
            placeholder={t('brief-form.example-sites-prompt')}
            className="w-full h-16 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5"
          ></textarea>
        </label>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-4')}</h3>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="marketing_type[]"
              value="email_marketing"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.email-marketing')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="marketing_type[]"
              value="smm_marketing"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.smm-marketing')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="marketing_type[]"
              value="monetization"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.site-monetization')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="marketing_type[]"
              value="online_advertising"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.online-advertising')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="seo" className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black" />
            {t('brief-form.site-promotion')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="marketing_type[]"
              value="ad_links"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.ad-links')}
          </label>
        </div>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-5')}</h3>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="extra_services[]"
              value="hosting"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.hosting')}
          </label>

          <label className="flex items-center gap-2 text-black dark:text-white ">
            <input
              type="checkbox"
              name="extra_services[]"
              value="domain_registration"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.domain-registration')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="extra_services[]"
              value="ssl_certificate"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.ssl-certificate')}
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input
              type="checkbox"
              name="extra_services[]"
              value="branded_email"
              className="form-checkbox focus:ring-0 focus:ring-offset-0 border bg-white border-orange-400  text-orange-400 dark:bg-black"
            />
            {t('brief-form.brand-emails')}
          </label>
        </div>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">{t('brief-form.step-6')}</h3>
        <label className="w-full flex flex-col text-black dark:text-white">
          <textarea
            className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark p-2 rounded-md focus:outline-none mt-2 mb-5"
            id="dop_info"
            name="dop_info"
            placeholder={t('brief-form.additional-project-wishes')}
          ></textarea>
        </label>
        <button className="btn-contact-form" type="submit">
          {t('brief-form.submit-brief')}
        </button>
      </form>
    </>
  );
}
