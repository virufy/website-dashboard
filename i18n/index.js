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
  locale: "en",
  worldwide: "Global",
  total: "Shared coughs",
  positive: "Positive tests",
  negative: "Negative tests",
  unknown: "Unknown tests",
  updated_at: "Updated at",
  select_country: "Click in a country on the map to view specific data",
  go_back: "View global data",
  no_data: "No data collected"
};

const es = {
  locale: "es",
  worldwide: "Global",
  total: "Toses compartidas",
  positive: "Pruebas positivas",
  negative: "Pruebas negativas",
  unknown: "Pruebas desconocidas",
  updated_at: "Actualizado en",
  select_country: "Haz clic en el país para ver los datos específicos",
  go_back: "Ver datos globales",
  no_data: "No se han registrado datos"
};

const pt = {
  locale: "pt",
  worldwide: "Global",
  total: "Tosse compartilhada",
  positive: "Testes positivos",
  negative: "Testes negativos",
  unknown: "Testes desconhecidos",
  updated_at: "Atualizado em",
  select_country: "Clique em um país no mapa para visualizar dados específicos",
  go_back: "Ver dados globais",
  no_data: "Nenhum dado coletado"
};

const jp = {
  locale: "jp",
  worldwide: "世界",
  total: "咳き込み",
  positive: "陽性のテスト",
  negative: "ネガティブなテスト",
  unknown: "不明なテスト",
  updated_at: "更新日",
  select_country: "地図上の国をクリックすると特定のデータが表示されます",
  go_back: "グローバルなデータを表示",
  no_data: "データ収集なし"
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
