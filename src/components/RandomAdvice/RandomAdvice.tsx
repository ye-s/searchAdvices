import React, { useEffect } from "react";
import { UserMessages } from "../../types/CommonTypes";
import { ADVICE_API_URL } from "../../api/api";
import { useFetchAdvice } from "../../hooks/fetchAdvice";
import { Loader } from "../commonComponents/Loader/Loader";
import { AdviceItem } from "../commonComponents/AdviceItem/AdviceItem";
import "./RandomAdvice.scss";

export const RandomAdvice = () => {
  const [{ isLoading, data, error }, fetchData] = useFetchAdvice();
  useEffect(() => {
    fetchData(ADVICE_API_URL);
  }, [fetchData]);

  const handleOnRandomAdviceClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    fetchData(ADVICE_API_URL);
  };

  return (
    <div>
      <div className="random-advice-text-wrapper">
        {error ? (
          <p>"{UserMessages.Error}"</p>
        ) : isLoading && !error ? (
          <Loader />
        ) : (
          <AdviceItem advice={data.advice} />
        )}
      </div>
      <form>
        <button name="randomAdvice" onClick={handleOnRandomAdviceClick}>
          Gimme more advice!
        </button>
      </form>
    </div>
  );
};
