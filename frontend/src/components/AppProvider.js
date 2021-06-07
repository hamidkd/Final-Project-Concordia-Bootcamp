import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.data));
  }, []);

  console.log("cats", categories);
  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser, categories }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
