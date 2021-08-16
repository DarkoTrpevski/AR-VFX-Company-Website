import styled, { css } from "styled-components"

export const Container = styled.div`
  width: auto;
  height: 100%;
  max-width: 100%;
  position: relative;
  flex-grow: 1;
  padding: 0 8px;
  margin: 0;


  @media(min-width: 480px) {
    margin: 0 auto;
    padding: 0 16px;
  }

  @media(min-width: 768px) {
    margin: 0 auto;
    padding: 0 32px;
  }
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  @media (min-width: 1920px) {
    max-width: 80%;
  }

  ${props => props.fluid && css`
    padding: 0;
    margin: 0;
    background: red;
    max-width: 100% !important;
  `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props => props.spaceBetween && css`
    justify-content: space-between;
  `};
  ${props => props.flexEnd && css`
    justify-content: flex-end;
  `};
  ${props => props.alignTop && css`
    align-items: flex-start;
  `};
  ${props => props.noHeight && css`
    height: 0;
  `};
`

export const Cursor = styled.div`
  display: none;
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  @media(min-width: 768px) {
    display: block;
  }
  &.pointer {
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.text} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }

  &.nav-open,
  &.locked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`
