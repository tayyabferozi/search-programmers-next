import { useEffect } from "react";
import "../styles/styles.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("../public/assets/css/bootstrap-utilities.min.css")
      : null;
    typeof document !== undefined
      ? require("../public/assets/css/bootstrap-grid.min.css")
      : null;
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
