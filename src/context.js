import { useContext ,useEffect,useState,useRef} from "react";
import React from "react";
export const pageContext = React.createContext()

export const PageProvider = ({children})=>{
     const logo1ref = useRef();
     const [className, setclassName] = useState("");
    return <pageContext.Provider
    value={{
        logo1ref,
        className,setclassName
    }}
    >
        {children}
    </pageContext.Provider>
}
export const usePageContext = ()=>{
    return useContext(pageContext)
}