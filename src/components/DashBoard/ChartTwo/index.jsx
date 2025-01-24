import { GrNotes } from "react-icons/gr"

import { ChartCategory } from "./ChartCategory"

import { Container, NoData } from "./styles"

export function ChartTwo({ data, spent }) {
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <Container>
          {data.slice(0,4).map((item, index) => (
            <ChartCategory key={index} data={item} spent={spent} />
          ))}
        </Container>
      ) : (
        <NoData>
          <GrNotes />

          <h1>Você não fez compras esse mês</h1>

          <p>Registre suas notas para poder analisar seus gastos!</p>
        </NoData>
      )}
    </>
  )
}
