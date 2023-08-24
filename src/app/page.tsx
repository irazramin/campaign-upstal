'use client'
import {LinkedIn, useLinkedIn} from "react-linkedin-login-oauth2";
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

export default function Home() {
  const { linkedInLogin } = useLinkedIn({
    clientId: '86hltwnbq77x2v',
    redirectUri: `http://localhost:3000/auth/linkedin/callback`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
      <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
      />
  )
}
