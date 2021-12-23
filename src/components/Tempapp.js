import React, {useEffect, useState} from "react";
import "./css/style.css"

const Tempapp = () =>{

const [city, setCity] = useState("");
const [search, setsearch] = useState("mumbai");

useEffect(() =>{
    const fetchApi = async () =>{
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}appid={29deae7ec3d03fb1e76cd38b4020fde2}`
        const response = await fetch(url);        
        const resJson = response.json();
        // console.log(resJson);
        setCity(resJson);
    };

    fetchApi();
})

    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input
                        type="search"
                        className="inputFeild"
                        onChange={(event)=>{
                        }}/>
                </div>
            

                <div className="info">
                    <h2 className="location">
                    <i className="fa-solid fa-street-view">
                        </i>{search}
                    </h2>

                    <h1 className="temp">
                    5.25 Cel
                    </h1>
                    <h3 className="tempmin_max"> Min : 5.25 Cel | Max : 5.25 Cel </h3>
                </div>

                <div className="wawe -one"></div>
                <div className="wawe -two"></div>
                <div className="wawe -three"></div>
            </div>
        </>
    )
}

export default Tempapp;




// import React, { useState, useEffect } from "react";
// import Weathercard from "./weathercard";
// // import "./style.css";

// const Tempapp = () => {
//   const [searchValue, setSearchValue] = useState("pune");
//   const [tempInfo, setTempInfo] = useState({});

//   const getWeatherInfo = async () => {
//     try {
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=rajkot&units=matric&appid={29deae7ec3d03fb1e76cd38b4020fde2}`;

//       let res = await fetch(url);
//       let data = await res.json();

//       const { temp, humidity, pressure } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { country, sunset } = data.sys;

//       const myNewWeatherInfo = {
//         temp,
//         humidity,
//         pressure,
//         weathermood,
//         name,
//         speed,
//         country,
//         sunset,
//       };

//       setTempInfo(myNewWeatherInfo);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getWeatherInfo();
//   }, []);

//   return (
//     <>
//       <div className="wrap">
//         <div className="search">
//           <input
//             type="search"
//             placeholder="search..."
//             autoFocus
//             id="search"
//             className="searchTerm"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />

//           <button
//             className="searchButton"
//             type="button"
//             onClick={getWeatherInfo}>
//             Search
//           </button>
//         </div>
//       </div>

//       {/* our temp card  */}
//       <Weathercard {...tempInfo} />
//     </>
//   );
// };

// export default Tempapp;







