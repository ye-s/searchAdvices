import { useEffect } from "react";
import { UserMessages } from "../commonTypes/types";
import { ADVICE_API_URL } from "../api/api";
//import useFetch from "react-fetch-hook";
import { useFetchAdvice } from "../fetchAdvice";
import { Loader } from "./Loader/Loader";
import { AdviceItem } from "./AdviceItem/AdviceItem";
import "./RandomAdvice.scss";

export const RandomAdvice = () => {
  const [{ isLoading, data, error }, fetchData] = useFetchAdvice(); //ADVICE_API_URL);
  useEffect(() => {
    fetchData(ADVICE_API_URL);
  }, [fetchData]);

  const handleOnRandomAdviceClick = (e) => {
    e.preventDefault();
    fetchData(ADVICE_API_URL);
    // fetch(ADVICE_API_URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAdvice(data.slip.advice);
    //   })
    //   .catch((e) => {
    //     setShowLoading(false);
    //     setShowErrorMessage(true);
    //     console.error(e);
    //   });
  };

  return (
    <>
      <div className="random-advice-wrapper">
        {error ? (
          <p>"{UserMessages.Error}"</p>
        ) : isLoading && !error ? (
          //<div className="loader-wrapper">
          <Loader />
        ) : (
          //</div>
          //<div className="random-advice-wrapper">
          <AdviceItem advice={data.advice} />
          //</div>
          // <p className="advice"ReactReact>"{data.advice}"</p>
        )}
      </div>
      <form>
        <button name="randomAdvice" onClick={handleOnRandomAdviceClick}>
          Gimme more advice!
        </button>
      </form>
    </>
  );
};
