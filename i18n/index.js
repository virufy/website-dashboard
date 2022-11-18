const globals = {
  en: "English",
  es: "Español",
  pt: "Português",
  jp: "日本語",
};

const globalsOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "pt", label: "Português" },
  { value: "jp", label: "日本語" },
];

const en = {
  worldwide: "Worldwide",
  total: "Donated coughs",
  positive: "Positive tests",
  negative: "Negative tests",
  unknown: "Unknown tests",
  updated_at: "Updated at",
};

const es = {
  worldwide: "Mundial",
  total: "Toses donadas",
  positive: "Pruebas positivas",
  negative: "Pruebas negativas",
  unknown: "Pruebas desconocidas",
  updated_at: "Actualizado en",
};

const pt = {
  worldwide: "Mundial",
  total: "Tosse doada",
  positive: "Testes positivos",
  negative: "Testes negativos",
  unknown: "Testes desconhecidos",
  updated_at: "Atualizado em",
};

const jp = {
  worldwide: "世界",
  total: "寄付された咳",
  positive: "陽性のテスト",
  negative: "ネガティブなテスト",
  unknown: "不明なテスト",
  updated_at: "更新日",
};

const i18n = {
  globals,
  globalsOptions,
  en,
  es,
  pt,
  jp,
};

export default i18n;
