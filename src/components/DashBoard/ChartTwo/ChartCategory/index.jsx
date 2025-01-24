import { Container, Info, Donut } from "./styled"
import { categoryIcons } from "../../../../utils/categoryIcons"

export function ChartCategory({ data, spent }) {
  const icon = categoryIcons[data.categoria]?.icon
  const category = categoryIcons[data.categoria]?.name

  const percentage = ((data.total_gasto / spent) * 100).toFixed(2)

  return (
    <Container>
      <Info>
        <img src={icon} alt={`Icone de ${category}`} />

        <div>
          <p>{category}</p>
          <h3>
            R$ <span>{data.total_gasto}</span>
          </h3>
        </div>
      </Info>

      <Donut style={{ "--percentage": percentage }}>
        <svg viewBox="0 0 105 105">
          {/*Circulo de baixo (Total) */}
          <circle
            cx="50%"
            cy="50%"
            r="45"
            opacity="0.2"
            stroke="#4a4556"
            className="circleTotal"
          />

          <circle
            cx="50%"
            cy="50%"
            r="45"
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

        <div className="legend">
          <p>{percentage}%</p>
        </div>
      </Donut>
    </Container>
  )
}
