import React from 'react'
import HeaderMain from './HeaderMain'
import SignInForm from './SignInForm'

const SignInPage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue',
    maxWidth: '1200px',
    margin: '40px auto 200px auto',
    padding: '0% 1% 1% 1%',
    minHeight: '500px',
  }
  return (
    <div style={containerStyle}>
      <HeaderMain text="Sign in" />
      <SignInForm />
    </div>
  )
}

export default SignInPage
