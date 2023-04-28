import "@/styles/globals.css";
import { BioRhyme } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Title from "@/components/Head";
import { createContext, state, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
config.autoAddCss = false;

// google font
const bioRhyme = BioRhyme({
  weight: ["200", "400", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-bioRhyme",
});


export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  
  const [ formData, setFormData ] = useState();

  return (
    <UserContext.Provider value={{setFormData, formData}}>
      <div
        className={`h-full w-full overflow-hidden text-primary-textColour ${bioRhyme.variable}`}
      >
        <Title />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} />
      </div>
    </UserContext.Provider>
  );
}
