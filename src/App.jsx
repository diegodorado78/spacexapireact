import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { getAllLaunches } from "./services/launches.js";
import {Heading,Image,} from "@chakra-ui/react";
import {LaunchItem} from "./components/LaunchItem.jsx";

function App() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //both ways do the same.
    // getAllLaunches().then((launches)=>{
    //   return setLaunches(launches)
    // })
    // }, [])
    getAllLaunches().then(setLaunches);
    setLoading(false);
  }, []);
  return (
    <>
      <Image m="auto" width={320} src={logo} alt="spacex-logo" />
      <Heading p={0} m="auto" width={320} size="lg" textAlign="left" >Space X launches </Heading>
      {loading ? (
        <h3> Loading...</h3>
      ) : (
        <section >
          {launches.map((launch) => {
            return (
            //  <LaunchItem  key={launch.id} launch={launch} />
            //uso los rest parameters para evitar pasar cada prop
             <LaunchItem  key={launch.id} {...launch} />

            );
          })}
        </section>
      )}
    </>
  );
}

export default App;
