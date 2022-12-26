import { useContext ,useEffect,useRef} from "react";
import React from "react";
export const pageContext = React.createContext()
export const PageProvider = ({children})=>{
     const logo1ref = useRef();
     const logo2ref = useRef();
     const logo3ref = useRef();
     
    return <pageContext.Provider
    value={{
        logo1ref
    }}
    >
        {children}
    </pageContext.Provider>
}
export const usePageContext = ()=>{
    return useContext(pageContext)
}