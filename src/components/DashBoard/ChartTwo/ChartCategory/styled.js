import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 1.5625rem;
  background: transparent;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-around;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > img {
    width: 3rem;
    height: 3rem;
  }

  > div {
    > p {
      font-size: 1rem;
    }

    > h3 {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.125rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > img {
      width: 2rem;
      height: 2rem;
    }

    > div {
      > p {
        font-size: 0.625rem;
      }

      > h3 {
        font-size: 0.857rem;
        line-height: 1rem;
      }
    }
  }
`

export const Donut = styled.div`
  display: grid;
  place-content: center;

  position: relative;

  > svg {
    border-radius: 50%;
    width: 6.5625rem;
    height: 6.5625rem;
    transform: rotate(
      -90deg
    ); /*Faz com o que o circulo inicia no top, se não ficava iniciando na direito no meio*/

    > circle {
      /*Propriedades para fazer sumir o circulo e assim conseguir animar*/
      stroke-dasharray: 330; /* 197 vezes pi(3,14) */
      stroke-dashoffset: 330; /* 197 vezes pi(3,14) */
      stroke-width: 15; /*circunferência do circulo*/
      fill: none; /*Circulo ser vazado, sem preenchimento*/
      transition: 0.5s;
    }

    /*Circulo de baixo*/
    .circleTotal {
      stroke-dashoffset: 0;
    }

    /*Circulo de cima*/
    .circleSpent {
      stroke-dashoffset: calc(
        330 - (330 * var(--percentage)) / 100
      ); /*Calculo para ajustar o tamanho do circulo*/

      stroke-linecap: round; /*Arredondar as pontas do circulo, mas não é funcional quando está a cima de 90%.*/

      animation: progress 2s ease-in-out;
    }

    /*Animação do circulo*/
    @keyframes progress {
      from {
        stroke-dashoffset: 471;
        stroke-dasharray: 471;
      }
    }
  }

  .legend {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    font-size: 0.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > svg {
      width: 5rem;
      height: 5rem;
    }

    .legend {
      font-size: 0.625rem;
    }
  }
`
