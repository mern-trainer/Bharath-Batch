import { createContext, useContext } from "react";

const SampleContext = createContext()

export const SampleProvider = ({ children }) => {
    return <SampleContext.Provider value={"Hey"}>
        {children}
    </SampleContext.Provider>
}

export const useSample = () => {
    return useContext(SampleContext)
}