import CurrencyList from "../components/CurrencyList"
import Header from "../components/Header"
import { wrapper } from "../redux/store"
import { useDispatch } from "react-redux"
import { getCurrencies } from "../redux/slices/currenciesSlice"

const Home = ({ currencies }) => {
  const dispatch = useDispatch()
  dispatch(getCurrencies(currencies))
  return (
    <>
      <Header />
      <CurrencyList />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  )
  const data = await response.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  const { bpi } = await data
  const entries = Object.values(bpi)

  return {
    props: { currencies: entries },
  }
})

export default Home
