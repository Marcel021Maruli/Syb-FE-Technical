import { createContext, useState } from "react";

export const AnilistContext = createContext({});

export const AnilistProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <AnilistContext.Provider value={{ search, setSearch }}>
      {children}
    </AnilistContext.Provider>
  );
};
