"use client";

import { useEffect, useState } from "react";
import { fetchPlanets } from "@/app/services/swapi";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export default function Planets() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPlanets() {
      setLoading(true);
      const data = await fetchPlanets();
      if (data) {
        setPlanets(data.results);
      } else {
        setError("Error fetching planets");
      }
      setLoading(false);
    }

    getPlanets();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Gradientes de fondo diferentes para cada planeta
  const gradientColors = [
    "from-purple-500 to-indigo-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-pink-500 to-purple-500",
    "from-yellow-500 to-orange-500",
    "from-blue-500 to-cyan-500",
    "from-red-500 to-pink-500",
    "from-teal-500 to-green-500",
    "from-indigo-500 to-blue-500",
    "from-lime-500 to-green-500",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Planets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {planets.map((planet, index) => (
          <div
            key={planet.name}
            className={`flex flex-col items-center p-4 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105`}
            style={{ width: "300px", height: "300px" }}
          >
            <h3 className="text-xl font-bold mb-2">{planet.name}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-semibold">Rotation:</span> {planet.rotation_period}
              </div>
              <div>
                <span className="font-semibold">Orbital:</span> {planet.orbital_period}
              </div>
              <div>
                <span className="font-semibold">Diameter:</span> {planet.diameter} km
              </div>
              <div>
                <span className="font-semibold">Climate:</span> {planet.climate}
              </div>
              <div>
                <span className="font-semibold">Gravity:</span> {planet.gravity}
              </div>
              <div>
                <span className="font-semibold">Terrain:</span> {planet.terrain}
              </div>
              <div>
                <span className="font-semibold">Water:</span> {planet.surface_water}%
              </div>
              <div>
                <span className="font-semibold">Population:</span> {planet.population}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
