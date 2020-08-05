import Layout from "../components/Layout";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.firebase) {
      try {
        var firebaseConfig = {
          apiKey: "AIzaSyAG1uBHwBuP6CZHyaAeOWIyoY7e-TXSf-8",
          authDomain: "phone-preaching.firebaseapp.com",
          databaseURL: "https://phone-preaching.firebaseio.com",
          projectId: "phone-preaching",
          storageBucket: "phone-preaching.appspot.com",
          messagingSenderId: "137049518356",
          appId: "1:137049518356:web:90ee060ddae49c901d1201",
          measurementId: "G-5VWLWXN6B6"
        };
      
        window.firebase.initializeApp(firebaseConfig);
        window.firebase.analytics();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Analitcs is not available");
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}