import React, { useEffect, useState } from "react";
import { UserMessages } from "../commonTypes/types";
import { ADVICE_API_URL } from "../api/api";
import { useFetchAdvice } from "../fetchAdvice";
import { Loader } from "./Loader/Loader";
import { Advice } from "./AdvicesTypes";
import { AdviceItem } from "./AdviceItem/AdviceItem";
import "./SearchAdvice.scss";

export const SearchAdvice = () => {
  const [isSearchPerformed, setIsSearchPerformed] = useState<Boolean>(false);
  const [searchTerm, setSearchTerm] = useState<String>("");
  const [{ isLoading, data, error }, fetchData] = useFetchAdvice();
  const [searchResult, setSearchResult] = useState<Advice[]>();

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO Add type for argument.
    e.preventDefault();
    const target = e.target as typeof e.target & {
      term: { value: string };
    };
    const term = target.term.value;

    if (term && searchTerm !== term) {
      setSearchTerm(term);
      fetchData(`${ADVICE_API_URL}/search/${term}`);
      setIsSearchPerformed(true);
    }
  };

  useEffect(() => {
    setSearchResult(data);
  }, [data]);

  /* 
    Show only first 15 result.
    Best case is to add pagination or infinite scroll with lazy loading 
  */
  const showMatchedAdvices = () => {
    if (!isSearchPerformed) {
      return;
    }

    return searchResult && searchResult.length < 1 ? (
      <p>{UserMessages.NoMatch}</p>
    ) : (
      <ol className="advices-list">
        {data.slice(0, 15).map((item: Advice) => (
          <li key={item.id}>
            <AdviceItem advice={item.advice} />
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="search-advice-wrapper">
      <form onSubmit={onSearchSubmit} name="searchAdvice">
        <p>Search for more advice:</p>
        <input type="search" name="term" />
        <button>Search</button>
      </form>

      {/* Check if our fetch hasn't error,if not check for fetch still performing,
        when finish call function showMatchedAdvices() to show proper result. */}
      {error ? (
        <p>"{UserMessages.Error}"</p>
      ) : isLoading && !error ? (
        <Loader />
      ) : (
        showMatchedAdvices()
      )}
    </div>
  );
};
