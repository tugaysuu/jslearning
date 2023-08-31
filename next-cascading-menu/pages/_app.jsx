import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from '@components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </UserProvider>
  );
}