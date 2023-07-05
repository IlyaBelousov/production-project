import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}
export const useTheme = (): UseThemeResult => {

    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        const correctedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(correctedTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, correctedTheme)
    }

    return {
        theme,
        toggleTheme,
    }

}