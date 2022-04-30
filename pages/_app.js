import Navigator from "../components/navigator/Navigator";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigator></Navigator>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
