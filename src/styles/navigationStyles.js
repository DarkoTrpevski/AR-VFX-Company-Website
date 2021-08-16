import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  width: 100%;
  top: 3%;
  left: 0;
  position: relative;
  z-index: 99;
  h2 {
    color: ${props => props.theme.background};
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px 0;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    z-index: 99999;
    li {
      width: 100%;
      list-style: none;
      font-size: 1.5rem;
      line-height: 1;
      text-transform: uppercase;
      margin: 1rem 0;
      line-height: 1;
      letter-spacing: 0.2rem;

      @media (min-width: 640px) {
        font-weight: 900;
        font-size: 3rem;
        margin: 2rem 0;
        height: 96px;
        line-height: 96px;
      }
      .link {
        width: 100%;
        color: ${props => props.theme.background};
        display: flex;
        align-items: center;

        .arrow-wrapper {
          display: flex;
          align-items: center;
          .arrow {
            height: 76px;
            margin-right: 8px;
            display: none;

            @media (min-width: 768px) {
              display: block;
            }
          }
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }
`

export const NavVideos = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    display: block;
  }
`
