import "./App.css";
import { defaultTheme, ThemeProvider } from "evergreen-ui";
import { Welcome } from "./components/Welcome";
import { Ingredients } from "./components/Ingredients";

function App() {
  const theme = {
    ...defaultTheme,
    primary: "#90A375",
    // button: {
    //   color: "green",
    // },
  };
  console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ defaultTheme", defaultTheme);

  return (
    <ThemeProvider value={theme}>
      <div className="App">
        <header className="App-header">
          <Welcome></Welcome>
          <Ingredients></Ingredients>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
