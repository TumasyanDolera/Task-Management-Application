import './App.css'
import { Navigation } from './navigation'
import { Footer } from './footer'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks/redux'
import { getAccessToken } from './helpers'
import { Token } from './models/iAuthState'
import { setToken } from './redux_toolkit/features/auth'


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const accessToken = getAccessToken(Token.accessToken)
    if (accessToken) {

      dispatch(setToken(accessToken))
    }
  }, [])

  return (
    <>
      <Navigation />
      <Footer />
    </>
  )
}

export default App
