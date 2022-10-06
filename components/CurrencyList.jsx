import { useSelector } from "react-redux"
import CurrencyItem from "./CurrencyItem"

const CurrencyList = () => {
  const { currencies } = useSelector((state) => state.currencies)

  return (
    <ul>
      {currencies.map((currency) => (
        <CurrencyItem key={currency.code} {...currency} />
      ))}
    </ul>
  )
}

export default CurrencyList
