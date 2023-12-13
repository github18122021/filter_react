import { useEffect, useState } from "react";

// importing components

import Car from './components/Car/Car'

function App() {
  let [cars, setCars] = useState([]);
  let [startsWith, setStartsWith] = useState("undefined");

  useEffect(() => {
    let fetchData = async() => {
      try {
        let response = await fetch('http://localhost:5000/cars');
        if(!response.ok) {
          throw new Error("Network error");
        }
        let data = await response.json();
        // console.log(data);
        setCars(data);
      } catch(error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  function brandChange(e) {
    // console.log(e.target.value);
    setStartsWith(e.target.value);

  }
  return (
    <div className="App">
      <div className="component-container">
        {
          cars.length !== 0 ? <>{
            cars.map((car, index) => {
              return (<>
              <Car key = {index} car = {car} initiateWith = {startsWith} />
              </>)
            })
          }</> : <></>
        }
      {/* {
        cars.length !== 0 ? <>{
          startsWith !== "undefined" ? <>{
            cars.map((car) => {
              return (<>
                <Car car = {car} initiate = {startsWith}/>
                <div>run</div>
              </>)
            })
          }</> : <>{
            cars.map((car) => {
              return (<>
              <Car car = {car} initiate = "hello" />
              <div>hello</div>
              </>)
            })
          }</>
        }
        </> : <></>
      } */}
      </div>

      <section className="filter-section">

        <label htmlFor="brand">Brand</label>
        <input type="text" name="car-brand" id="brand" onChange={brandChange}/>
      </section>
    </div>
  );
}

export default App;
