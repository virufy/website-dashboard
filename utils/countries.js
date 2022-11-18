import isoCountries from "i18n-iso-countries";

const { getAlpha2Code } = isoCountries;

const getCountryCode = (countryName) =>
  getAlpha2Code(countryName, "en") ?? "KR";

export { getCountryCode };
