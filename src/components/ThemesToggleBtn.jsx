"use client";
import { useTheme } from 'next-themes';
import React from 'react';

const ThemesToggleBtn = () => {
      const { theme, setTheme } = useTheme();
    return (
        <div>
             <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      dark {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
        </div>
    );
};

export default ThemesToggleBtn;