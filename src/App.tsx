import { useEffect, useState } from "react";
// Use when api will be migrated
// import { getRandomAdvice } from "./api/api";
import { Advice } from "./components/AdvicesTypes";
import { RandomAdvice } from "./components/RandomAdvice";
import { SearchAdvice } from "./components/SearchAdvice";
import { UserMessages } from "./commonTypes/types";
import "./CommonStyles.scss";

/* 
  TODO 
  1) I would rather split both form fucnctionality to 2 new different
  components <RandomAdvice> and <SearchAdvice>
  2) And move out repeated api call to api.tsx file with all api calls.
*/
export default function App() {
  // Should be moved to api.tsx with all fetches
  const ADVICE_API_URL = "https://api.adviceslip.com/advice";
  const [results, setResults] = useState<Advice[]>([]);
  const [searchTerm, setSearchTerm] = useState<String>("");
  const [showNotFoundMessage, setShowNotFoundMessage] = useState<Boolean>(
    false
  );
  const [showLoadingForSearch, setShowLoadingForSearch] = useState<Boolean>(
    false
  );

  /* 
    Fixed effect to run only on first rendering
    TODO Requires to reuse this method from api and add fallback for errors and empty response
  */
  // useEffect(() => {
  //   fetch(ADVICE_API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAdvice(data.slip.advice);
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  /* 
    TODO Requires to change function name to more unique and meaningful.
    1) There is issue in this method it shows loading message every request,
    on fast response it looks like blink for user, steps to eliminate it:
      * We add timeout for showing result from successful response only after 1s or 1.5s that is more pleasable
    for user to see transition  (Current advice -> loading --> New advice)
      * Also requires to add some state check to verify if response is not returned than do not
    send another request to fetch data.
    2) Shoule be handle bad response.
  */
  // function onClick(e) {
  //   // TODO Add type for argument.
  //   e.preventDefault();

  //   setAdvice(UserMessages.Loading);

  //   fetch(ADVICE_API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAdvice(data.slip.advice);
  //     })
  //     .catch((e) => console.error(e));
  // }

  /* 
    TODO Requires to change function name to more unique and meaningful.
    Several issues should be fixed in this function:
    1) Term should be added to component state to check if we are not fething same result,
    2) Should be handled case when there are no matching advices:
      * We add new state variable to check if response hasn't returned any mathing advice
      * Based on new variable show some message,
    3) Shoule be handle bad response,
    4) Also should be made timeot for loading message to prevent blink,
    5) Prevent from fetching empty string or repeating same (dunno if only special characters or numbers
      are a valid cases).
  */
  // function onSubmit(e) {
  //   // TODO Add type for argument.
  //   e.preventDefault();
  //   const term = e.target.term.value;

  //   if (term && searchTerm !== term) {
  //     setShowLoadingForSearch(true);
  //     setSearchTerm(term);
  //     fetch(`${ADVICE_API_URL}/search/${term}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         let advices = data?.slips;
  //         // explicit check to show "no match advices" message
  //         if (!advices || advices.length < 1) {
  //           setShowNotFoundMessage(true);
  //         } else {
  //           setResults(data.slips);
  //           if (showNotFoundMessage) {
  //             setShowNotFoundMessage(false);
  //           }
  //         }
  //         setShowLoadingForSearch(false);
  //       })
  //       .catch((e) => {
  //         console.error(e);
  //         setShowLoadingForSearch(false);
  //       });
  //   }
  // }

  // /*
  //   Show only first 15 result.
  //   Best case is to add pagination or infinite scroll with lazy loading
  // */
  // function showMatchedAdvices() {
  //   return showNotFoundMessage ? (
  //     <p>{UserMessages.NoMatch}</p>
  //   ) : (
  //     <ol>
  //       {results.slice(0, 15).map((result: Advice) => (
  //         <li key={result.id}>{result.advice}</li>
  //       ))}
  //     </ol>
  //   );
  // }

  /* 
    TODO 
    1) I would rather split both form fucnctionality to 2 new different
    components <RandomAdvice> and <SearchAdvice>
  */
  return (
    <main className="App">
      <h1>Are you looking for advice?</h1>

      <RandomAdvice />

      <br />
      <SearchAdvice />
      {/*  Start of new component <SearchAdvice> */}
      {/* <form onSubmit={onSubmit}>
        <p>Search for more advice:</p>
        <input type="search" name="term" />
        <button>Search</button>
      </form>

      {!showLoadingForSearch && showMatchedAdvices()}
      {showLoadingForSearch && <p>{UserMessages.Loading}</p>} */}
      {/*  End of new component <SearchAdvice> */}
    </main>
  );
}
