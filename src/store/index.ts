import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../slices/carrinhoSlice'
import { productsApi } from '../slices/productsApi'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

// Tipos para usar no useSelector e useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
