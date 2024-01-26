import { useReducer, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Page from './components/Page'
import { MovieContext, ThemeContext } from './context'
import {
  initialState,
  shoppingCardReducer,
} from './reducers/shoppingCardReducer'

function App() {
  // const [shoppingCardData, setShoppingCardData] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(shoppingCardReducer, initialState)
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
