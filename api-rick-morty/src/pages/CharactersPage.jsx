import React from 'react'
import useRickAndMortyApi from '../hooks/useRickAndMortyApi'
import Characters from '../components/Characters'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar';

function CharactersPage() {
    const { characters, info, loading, error, searchTerm, setSearchTerm, onNext, onPrevious } = useRickAndMortyApi();

    if (loading && characters.length === 0 && !searchTerm) {
        return <p className="text-center text-lg mt-10">Cargando personajes iniciales...</p>
    }

    if (loading && searchTerm) {
        return <p className="text-center text-lg mt-10">Buscando "{searchTerm}"...</p>
    }

    if (error) {
        return <p className="text-center text-lg mt-10 text-red-600">Error: {error}</p>
    }

    if (!loading && searchTerm && characters.length === 0) {
        return <p className="text-center text-lg mt-10">No se encontraron personajes para "{searchTerm}".</p>
    };

  return (
    <div className='container mx-auto px-4 mt-5' >
        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />

        <SearchBar searchTerm= {searchTerm} setSearchTerm={setSearchTerm} />

        <Characters characters={characters} />

        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />
    </div>
  )
}

export default CharactersPage