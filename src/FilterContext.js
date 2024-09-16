// src/FilterContext.js
import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const FilterContext = createContext();

// Fournisseur de contexte
export const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('Tous');

  const handleFilterChange = (category) => {
    setSelectedFilter(category);
  };

  return (
    <FilterContext.Provider value={{ selectedFilter, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
