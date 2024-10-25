"use client"
import StarWarsCharacters from "@/app/components/StarWarsCharacters";
import SWPlanets from "@/app/components/SWPlanets";


export default function charactersPage() {
    return (
        <div>
            <h1 className="text-center"> Star Wars Characters Page</h1>
            <StarWarsCharacters />
            <SWPlanets />
        </div>
    )
}