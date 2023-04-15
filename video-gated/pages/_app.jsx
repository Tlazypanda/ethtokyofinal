import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const NEXT_PUBLIC_LIVEPEER_STUDIO_API_KEY = ''


const client = createReactClient({
  provider: studioProvider({ apiKey: NEXT_PUBLIC_LIVEPEER_STUDIO_API_KEY }),
});

const apolloClient = new ApolloClient({
  uri: "https://api.airstack.xyz/gql",
  cache: new InMemoryCache()
});


const livepeerTheme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={apolloClient}>
    <LivepeerConfig
      client={client}
      theme={livepeerTheme}
    >
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Component {...pageProps} />
      </Layout>

    </LivepeerConfig >
    </ApolloProvider>
  );
}

export default MyApp;
