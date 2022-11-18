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
        <title>Virufy Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </main>
  );
};

export default App;
