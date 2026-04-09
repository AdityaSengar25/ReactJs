import { createContext, useContext } from "react";

    export const ThemeSwitcher=createContext({
        themeMode:'light',
        darkTheme: () => {},
        lightTheme: () => {}
    })

    export const ThemeProvider = ThemeSwitcher.Provider

    export default function useTheme(){
        return useContext(ThemeSwitcher)
    }