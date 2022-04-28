import Navigator from "../components/navigator/Navigator";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navigator></Navigator>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
