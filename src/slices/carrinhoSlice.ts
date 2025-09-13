import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.find(p => p.id === action.payload.id)) {
        state.itens.push(action.payload)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(p => p.id !== action.payload)
    },
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      if (!state.favoritos.find(p => p.id === action.payload.id)) {
        state.favoritos.push(action.payload)
      }
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter(p => p.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, adicionarFavorito, removerFavorito } = carrinhoSlice.actions
export default carrinhoSlice.reducer
