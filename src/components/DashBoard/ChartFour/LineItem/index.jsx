import { Container } from "./styles"

export function LineItem({ data }) {
  return (
    <Container>
      <p>
        <span className="colocacao">
          {data.rank}º {data.nome}
        </span>
      </p>
      <span className="quantidade">R$ {data.valor_gasto}</span>
    </Container>
  )
}
