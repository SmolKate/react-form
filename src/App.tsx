import Signin, { type SiginValues } from './auth/components/Signin'
import Singup, { type SignupValues } from './auth/components/Singup'
import './App.css'

function App() {

  const handleSigninSubmit = (values: SiginValues) => {
    console.log('signin', values)
  }
  const handleSignupSubmit = (values: SignupValues) => {
    console.log('signin', values)
  }

  return (
    <>
      <Signin onSubmit={handleSigninSubmit} />
      <Singup onSubmit={handleSignupSubmit}/>
    </>
  )
}

export default App
