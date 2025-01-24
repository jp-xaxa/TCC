import { Spin } from "../Spin"
import { Container } from "./styles"

export function Button({
  title,
  loading = false,
  icon: Icon,
  classSpin,
  ...rest
}) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}

      <button disabled={loading}>{loading ? "Carregando" : title}</button>

      {loading && <Spin className={classSpin} />}
    </Container>
  )
}
