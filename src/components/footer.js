import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial, FooterFlex } from "../styles/footerStyles"
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"
import useElementPosition from "../hooks/useElementPosition"


const Footer = ({ setHamburgerPosition, onCursor }) => {

  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)

  const facebookRef = useRef(null)
  const facebookPosition = useElementPosition(facebookRef)

  const vimeoRef = useRef(null)
  const vimeoPosition = useElementPosition(vimeoRef)



  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  }

  return (
    <FooterNav
      ref={footerRef} animate={animation} initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } },
        hidden: { opacity: 0, y: 72 }
      }}>
      <Container>
        <FooterFlex>
          <FooterContent>
            <p>902.315.1279</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Camburhill Ct Unit C</p>
            <p>Charlottetown, PE C1E 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              ref={instagramRef} href="/" target="_blank" onMouseLeave={onCursor}
              onMouseEnter={() => menuHover(instagramPosition.x)}>
              <Instagram />
            </a>
            <a
              ref={facebookRef} href="/" target="_blank" onMouseLeave={onCursor}
              onMouseEnter={() => menuHover(facebookPosition.x)}>
              <Facebook />
            </a>
            <a
              ref={vimeoRef} href="/" target="_blank" onMouseLeave={onCursor}
              onMouseEnter={() => menuHover(vimeoPosition.x)}>
              <Vimeo />
            </a>
          </FooterSocial>
        </FooterFlex>
      </Container>
    </FooterNav>
  )
}

export default Footer;