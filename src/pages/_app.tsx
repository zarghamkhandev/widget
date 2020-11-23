import '../../styles/globals.css';
import { AppProps } from 'next/app';
import React from 'react';

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default App;
