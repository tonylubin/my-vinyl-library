import "@/styles/globals.css";
import { BioRhyme } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Title from "@/components/Head";
config.autoAddCss = false;


const bioRhyme = BioRhyme({ 
  weight: ["200", "400", "700", "800"],
  subsets: ['latin'],
  style: ["normal"],
  variable: "--font-bioRhyme",
 });


export default function App({ Component, pageProps }) {
  return (
    <div className={`h-full w-full overflow-hidden text-primary-textColour ${bioRhyme.variable}`}>
      <Title />
      <Component {...pageProps} />
    </div>
  )
};
