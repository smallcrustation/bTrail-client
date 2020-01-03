import React from 'react'
import AuthApiService from '../../services/auth-api-service'

interface Props {
  
}

const CreateAccount: React.FC<Props> = () => {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // console.log('Submitd Clicked')
    const target = e.target as typeof e.target & {
      createEmail: { value: string }
      createPassword: { value: string }
    }
    // console.log(target.email.value, target.password.value)

    AuthApiService.createWithEmailPassword({
      email: target.createEmail.value,
      password: target.createPassword.value
    })
  }

  
  return (
    <div className="CreateAccount">
      <h1>Create Account</h1>
      
      <form className="SignInForm" onSubmit={handleSubmit}>
        <input
          className="txtb"
          type="text"
          autoComplete="off"
          id="createEmail"
          name="createEmail"
          placeholder="email@host.com"
          required
        />

        <input
          className="txtb"
          type="password"
          id="createPassword"
          name="createPassword"
          placeholder="createPassword"
          required
        />

        <input className="signin-btn" type="submit" value="Sign In" />
      </form>
    </div>
  )
}

export default CreateAccount
