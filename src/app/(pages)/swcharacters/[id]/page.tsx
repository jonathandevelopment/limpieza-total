"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchCharacters } from "@/app/services/swapi";

// Definir la interfaz para Character
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

export default function CharacterDetailPage() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  // Verificar que params.id sea una cadena y convertirla en un número
  const id = Array.isArray(params.id) ? parseInt(params.id[0]) : parseInt(params.id);

  useEffect(() => {
    async function getCharacterDetails() {
      if (isNaN(id)) return; // Verificar si el ID es válido
      setLoading(true);
      const data = await fetchCharacters();

      if (data && data.results[id]) {
        setCharacter(data.results[id]); // Obtener el personaje usando el índice
      } else {
        setError("Character not found");
      }
      setLoading(false);
    }

    getCharacterDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {character && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <div>
              <span className="font-semibold">Height:</span> {character.height} cm
            </div>
            <div>
              <span className="font-semibold">Mass:</span> {character.mass} kg
            </div>
            <div>
              <span className="font-semibold">Hair Color:</span> {character.hair_color}
            </div>
            <div>
              <span className="font-semibold">Skin Color:</span> {character.skin_color}
            </div>
            <div>
              <span className="font-semibold">Eye Color:</span> {character.eye_color}
            </div>
            <div>
              <span className="font-semibold">Birth Year:</span> {character.birth_year}
            </div>
            <div>
              <span className="font-semibold">Gender:</span> {character.gender}
            </div>
            <div>
              <span className="font-semibold">Homeworld:</span> {character.homeworld}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
