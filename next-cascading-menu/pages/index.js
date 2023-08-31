import Layout from '../components/Layout';
import { useUser } from "@auth0/nextjs-auth0/client"; 

export default function Login() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='index-page'>
      <div className='headline-log'>
        <h1 className='index-head'>Welcome to Betek Weather</h1>
      </div>
      {!user && <a className='loginout-button' href="/api/auth/login">Login</a>}
      {user && <a className='loginout-button' href="/api/auth/logout">Logout</a>}
    </div>
  );
}