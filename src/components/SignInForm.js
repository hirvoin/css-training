import React from 'react'

const SignInForm = () => {
  const formStyle = {
    padding: '2%',
    margin: 'auto',
    backgroundColor: 'white',
    border: 'solid',
    borderColor: 'white',
    boxShadow: '0px 2px 5px slategray',
    display: 'inline-block',
  }
  return (
    <form style={formStyle}>
      <div style={{ margin: '1%' }}>
        <div>Username:</div>
        <input type="text" id="username" />
      </div>
      <div style={{ margin: '1%' }}>
        <div>Password:</div>
        <input type="password" id="username" />
      </div>
      <button style={{ margin: '1%' }} type="button">
        Sign in
      </button>
    </form>
  )
}

export default SignInForm
