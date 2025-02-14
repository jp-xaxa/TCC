import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

import { GrNotes } from "react-icons/gr"
import { FiAlertCircle } from "react-icons/fi"

import { Button } from "../../Button"

import { Container, Chart, Donut, Legend, NoSpent, NoInfo } from "./styles"

export function ChartOne({ spent }) {
  const monthlyLimit = 1150

  const tooltipRef = useRef(null)

  const navigate = useNavigate()

  function handleProfile() {
    navigate("/profile")
  }

  const handleMouseOver = (event, content) => {
    const tooltip = tooltipRef.current
    if (tooltip) {
      tooltip.innerHTML = content
      tooltip.classList.add("active")

      const moveTooltip = (e) => {
        tooltip.style.left = `${e.clientX}px`
        tooltip.style.top = `${e.clientY - 60}px`
      }

      document.addEventListener("mousemove", moveTooltip)

      tooltip.moveTooltip = moveTooltip
    }
  }

  const handleMouseOut = () => {
    const tooltip = tooltipRef.current
    if (tooltip) {
      tooltip.classList.remove("active")
      tooltip.innerHTML = ""

      document.removeEventListener("mousemove", tooltip.moveTooltip)
      delete tooltip.moveTooltip
    }
  }

  const percentage = ((spent / monthlyLimit) * 100).toFixed(2)
  const reachLimit = (monthlyLimit - spent).toFixed(2)

  if (monthlyLimit === 0) {
    return (
      <Container>
        <Chart>
          <NoInfo>
            <FiAlertCircle />

            <p>
              Você não salvo qual é o seu limite de gasto por mês no seu perfil.
              Acesse o seu perfile e salve para utilziar o gráfico.
            </p>

            <Button title="Acessar perfil" onClick={handleProfile} />
          </NoInfo>
        </Chart>
      </Container>
    )
  } else if (spent === 0) {
    return (
      <Container>
        <Chart>
          <NoSpent>
            <GrNotes />
            <h1>Você não teve gasto esse mês!</h1>
            <p>Registre notas para você saber o quanto gastou.</p>
          </NoSpent>
        </Chart>
      </Container>
    )
  } else if (spent > monthlyLimit) {
    return (
      <Container>
        <Chart>
          <h3>Mês atual</h3>

          <Donut style={{ "--percentage": percentage }}>
            <svg viewBox="0 0 185 185">
              {/* Circulo de baixo (Total) */}
              <circle
                cx="50%"
                cy="50%"
                r="75"
                opacity="1"
                stroke="#FF002E"
                className="circleLimit"
              />
            </svg>

            <div className="percentage">
              <h3>Gasto</h3>
              <p>{percentage}%</p>
            </div>
          </Donut>

          <Legend>
            <div className="item">
              <div className="circulo1"></div>
              <span>Limite</span>
              <span>R$ {monthlyLimit}</span>
            </div>
            <div className="item">
              <div className="circulo3"></div>
              <span>Gasto</span>
              <span>R$ {spent}</span>
            </div>
          </Legend>
        </Chart>
      </Container>
    )
  } else {
    return (
      <Container>
        <Chart>
          <h3>Mês atual</h3>

          <div className="tooltip" ref={tooltipRef}></div>

          <Donut style={{ "--percentage": percentage }}>
            <svg viewBox="0 0 185 185">
              {/* Circulo de baixo (Total) */}
              <circle
                cx="50%"
                cy="50%"
                r="75"
                opacity="0.2"
                stroke="#4a4556"
                className="circleTotal"
                onMouseOver={(e) => handleMouseOver(e, `R$ ${reachLimit}`)}
                onMouseOut={handleMouseOut}
              />

              <circle
                cx="50%"
                cy="50%"
                r="75"
                stroke="url(#paint0_linear_217_2)"
                className="circleSpent"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_217_2"
                  x1="1.97421e-07"
                  y1="82"
                  x2="154"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#595437" />
                  <stop offset="1" stopColor="#F2CB05" />
                </linearGradient>
              </defs>
            </svg>

            <div className="percentage">
              <h3>Gasto</h3>
              <p>{percentage}%</p>
            </div>
          </Donut>

          <Legend>
            <div className="item">
              <div className="circulo1"></div>
              <span>Limite</span>
              <span>R$ {monthlyLimit}</span>
            </div>
            <div className="item">
              <div className="circulo2"></div>
              <span>Gasto</span>
              <span>R$ {spent}</span>
            </div>
          </Legend>
        </Chart>
      </Container>
    )
  }
}
