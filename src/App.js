// import { useState } from 'react';
// import axios from 'axios';
// import {Button,Form} from 'react-bootstrap';
//import weatherCard form './../weatherCard';

// let Home =()=>{
//   const [cityName,setCityName] =useState("");
//   const [data,setData] =useState([]);

//let mrNum =5---
//const [myNum,setMyNum]=useState(5);

//myNum=10;
//setMyNum(10);----

//  let submitHandler=async(e)=>{
//   e.preventDefault();

//   console.log("I am submit handlers function ");

//   try{      //   https://api.openweathermap.org/data/2.5/forecast?q=lahore&appid=8a8b2a9385954d22005b8fd5070498b1&units=metric
//     let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8a8b2a9385954d22005b8fd5070498b1&units=metric`)

//       console.log("response:",response);

//       setData(respone.data.list)

//   }catch(error) {
//     console.log("error in api call:", error);
//   }
//  }
// return (
//   <div>
//   <h1>Weather App Home</h1>
//   <form onSubmit={submitHandler}>
//   <Form.Group className="mb-3" controlId="exampleForm.
//   ControlInput1">
//   <Form.LabeL>CityName:</Form.LabeL>.Label>
//   <Form.Control
//    type="text"
//    required placeholder='enter your city name'
//    onChange={(e)=>{
//     //console.log(e.target.value);
//     setCityName(e.target.value);
//    }}

//   />
//   </Form.Group>

// <input---
// type="text"
// required placeholder='enter your city name'
//    onChange={(e)=>{
//     //console.log(e.target.value);
//     setCityName(e.target.value);
//    }}
//    />=--

// <Button type='submit'>Get Weather</Button>
// </form>

// </div>
// );
// }
// export default Home;

// function App() {  //openweathermap
//   https:api.openweathermap.org/data/3.0/onecall?&appid=8a8b2a9385954d22005b8fd5070498b1

//   return (

// <>

//     <Form.Control type="text" placeholder="Readonly input here..." readOnly />

// import { useState } from "react";mee
// import axios from "axios";
// import { Button, Form } from "react-bootstrap";
// //import weatherCard form 'weatherCard';

// let Home = () => {
//   const [cityName, setCityName] = useState("");
//   const [data, setData] = useState([]);
// };

// let submitHandler = async (e) => {
//   e.preventDefault();

//   console.log("I am submit handlers function ");

//   // function App() {
//   //   get.axios(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8a8b2a9385954d22005b8fd5070498b1&units=metric`)
//   try {
//     `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8a8b2a9385954d22005b8fd5070498b1&units=metric`;

//     console.log("response:", response);
//     setData(respone.data.list);
//   } catch (error) {
//     console.log("error in api call:", error);
//   }

//   return (
//     <>
//       <div>
//         <Form onSubmit={submitHandler}>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <h1>Weather</h1>
//             <Form.Label>
//               Enter City Name
//             </Form.Label>
//             <Form.Control
//               className="mb-3 "
//               type="email"
//               placeholder="enter your city name"
//               onChange={(e) => {
//                 //console.log(e.target.value);
//                 setCityName(e.target.value);
//               }}
//             />
//           </Form.Group>
//         </Form>
//         <Button variant="primary">Submit</Button>{" "}
//       </div>
//     </>
//   );
// };

// export default App;mee

import axios from "axios";
import { useState } from "react";
//import WeatherCard from "./../weatherCard";
import WeaTherCard from "./weatherCard";
import { Button, Form } from "react-bootstrap";

let Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);

  // let myNum = 5
  // const [myNum, setMyNum] = useState(5);

  // myNum = 10;
  // setMyNum(10);

  let submitHandler = async (e) => {
    e.preventDefault();

    console.log("I am submit handler function");

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8a8b2a9385954d22005b8fd5070498b1&units=metric`
      );

      console.log("response: ", response);

      setData(response.data.list);
    } catch (error) {
      console.log("error in api call: ", error);
    }
  };

  return (
    <div>
      <h1>Weather App Home</h1>

      <form onSubmit={submitHandler}>
        <Form.Group
          className="mb-5 mt-5 py-5"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="mb-4 mt-5">City Name:</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="enter your city name"
            onChange={(e) => {
              // console.log(e.target.value);
              setCityName(e.target.value);
            }}
          />
        </Form.Group>

        {/* <input
                    type="text"
                    required placeholder='enter your city name'
                    onChange={(e) => {
                        // console.log(e.target.value);
                        setCityName(e.target.value);
                    }}
                /> */}
        <Button type="submit">Get Weather</Button>
      </form>

      {
        // data.map((eachForcast, index) => (
        //     <div key={eachForcast.dt_txt}>

        //         <div> {eachForcast.dt_txt} </div>
        //         <h1> {eachForcast.main.temp} </h1>
        //         <div> {eachForcast.main.temp_min} - {eachForcast.main.temp_max} </div>
        //     </div>
        // ))
        //eachForcast we can use e alsoo..
        data.map((eachForcast, index) => (
          <WeaTherCard
            key={index}
            date={eachForcast.dt_txt}
            temp={eachForcast.main.temp}
            min={eachForcast.main.temp_min}
            max={eachForcast.main.temp_max}
          />
        ))
      }
    </div>
  );
};

export default Home;
