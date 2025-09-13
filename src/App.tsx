import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Produto } from './types'
import { adicionarAoCarrinho, adicionarFavorito } from './slices/carrinhoSlice'
import { RootState } from './store'
import { useGetProdutosQuery } from './slices/productsApi'

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  function adicionarProdutoAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritarProduto(produto: Produto) {
    dispatch(adicionarFavorito(produto))
  }

  if (isLoading) return <div>Carregando produtos...</div>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} favoritos={favoritos} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarProduto}
          adicionarAoCarrinho={adicionarProdutoAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
