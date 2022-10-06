import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import currencies from "./slices/currenciesSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      currencies,
    },
  })

export const store = makeStore()

export const wrapper = createWrapper(makeStore)
