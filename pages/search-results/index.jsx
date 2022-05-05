import React from "react";

import MainLayout from "../../layouts/MainLayout";
import Hero from "./Hero";
import Results from "./Results";

const SearchResults = () => {
  return (
    <MainLayout>
      <Hero />
      <Results />
    </MainLayout>
  );
};

export default SearchResults;
