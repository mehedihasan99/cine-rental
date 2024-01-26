import { useContext, useState } from 'react'
import Moon from '../assets/icons//moon.svg'
import Sun from '../assets/icons/sun.svg'
import Logo from '../assets/logo.svg'
import Ring from '../assets/ring.svg'
import ShoppingCart from '../assets/shopping-cart.svg'
import { MovieContext, ThemeContext } from '../context'
import ShoppingDetails from './cine/ShoppingDetails'

export default function Header() {
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const { state } = useContext(MovieContext)
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleShoppingCard = () => {
    setShowShoppingCart(true)
  }
  return (
    <header>
      {showShoppingCart && (
        <ShoppingDetails onClose={() => setShowShoppingCart(false)} />
      )}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={darkMode ? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                className="relative"
                onClick={handleShoppingCard}
                src={ShoppingCart}
                width="24"
                height="24"
                alt="shopping-cart"
              />
              {state.shoppingCardData.length > 0 && (
                <span className="absolute -top-4 -right-4 font-bold bg-green-400 text-white p-1 w-6 h-6 rounded-xl flex items-center justify-center">
                  {state.shoppingCardData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
