import React from 'react'

const SignInForm = () => {
  const formStyle = {}
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" id="username" />
      </div>
      <button type="button">Sign in</button>
    </form>
  )
}

export default SignInForm
