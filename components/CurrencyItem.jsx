const CurrencyItem = (props) => {
  const { code, rate_float } = props
  return (
    <li>
      <strong>{code}:</strong> {rate_float}
    </li>
  )
}

export default CurrencyItem
