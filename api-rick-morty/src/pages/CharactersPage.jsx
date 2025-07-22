import React from 'react'
import useRickAndMortyApi from '../hooks/useRickAndMortyApi'
import Characters from '../components/Characters'
import Pagination from '../components/Pagination'

function CharactersPage() {
    //hook de la api para hacer el llamado y traer los datos
    const { characters, info, loading, error, searchTerm, setSearchTerm, onNext, onPrevious } = useRickAndMortyApi()

        // Función para manejar el cambio en el input de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (loading && characters.length === 0 && !searchTerm) {
        return <p>Cargando personajes iniciales...</p>;
    }

    if (loading && searchTerm) {
        return <p>Buscando "{searchTerm}"...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (characters.length === 0 && searchTerm && !loading) {
        return <p>No se encontraron personajes para "{searchTerm}".</p>;
    }


  return (
    <div className='container mx-auto px-4 mt-5' >
        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />

         <input
                    type="text"
                    placeholder="Buscar personaje por nombre..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
        <Characters characters={characters} />

        <Pagination next={info.next} prev={info.prev} onNext={onNext} onPrevious={onPrevious} />
    </div>
  )
}

export default CharactersPage