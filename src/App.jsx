// import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import CoffeCard from "./Components/CoffeCard"
import { useState } from "react";


function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees);

  // const [coffees,setCoffes]= useState(loadedCoffees)
  return (
    <>
      <div className='m-20'>
        <h1 className='text-6xl text-center my-20 text-purple-600'>Total Coffee: {coffees.length}</h1>
        
    <Link to={'/addcoffees'}><button className="btn btn-accent my-10">Click for add coffee</button></Link>

        <div>
          {
            coffees.map(coffee => <CoffeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
