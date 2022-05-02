import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';
import { AppContainer, MainSection } from './components/app.style';
import { useCallback, useState } from 'react';
import { Button } from './components/button.style';

function App() {
  const [currentTheme, setCurrentTheme] = useState("light")

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  )

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
          <MainSection>
            <h1>You are in {currentTheme} mode</h1>
            <Button onClick={()=> setCurrentTheme(getOpositeTheme())}> switch to {getOpositeTheme()} mode</Button>
          </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
