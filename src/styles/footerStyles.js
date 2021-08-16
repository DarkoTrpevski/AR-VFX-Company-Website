import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  width: 100%;
  margin: 5rem 0 2rem 0;
  @media (min-width: 1024px) {
    margin-top: 10rem;
  }
`
export const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: clamp(1rem, 1vw + 1rem, 1.5rem);

    /* @media (min-width: 1024px) {
      font-size: 1.5rem;
    } */

  @media (min-width: 1024px) {
    font-size: 1.5rem;


    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterContent = styled.div`
  color: #ea281e;
  font-weight: 600;
  line-height: 8px;

  p {
    margin: 0.5rem 0;
    line-height: 1;
  }


`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
