import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.data));
  }, []);

  return (
    <AppContext.Provider value={{ categories }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
