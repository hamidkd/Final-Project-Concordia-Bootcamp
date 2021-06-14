import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContext } from "./AppProvider";
import { useLocation } from "react-router-dom";

export const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  // creating initial filters ===========================================

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  const { categories } = useContext(AppContext);


  const createInitialFilter = () => {
    const initialFilters = {
      category: {},
    };

    categories?.forEach((category) => {
      initialFilters.category = {
        ...initialFilters.category,
        [category.name.toLowerCase()]: false,
      };
    });

    if (query.get("category")) {
      initialFilters.category[query.get("category").toLowerCase()] = true;
    }

    return initialFilters;
  };

  //creating states ===================================================

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("/api/tutors")
      .then((res) => res.json())
      .then((json) => {
        setItems(json.data)
      });
  }, []);

  const [filters, setFilters] = useState();
  const [filteredItems, setFilteredItems] = useState([]);
  const [isOnlyShowAvailableItemsChecked, setIsOnlyShowAvailableItemsChecked] =
    useState(false);
  const [pagination, setPagination] = useState(1);
  const [isOnlyAliveChecked, setIsOnlyAliveChecked] =
    useState(false);

  //reseting on url change or after getting data after initial delay

  useEffect(() => {
    const readyInitialState = createInitialFilter();
    setFilters(readyInitialState);
  }, [query.get("category"), categories]);

  //handleing filters update ===================================================
  const updateFiltersHandler = (event) => {
    const filterType = event.target.name;
    const key = event.target.value;
    const isOn = event.target.checked;

    let newfilters = filters;
    newfilters[filterType][key] = !filters[filterType][key];

    setFilters(newfilters);
    setFilteredItems(() => filterItems(items));
    setPagination(1);

  };

  //filtering prodocts =======================================================

  const filterItems = (arr) => {
    if (!arr) {
      return items;
    }
    if (arr.length === 0) {
      return items;
    }

    if (!filters.category || filters.category.length < 2) {
      return items;
    }

    if (isOnlyAliveChecked) {
      arr = arr.filter((item) => {
        
        return item.alive === true;
      });

    }

    let itemsThatPassCategoryFilter = arr;

    if (!Object.values(filters.category).every((e) => e === false)) {
      itemsThatPassCategoryFilter = items.filter((item) => {
        return filters.category[item.category.toLowerCase()] === true;
      });
    }

    return itemsThatPassCategoryFilter;
  };

  useEffect(() => {
    setFilteredItems(() => filterItems(items));
  }, [filters, isOnlyAliveChecked, items]);


  // return ========================================================
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        filteredItems,
        setFilteredItems,
        updateFiltersHandler,
        filterItems,
        isOnlyAliveChecked,
        setIsOnlyAliveChecked,
        pagination,
        setPagination,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
