export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}
export type CarrinhoItem = Produto & { quantidade: number }
