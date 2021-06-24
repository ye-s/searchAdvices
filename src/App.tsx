import { useEffect, useState } from "react";
// Use when api will be migrated
// import { getRandomAdvice } from "./api/api";
import { Advice } from "./types/AdvicesTypes";
import { RandomAdvice } from "./components/RandomAdvice/RandomAdvice";
import { SearchAdvice } from "./components/SearchAdvice/SearchAdvice";
import { UserMessages } from "./types/CommonTypes";
import "./CommonStyles.scss";

export default function App() {
  return (
    <main className="App">
      <h1>Are you looking for advice?</h1>

      <RandomAdvice />

      <br />
      <SearchAdvice />
    </main>
  );
}
