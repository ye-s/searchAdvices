import { RandomAdvice } from "./components/RandomAdvice/RandomAdvice";
import { SearchAdvice } from "./components/SearchAdvice/SearchAdvice";
import "./CommonStyles.scss";

export default function App() {
  return (
    <main className="App">
      <h1>Are you looking for advice?</h1>

      <RandomAdvice />

      <SearchAdvice />
    </main>
  );
}
