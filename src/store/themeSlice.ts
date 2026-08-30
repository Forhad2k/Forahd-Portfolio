import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface ThemeState {
  mode: Theme;
  hydrated: boolean;
}

const initialState: ThemeState = {
  mode: "dark",
  hydrated: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
      state.hydrated = true;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("forhad-theme", action.payload);
        document.documentElement.classList.toggle("dark", action.payload === "dark");
      }
    },
    toggleTheme: (state) => {
      const next: Theme = state.mode === "dark" ? "light" : "dark";
      state.mode = next;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("forhad-theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
      }
    },
    hydrateTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
      state.hydrated = true;
    },
  },
});

export const { setTheme, toggleTheme, hydrateTheme } = themeSlice.actions;
export default themeSlice.reducer;
