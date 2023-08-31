// pages/page3.js
import Layout from '../components/Layout';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Page2() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user]);

  if (isLoading) return <div>Loading...</div>;
  if (!user) return null;
  return (
    <Layout>
      <div>This is Page 2.</div>
    </Layout>
  );
}
