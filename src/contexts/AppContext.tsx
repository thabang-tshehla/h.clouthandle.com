"use client"
import { User } from "@/types";
import { createContext, useState, ReactNode, useContext } from "react"


interface AppContextType {

    user: User | null;
    setUser: (value: User) => void;

}

const defaultContextValue: AppContextType = {

    user: null,
    setUser: () => { }

};

const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const userValue = {
        emailAddress: "thabang@yandex.com",
        name: "Thabang",
        domain: "tshehla.com"
    }
    const [user, setUser] = useState<User | null>(null);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {

    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
};