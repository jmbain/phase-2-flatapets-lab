import {useState} from "react"

function NewPetForm({addPet}) {

  const [formData, setFormData] = useState( {
    name: "",
    image: "",
    animal_type: "",
    fromPetShop: "true"
  })

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  

  function handleSubmit(event) {
    event.preventDefault()
    
    const newPet = {
      ...formData,
      fromPetShop: (formData.fromPetShop === "true" ? true : false)
    }

    // newPet.fromPetShop==="true" ? newPet.fromPetShop = true : newPet.fromPetShop = false

    // if(newPet.fromPetShop==="true") {
    //   newPet.fromPetShop = true
    // }
    // else if(newPet.fromPetShop==="false") {
    //   newPet.fromPetShop = false
    // }

    addPet(newPet)

    setFormData( {
      name: "",
      image: "",
      animal_type: "",
      fromPetShop: "true"
    })
  }

  
  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Pet name" />
        <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.animal_type} type="text" name="animal_type" placeholder="Animal type" />
        <select onChange={handleChange} value={formData.fromPetShop} name="fromPetShop">
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;