import { Fragment } from "react/jsx-runtime"

import "./styles/global.css"
import "./style/theme.css"
import { Heading } from "./components/Heading"

export function App(){
    return(
        <Fragment>
        <Heading/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magni quas, et officia consectetur deserunt impedit officiis cum culpa 
                non. Adipisci aut doloremque laborum nemo, voluptate porro cupiditate 
                distinctio aliquam debitis.
            </p>   
        </Fragment>
    )
}
    
 

