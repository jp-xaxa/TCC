import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  max-width: 12.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  padding: 0.75rem 1.375rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  transition: 0.4s;

  > svg {
    font-size: 1.125rem;
  }

  > button {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.125rem;
    white-space: nowrap;
    cursor: pointer;
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.YELLOW_400};
    box-shadow: 0 0 0.125rem v ${({ theme }) => theme.COLORS.YELLOW_400};
    filter: saturate(120%);
    transform: scale(1.01);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 9.375rem;

    gap: 0.5rem;

    padding: 0.75rem;

    > svg {
      font-size: 0.75rem;
    }

    > button {
      font-size: 0.75rem;
    }
  }
`
