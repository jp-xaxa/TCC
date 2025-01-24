import { Container } from "./styles"

export function Bar({ data, heightMax, onMouseOver, onMouseOut, ...rest }) {
  const heightCalculation = Math.ceil((data.valor / heightMax) * 100).toFixed(0)

  return (
    <Container
      onMouseOver={(e) => onMouseOver(e, `R$ ${data.valor}`)}
      onMouseOut={onMouseOut}
      {...rest}
    >
      <div className="bar" style={{ height: `${heightCalculation}%` }}></div>
      <span>{data.nome}</span>
    </Container>
  )
}
