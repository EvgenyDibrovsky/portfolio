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
        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">Шаг 1: Контактные данные</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            Имя:
            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="text"
              name="first_name"
              required
              placeholder="Введите ваше имя"
            />
          </label>

          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            Фамилия:
            <input className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5" type="text" name="last_name"></input>
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            Email:
            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Введите корректный адрес электронной почты"
            />
          </label>

          <label className="w-full lg:w-6/12 flex flex-col text-black dark:text-white">
            Номер телефона:
            <input
              className="h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
              type="tel"
              id="phone_number"
              name="phone_number"
              required
            />
          </label>
        </div>
        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">Шаг 2: Информация о вашей деятельности</h3>
        <label className="w-full flex flex-col text-black dark:text-white">
          Сфера деятельности:
          <input
            className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
            type="text"
            id="business_type"
            name="business_type"
          />
        </label>
        <label className="w-full flex flex-col text-black dark:text-white">
          Адрес www (если есть)
          <input
            className="w-full h-12 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
            type="url"
            id="website_url"
            name="website_url"
          ></input>
        </label>
        <label className="w-full flex flex-col text-black dark:text-white">
          Общая информация о деятельности:
          <textarea
            className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
            id="business_info"
            name="business_info"
            placeholder="Введите информацию о деятельности..."
          ></textarea>
        </label>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">Шаг 3: Веб-сайты (Разработка, создание, модернизация)</h3>
        <h4 className=" text-[1rem] text-black dark:text-white mb-2">Выберите тип сайта</h4>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="visit_card" />
            Сайт-визитка
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="corporate" />
            Корпоративный сайт
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="e_shop" />
            Интернет-магазин
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="portal" />
            Интернет-портал
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="ads_service" />
            Сервис объявлений
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="blog" />
            Блог
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="site_upgrade" />
            Модернизация сайта
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="site_redesign" />
            Редизайн сайта
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="catalog" />
            Интернет-каталог
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="mobile_app" />
            Мобильное приложение
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="custom_project" />
            Индивидуальный проект
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="website_type[]" value="site_accessibility" />
            Доступность сайта
          </label>
        </div>
        <h4 className=" text-[1rem] text-black dark:text-white mb-2">Внешний вид</h4>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="design_project[]" value="design_present" />
            Есть проект дизайна
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="design_project[]" value="no_design" />
            Нет проекта дизайна
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="design_project[]" value="templates" />
            Готовые шаблоны
          </label>
        </div>

        <h4 className=" text-[1rem] text-black dark:text-white mb-2">Сайты, которые вам нравятся</h4>
        <label className="w-full flex flex-col text-black dark:text-white" for="liked_sites">
          <textarea
            id="liked_sites"
            name="liked_sites"
            placeholder=" Укажите пару сайтов для примера, которые вам нравятся..."
            className="w-full h-16 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
          ></textarea>
        </label>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">Шаг 4: Интернет-маркетинг</h3>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="email_marketing" />
            E-mail маркетинг
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="smm_marketing" />
            SMM маркетинг
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="monetization" />
            Монетизация сайта
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="online_advertising" />
            Реклама в интернете
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="seo" />
            Продвижение сайта
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="marketing_type[]" value="ad_links" />
            Рекламные ссылки
          </label>
        </div>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">Шаг 5: Дополнительные услуги</h3>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 mb-5">
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="extra_services[]" value="hosting" />
            Хостинг
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="extra_services[]" value="domain_registration" />
            Регистрация домена
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="extra_services[]" value="ssl_certificate" />
            SSL сертификат
          </label>
          <label className="flex items-center gap-2 text-black dark:text-white">
            <input type="checkbox" name="extra_services[]" value="branded_email" />
            Фирменные email
          </label>
        </div>

        <h3 className="text-[1.25rem] font-medium text-black dark:text-white mb-5">Шаг 6: Дополнительные пожелания</h3>
        <label className="w-full flex flex-col text-black dark:text-white">
          <textarea
            className="w-full h-28 bg-white dark:bg-black border border-colorBorder dark:border-colorBorderDark px-2 rounded-md focus:outline-none mt-2 mb-5"
            id="business_info"
            name="business_info"
            placeholder="Напишите все дополнительные пожелания касательно проекта..."
          ></textarea>
        </label>
        <button className="bg-transparent text-black dark:text-white border border-orange-400 duration-200 hover:bg-orange-400 hover:text-white  px-5 py-2" type="submit">
          Отправить бриф
        </button>
      </form>
    </>
  );
}
