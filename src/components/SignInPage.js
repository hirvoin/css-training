import React from 'react'
import HeaderMain from './HeaderMain'
import SignInForm from './SignInForm'

const SignInPage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue',
    maxWidth: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '12%',
    padding: '0% 1% 1% 1%',
  }
  return (
    <div style={containerStyle}>
      <HeaderMain text="Sign in" />
      <SignInForm />
    </div>
  )
}

export default SignInPage
