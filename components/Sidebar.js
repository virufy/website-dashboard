import { translations, useTranslation } from "../i18n";
import Card from "./Card";

const Sidebar = ({
  report,
  country,
  date,
  changeLocale,
  changeCountry,
}) => {
  const { globalsOptions } = translations;
  const locale = useTranslation();

  return (
    <sidebar className="min-w-full w-screen lg:w-3/10 bg-primary h-screen display flex flex-col items-center justify-around p-4 text-white">
      <header className="w-full">
        <div className="w-full flex justify-end">
          <select
            onChange={changeLocale}
            className="bg-primary text-white-900 text-sm rounded-lg block p-2.5 max-w-lg cursor-pointer focus:ring-primary focus:border-primary text-right"
            value={locale?.locale}
          >
            {globalsOptions.map((locale) => (
              <option key={locale.value} value={locale.value}>
                {locale.label}
              </option>
            ))}
          </select>
        </div>
        <article className="hidden lg:block text-center m-4 p-4 opacity-[.90]">
          <h3 className="text-3xl font-bold text-center mt-6">
            {country ? country?.country : locale?.worldwide}
          </h3>
          {country ? (
            <p
              className="text-center font-bold text-lg mt-1 cursor-pointer underline"
              onClick={() => changeCountry(false)}
            >
              {locale?.go_back}
            </p>
          ) : (
            <p className="text-center font-bold text-lg mt-1">
              {locale?.select_country}
            </p>
          )}
        </article>
        <article className="m-4">
          <select
            className="lg:hidden bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block opacity-[.90] w-full p-4 text-lg"
            onChange={(e) => {
              changeCountry(e.target.value);
            }}
          >
            {report?.countries.map((countryObject) => (
              <option key={countryObject?.code} value={countryObject?.code}>
                {countryObject?.country}
              </option>
            ))}
          </select>
        </article>
      </header>
      <section className="w-full">
        <Card
          title={locale?.total}
          content={country ? country?.total : report?.total}
          no_data={locale.no_data}
        />
        <Card
          title={locale?.positive}
          content={country ? country?.positive : report?.positive}
          no_data={locale.no_data}
        />
        <Card
          title={locale?.negative}
          content={country ? country?.negative : report?.negative}
          no_data={locale.no_data}
        />
        <Card
          title={locale?.unknown}
          content={country ? country?.unknown : report?.unknown}
          no_data={locale.no_data}
        />
      </section>
      <footer className="text-center">
        <p>{`${locale?.updated_at} ${date}`}</p>
      </footer>
    </sidebar>
  );
};

export default Sidebar;
