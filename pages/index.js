import { useState } from "react";
import translations from "../i18n";
import { getCountryCode } from "../utils/countries";

import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

const Dashboard = ({ report, date }) => {
  const [i18n, setI18n] = useState(translations.en);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setI18n(translations[language]);
  };

  const [country, setCountry] = useState(false);

  const handleCountry = (country) => {
    const countryIndex = report.countries.findIndex((c) => c.code === country);

    setCountry(report.countries[countryIndex]);
  };

  return (
    <main className="flex justify-between min-w-">
      <Sidebar
        report={report}
        country={country}
        date={date}
        locale={i18n}
        changeLocale={handleLanguageChange}
        changeCountry={handleCountry}
      />
      <Map handleClick={handleCountry} report={report} locale={i18n} />
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://virufy-collab-public-info.s3.us-east-2.amazonaws.com/data_report.json",
    {
      mode: "no-cors",
    }
  );

  const coughs = await res.json();

  const report = {
    total: 0,
    positive: 0,
    negative: 0,
    unknown: 0,
    countries: [],
  };

  coughs.forEach((cough) => {
    report.total += 1;

    if (
      cough.pcrTestResult === "Positive" ||
      cough.antibodyTestResult === "Positive"
    ) {
      report.positive += 1;
    } else if (
      cough.pcrTestResult === "Negative" ||
      cough.antibodyTestResult === "Negative"
    ) {
      report.negative += 1;
    } else {
      report.unknown += 1;
    }

    const country = report.countries.find(
      (country) => country.country === cough.country
    );

    if (country) {
      country.total += 1;

      if (
        cough.pcrTestResult === "Positive" ||
        cough.antibodyTestResult === "Positive"
      ) {
        country.positive += 1;
      } else if (
        cough.pcrTestResult === "Negative" ||
        cough.antibodyTestResult === "Negative"
      ) {
        country.negative += 1;
      } else {
        country.unknown += 1;
      }
    } else {
      report.countries.push({
        country: cough.country,
        code: getCountryCode(cough.country),
        total: 1,
        positive:
          cough.pcrTestResult === "Positive" ||
            cough.antibodyTestResult === "Positive"
            ? 1
            : 0,
        negative:
          cough.pcrTestResult === "Negative" ||
            cough.antibodyTestResult === "Negative"
            ? 1
            : 0,
        unknown:
          cough.pcrTestResult === "Unknown" ||
            cough.antibodyTestResult === "Unknown"
            ? 1
            : 0,
      });
    }
  });

  report.countries.sort((a, b) => a.country.toLowerCase().localeCompare(b.country.toLowerCase()));


  return {
    props: {
      report,
      date: new Date().toGMTString(),
    },
    revalidate: 60,
  };
};

export default Dashboard;
