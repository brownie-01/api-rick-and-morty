import React from 'react'

function SearchBar({ searchTerm, setSearchTerm }) {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar personaje por nombre..."
                value={searchTerm}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default SearchBar;