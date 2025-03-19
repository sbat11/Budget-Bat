import React from 'react'
import AuthForm from '@/components/ui/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  
  return (
    <section className='flex-center size-full max0sm:px-6'>
      <AuthForm type="sign-up">

      </AuthForm>
    </section>
  )
}

export default SignUp