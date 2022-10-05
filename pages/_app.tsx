import "../styles/globals.css";
import type { AppProps } from "next/app";
import apolloClient from "../data/apollo";
import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
