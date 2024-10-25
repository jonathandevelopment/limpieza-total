import { fetchCharacters } from "@/app/services/swapi";
import Link from "next/link";
import { useEffect, useState } from "react"

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}


export default function StarWarsCharacters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getCharacters() {
          setLoading(true);
          const data = await fetchCharacters();
          if (data) {
            setCharacters(data.results);
          } else {
            setError("Error fetching characters");
          }
          setLoading(false);
        }
    
        getCharacters();
      }, []);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>{error}</div>;

    return(
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Star Wars Characters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character, index) => (
          <Link href={`/swcharacters/${index}`} key={character.name} passHref>
              <div
              key={character.name}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-2">{character.name}</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Height:</span> {character.height} cm
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Mass:</span> {character.mass} kg
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Hair Color:</span> {character.hair_color}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Skin Color:</span> {character.skin_color}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Eye Color:</span> {character.eye_color}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Birth Year:</span> {character.birth_year}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Gender:</span> {character.gender}
              </p>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
    )
}