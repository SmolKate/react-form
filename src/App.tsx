import Signin, { type SiginValues } from './components/Signin'
import Singup, { type SignupValues } from './components/Singup'
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
