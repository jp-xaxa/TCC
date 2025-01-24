import { useState } from "react"
import data from "../../data/data.json"

import backgroundImg from "../../assets/illustration-pages/illustration-page-dashboard.png"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { ChartOne } from "../../components/DashBoard/ChartOne"
import { ChartTwo } from "../../components/DashBoard/ChartTwo"
import { ChartThree } from "../../components/DashBoard/ChartThree"
import { ChartFour } from "../../components/DashBoard/ChartFour"
import { NoData } from "../../components/NoData"

import { Container, DashBoard } from "./styles"

export function Dashboard() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <Content title="Dashboard" onOpenMenu={() => setMenuIsOpen(true)}>
        {Object.keys(data).length > 0 ? (
          <DashBoard>
            <ChartOne spent={data.gasto_mes_atual} />
            <ChartTwo
              data={data.gasto_por_categoria}
              spent={data.gasto_mes_atual}
            />
            <ChartThree
              data={data.gasto_no_ano.mes_do_ano}
              monthWithMostSpent={data.gasto_no_ano.mes_maior_gasto}
              monthWithLeastSpent={data.gasto_no_ano.mes_menor_gasto}
              averageSpent={data.gasto_no_ano.media_gasto_ano}
            />
            <ChartFour data={data.produtos_mais_comprados} />
          </DashBoard>
        ) : (
          <DashBoard>
            <NoData
              title="Nenhuma dado para exibir!"
              phrase="Você não possui dados de notas fiscais cadastrados no sistema, portanto não há informações disponíveis para o Dashboard. Registre notas fiscais!"
              url={backgroundImg}
              className="dashboard"
            />
          </DashBoard>
        )}
      </Content>
    </Container>
  )
}
