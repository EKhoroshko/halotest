import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "allProducts",
  async () => {
    return await fetch("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
      .then((response) => response.json())
  }
)