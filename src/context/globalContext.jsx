import { createContext, useState } from "react"

export const globalContext = createContext()

const GlobalProvider = ({children}) => {
    const [user,setUser]=useState()
    return <globalContext.Provider value={{user,setUser}}>
        {children}
    </globalContext.Provider>
}

export default GlobalProvider