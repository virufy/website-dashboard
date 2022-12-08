import "../styles/global.css";
import { Montserrat } from "@next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Head>
        <meta name="title" content="Cough Dashboard | Virufy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cough Dashboard | Virufy" />
        <meta property="og:image" content="/virufy.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Cough Dashboard | Virufy" />
        <meta property="twitter:image" content="/virufy.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Cough Dashboard | Virufy</title>
        <link rel="icon" href="https://virufy.org/favicon-32x32.png" type="image/png" />
      </Head>

      <Component {...pageProps} />
    </main>
  );
};

export default App;
