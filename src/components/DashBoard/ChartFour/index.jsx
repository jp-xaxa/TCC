import { useState } from "react"

import { FiArrowUp, FiArrowDown } from "react-icons/fi"
import { GrNotes } from "react-icons/gr"

import { IconButton } from "../../IconButton"
import { LineItem } from "./LineItem"

import { Container, List, Header, NoSpent } from "./styles"

export function ChartFour({ data }) {
  const [control, setControl] = useState(1)
  console.log(data)

  const totalPages = Math.ceil(data.length / 5)

  function goToPreviousItem() {
    setControl(control - 1)
  }

  function goToNextItem() {
    setControl(control + 1)
  }

  return (
    <Container>
      {data.length > 0 ? (
        <>
          <Header>
            <h3>Produtos mais comprados no mês</h3>

            {data.length > 5 && (
              <div>
                <IconButton
                  onClick={goToPreviousItem}
                  disabled={control === 1}
                  icon={FiArrowUp}
                />
                <IconButton
                  onClick={goToNextItem}
                  disabled={control === totalPages}
                  icon={FiArrowDown}
                />
              </div>
            )}
          </Header>

          <List>
            {data.slice((control - 1) * 5, control * 5).map((item, index) => (
              <LineItem key={String(index)} data={item} />
            ))}
          </List>
        </>
      ) : (
        <NoSpent>
          <GrNotes />
          <h1>Você não teve gasto esse mês!</h1>
          <p>Registre notas para você saber o quanto gastou.</p>
        </NoSpent>
      )}
    </Container>
  )
}
