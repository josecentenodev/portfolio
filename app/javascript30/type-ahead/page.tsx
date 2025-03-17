'use client';

import { useState, useEffect } from 'react';
import Header from '../../_components/Header';
import islandsData from './islands.json';

interface Island {
  name: string;
  region: string;
  location: string;
  description: string;
  notable_places: string[];
  population: string;
}

export default function TypeAhead() {
  const [islands, setIslands] = useState<Island[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIslands, setFilteredIslands] = useState<Island[]>([]);

  useEffect(() => {
    // Usando el JSON local
    setIslands(islandsData.islands);
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 1) {
      const regex = new RegExp(searchTerm, 'gi');
      const matches = islands.filter(island => {
        return island.name.match(regex) || 
               island.region.match(regex) || 
               island.description.match(regex);
      });
      setFilteredIslands(matches.slice(0, 10));
    } else {
      setFilteredIslands([]);
    }
  }, [searchTerm, islands]);

  const formatPopulation = (population: string) => {
    return population === 'Unknown' ? 'Desconocida' : parseInt(population).toLocaleString('es-ES');
  };

  const highlightMatch = (text: string) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, i) => (
      regex.test(part) ? 
        <span key={i} className="bg-yellow-300 text-black">{part}</span> : 
        part
    ));
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <div className="glass-container p-8 mb-8">
          <Header
            title="Buscador de Islas"
            description="Explora las islas del mundo de One Piece"
            backLink={{
              href: "/javascript30",
              text: "Volver a JavaScript30"
            }}
          />

          <div className="flex flex-col items-center mt-8">
            <div className="w-full max-w-xl">
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Busca una isla o región..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <ul className="mt-4 space-y-2">
                {filteredIslands.map((island, index) => (
                  <li 
                    key={`${island.name}-${index}`}
                    className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">
                          {highlightMatch(island.name)}
                        </span>
                        <span className="text-sm text-gray-400">
                          Región: {highlightMatch(island.region)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">
                        {highlightMatch(island.description)}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">
                          Lugares destacados: {island.notable_places.join(', ')}
                        </span>
                        <span className="text-gray-400">
                          Población: {formatPopulation(island.population)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}