import React from 'react'
import HeaderMain from './HeaderMain'
import SignInForm from './SignInForm'

const SignInPage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue, 1px 1px 1px black',
    maxWidth: '1200px',
    margin: '10px auto 200px auto',
    padding: '1% 1% 1% 1%',
    // minHeight: '500px',
  }
  return (
    <div>
      <HeaderMain text="Sign in" />
      <div style={containerStyle}>
        <div style={{ display: 'flex ' }}>
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

export default SignInPage
