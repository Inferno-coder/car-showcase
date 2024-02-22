import { CardCard } from "@/components/CardCard";
import { CustomFilter } from "@/components/CustomFilter";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars=await fetchCars()
  const isDataEmpty = !Array.isArray (allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className="m-12 padding-x padding-y" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar/>
        <div className="home__filer-container flex ">
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
      </div>
      {
        !isDataEmpty?(
          <section>
            <div className="home__cars-wrapper">
            {
              allCars.map((car)=>(
                  <CardCard  car={car}/>
              ))
            }
            </div>
          </section>
        ):
        (
          <div className="home__error-contianer">
            <h2 className="text-black text-7xl my-10 font-bold">Oops no cars are Available</h2>
          </div>
        )
      }
     </div>
    </main>
  );
}
