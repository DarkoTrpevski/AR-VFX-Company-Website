import styled from "styled-components"
import { motion } from "framer-motion"

//Banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    margin-bottom: 10rem;
  }
`
export const Video = styled.div`
  height: 100%!important;
  width: 100%!important;
  overflow: hidden;
  video {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${props => props.theme.text};
  pointer-events: none;
  user-select: none;

  @media (min-width: 370px) {
    bottom: 2rem;
    left: 1rem;
  }
  @media (min-width: 1024px) {
    bottom: -120px;
    left: -18px;
  }
`

export const Headline = styled(motion.span)`
  display: block;
  position: relative;
  font-size: 5rem;
  font-weight: 900;
  line-height: 0.76;

  &:last-child {
    left: 50px;
  }
  
  @media (min-width: 1024px) {
    font-size: 23rem;
  }
`

//Content Section
export const HomeContentSection = styled(motion.div)`
  margin: 5rem 0;
  @media (min-width: 1024px) {
    margin-bottom: 200px;
  }
`
export const Content = styled(motion.h2)`
  font-size: 2.3rem;
  font-weight: 400;
  user-select: none;
  color: ${props => props.theme.text};

  @media (min-width: 1024px) {
    width: 53%;
    margin-left: 124px;
  }
`

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin: 2rem 0;
  @media (min-width: 1024px) {
    margin-bottom: 200px;
  }
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
  @media (min-width: 1024px) {
    width: 53%;
    margin-left: 124px;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
`

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`

//ABOUT SECTION

export const HomeAboutSection = styled(motion.div)`
  margin: 5rem 0;
  @media (min-width: 1024px) {
    margin-top: 10rem;
  }
`

export const AboutFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const About = styled.div`
  width: 100%;
  h2 {
    font-size: 2.3rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 2rem;
    color: ${props => props.theme.text};

  }
  p {
    font-size: 1rem;
    line-height: 1.6rem;
    margin: 0;
    margin-top: 2rem;
    color: ${props => props.theme.text};
  }
  @media (min-width: 768px) {
    h2, p {
      width: 100%;
    }
    p {
      max-width: 440px;
    }
  }
  @media (min-width: 1024px) {
    h2, p {
      width: 60%;
      margin-left: 124px;
    }
  }
`
export const Services = styled.div``

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 300;
  }
`