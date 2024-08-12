import Pet from "./Pet";
import {useState} from "react"


function PetList({pets}){
    // console.log(pets)
    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}  />
    })
    
    return (
        <ul className="pet-list">
            {petComponents}
        </ul>
    );
}

export default PetList;