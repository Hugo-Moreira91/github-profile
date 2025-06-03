import { createGlobalStyle } from 'styled-components';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { UserProvider } from './contexts/user-context';
import { UserDetails } from './components/user-details/UserDetails';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Header />
        <UserDetails />
        <Footer />
      </UserProvider>
    </>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-base);
  }

  body {
    min-height: 100vh;
    background-color: var(--bg-color-base);
  }

  a {
    text-decoration: none;
  }
`

export default App
