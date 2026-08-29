import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProjectCategory =
  | "All"
  | "Next.js"
  | "Full-Stack"
  | "Squarespace"
  | "Shopify"
  | "E-commerce";

interface UIState {
  activeFilter: ProjectCategory;
  commandPaletteOpen: boolean;
}

const initialState: UIState = {
  activeFilter: "All",
  commandPaletteOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<ProjectCategory>) => {
      state.activeFilter = action.payload;
    },
    setCommandPaletteOpen: (state, action: PayloadAction<boolean>) => {
      state.commandPaletteOpen = action.payload;
    },
    toggleCommandPalette: (state) => {
      state.commandPaletteOpen = !state.commandPaletteOpen;
    },
  },
});

export const { setActiveFilter, setCommandPaletteOpen, toggleCommandPalette } = uiSlice.actions;
export default uiSlice.reducer;
