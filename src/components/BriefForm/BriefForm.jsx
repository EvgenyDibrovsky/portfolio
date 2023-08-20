// import { useTranslation } from 'react-i18next';
import { BsInfoSquare } from 'react-icons/bs';
export default function BriefForm() {
  //   const { t } = useTranslation();

  return (
    <>
      <div className="mb-8 border p-5 flex gap-5 justify-between rounded-md">
        <div className="flex items-center">
          <BsInfoSquare className="text-orange-400 w-8 h-8 inline-block" />
        </div>
        <div>
          <p className="italic mb-5 text-black dark:text-white">
            Бриф – это краткое описание ваших идей, целей, предпочтений и ожиданий относительно проекта. Бриф поможет мне точнее уловить вашу визию и разработать наиболее подходящий и
            персонализированный план для вашего проекта, обеспечивая приближение желаемого результата.
          </p>
          <div>
            <p className=" underline mb-2 text-black dark:text-white">Заполняя бриф сконцентрируйтесь на проекте и желаемом результате, описывайте своими словами - я вас пойму!</p>
            <p className="text-black dark:text-white">
              После того, как вы заполните этот бриф, я смогу оценить объем и сложность работы, предложить вам подходящий план разработки и сформировать коммерческое предложение с ориентировочными
              сроками и стоимостью реализации проекта.
            </p>
          </div>
        </div>
      </div>
      <form>
        <h3>Шаг 1: Контактные данные</h3>
        <label htmlFor="first_name">Имя:</label>
        <input type="text" name="first_name" required placeholder="Введите ваше имя"></input>

        <label htmlFor="last_name">Фамилия:</label>
        <input type="text" name="last_name"></input>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Введите корректный адрес электронной почты"></input>

        <label htmlFor="phone_number">Номер телефона:</label>
        <input type="tel" id="phone_number" name="phone_number" required></input>

        <h3>Шаг 2: Информация о вашей деятельности</h3>
        <label htmlFor="business_type">Сфера деятельности:</label>
        <input type="text" id="business_type" name="business_type"></input>

        <label htmlFor="website_url">Адрес www (если есть):</label>
        <input type="url" id="website_url" name="website_url"></input>

        <label htmlFor="business_info">Общая информация о деятельности:</label>
        <textarea id="business_info" name="business_info"></textarea>

        <h3>Шаг 3: Веб-сайты (Разработка, создание, модернизация)</h3>

        <h3>Шаг 4: Интернет-маркетинг</h3>

        <label>
          <input type="checkbox" name="marketing_type[]" value="email_marketing" />
          E-mail маркетинг
        </label>
        <label>
          <input type="checkbox" name="marketing_type[]" value="smm_marketing" />
          SMM маркетинг
        </label>
        <label>
          <input type="checkbox" name="marketing_type[]" value="monetization" />
          Монетизация сайта
        </label>
        <label>
          <input type="checkbox" name="marketing_type[]" value="online_advertising" />
          Реклама в интернете
        </label>
        <label>
          <input type="checkbox" name="marketing_type[]" value="seo" />
          Продвижение сайта
        </label>
        <label>
          <input type="checkbox" name="marketing_type[]" value="ad_links" />
          Рекламные ссылки
        </label>

        <h4>Типы сайтов</h4>
        <label>
          <input type="checkbox" name="website_type[]" value="visit_card" />
          Сайт-визитка
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="corporate" />
          Корпоративный сайт
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="online_store" />
          Интернет-магазин
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="portal" />
          Интернет-портал
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="ad_service" />
          Сервис объявлений
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="blog" />
          Блог
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="site_upgrade" />
          Модернизация сайта
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="redesign" />
          Редизайн сайта
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="catalog" />
          Интернет-каталог
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="mobile_app" />
          Мобильное приложение
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="custom_project" />
          Индивидуальный проект
        </label>
        <label>
          <input type="checkbox" name="website_type[]" value="website_accessibility" />
          Доступность сайта
        </label>

        <h4>Сайты, которые вам нравятся</h4>
        <label htmlFor="liked_sites">Укажите пару сайтов для примера, которые вам нравятся:</label>
        <textarea id="liked_sites" name="liked_sites"></textarea>

        <h3>Шаг 5: Дополнительные услуги</h3>

        <label>
          <input type="checkbox" name="extra_services[]" value="hosting" />
          Хостинг
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="domain_registration" />
          Регистрация домена
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="ssl_certificate" />
          SSL сертификат
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="branded_email" />
          Фирменные email
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="service_5" />
          Услуга 5
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="service_6" />
          Услуга 6
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="service_7" />
          Услуга 7
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="service_8" />
          Услуга 8
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="service_9" />
          Услуга 9
        </label>

        <label>
          <input type="checkbox" name="extra_services[]" value="service_10" />
          Услуга 10
        </label>

        <h3>Шаг 6: Дополнительные пожелания</h3>
        <textarea name="additional_requests" placeholder="Напишите все дополнительные пожелания касательно проекта"></textarea>

        <button type="submit">Отправить бриф</button>
      </form>
    </>
  );
}
