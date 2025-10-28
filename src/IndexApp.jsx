import NavApp from "../src/NAV/NavApp";
import "./Styles/IndexApp.css";
import { Outlet } from "react-router-dom";




const IndexApp =()=>{  //este es un tipo  de  funcion  flecha

    const user ="Andres"

    return(

        <>

        <NavApp/>


        <h1 className="saludo">Hola  mundo, bienvenido {user}</h1>
        <Outlet />

        <h1>

        </h1>

        <div></div>

        
        </>


    )
}

export default IndexApp;
