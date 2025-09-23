import NavApp from "./NAV/NavApp";
import "./Stylees/IndexApp.css"



const IndexApp=()=>{

    const user="andres"

    return(

        <>

        <NavApp/>

        <body></body>
            <h1 className="saludo">Bienvenido {user}</h1>
        


        </>



    );


}

export default IndexApp;