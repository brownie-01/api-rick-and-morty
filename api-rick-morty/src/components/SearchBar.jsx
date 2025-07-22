import React from 'react';


// El componente SearchBar recibe dos props:
// 1. searchTerm: El valor actual del término de búsqueda (para que el input sea controlado).
// 2. onSearchChange: Una función que se llamará cada vez que el valor del input cambie.
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Buscar personaje por nombre..."
        value={searchTerm} // El valor del input está controlado por el estado del padre
        onChange={onSearchChange} // Cuando el input cambia, llamamos a la función del padre
        className="search-input" // Puedes añadir una clase para estilos
      />
      {/* Podrías añadir un botón de búsqueda aquí si lo necesitaras,
          pero con el debounce, la búsqueda se activa automáticamente al escribir. */}
    </div>
  );
};

export default SearchBar;