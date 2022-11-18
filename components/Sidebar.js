import i18n from "../i18n";
import Card from "./Card";

const Sidebar = ({ report, country, date, locale, changeLocale }) => {
  const { globalsOptions } = i18n;

  return (
    <sidebar className="min-w-full w-3/10 bg-primary h-screen display flex flex-col items-center justify-around p-4 text-white">
      <header className="w-full">
        <select
          onChange={changeLocale}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 max-w-full w-full"
        >
          {globalsOptions.map((locale) => (
            <option key={locale.value} value={locale.value}>
              {locale.label}
            </option>
          ))}
        </select>
        <h3 className="text-3xl font-bold text-center mt-6">{country ? country?.country : locale?.worldwide}</h3>
      </header>
      <section className="w-full">
        <Card
          title={locale?.total}
          content={country ? country?.total : report?.total}
        />
        <Card
          title={locale?.positive}
          content={country ? country?.positive : report?.positive}
        />
        <Card
          title={locale?.negative}
          content={country ? country?.negative : report?.negative}
        />
        <Card
          title={locale?.unknown}
          content={country ? country?.unknown : report?.unknown}
        />
      </section>
      <footer className="text-center">
        <p>{`${locale?.updated_at} ${date}`}</p>
      </footer>
    </sidebar>
  );
};

export default Sidebar;
