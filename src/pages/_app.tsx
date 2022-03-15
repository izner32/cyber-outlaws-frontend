import "../styles/global.css";
import { useEffect, useState } from "react";
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo 5.png" />
      </Head>
      <NextNProgress options={{showSpinner: false}} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} ></Component>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
