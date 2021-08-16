import React, { useState } from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Flex } from "../styles/globalStyles";
import { Nav, NavHeader, NavList, NavFooter, NavVideos, CloseNav } from "../styles/navigationStyles";
import { FooterContent, FooterSocial } from "../styles/footerStyles";
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons";
import styled from "styled-components";

const navRoutes = [
  { id: 0, title: "not humble", path: "/not-humble", video: "featured-video.mp4" },
  { id: 1, title: "bleeping easy", path: "/bleeping-easy", video: "easy.mp4" },
  { id: 2, title: "make it zero", path: "/make-it-zero", video: "make-it-zero.mp4" },
  { id: 3, title: "it takes an island", path: "/it-takes-an-island", video: "it-takes-an-island.mp4" },
  { id: 4, title: "50 beaches", path: "/50-beaches", video: "50-beaches.mp4" },
]

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  @media(min-width: 768px) {
    flex-direction: column;
  }
`

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {

  const [revealVideo, setRevealVideo] = useState({ show: false, video: "featured-video.mp4", key: "0", })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }} exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }} transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
            <NavHeader>
              <Container>
                <Flex spaceBetween noHeight>
                  <h2 to="/">Projects</h2>
                  <CloseNav onClick={() => setToggleMenu(!toggleMenu)} onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor}>
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </Container>
            </NavHeader>
            <Container>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id} onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor}
                      onHoverStart={() => setRevealVideo({ show: true, video: route.video, key: route.id, })}
                      onHoverEnd={() => setRevealVideo({ show: false, video: route.video, key: route.id, })}>
                      <Link to={`/projects${route.path}`} className="link">
                        <motion.div
                          initial={{ x: 0 }} className="arrow-wrapper"
                          whileHover={{ x: -40, transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] } }}>
                          <span className="arrow">
                            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                              <path
                                fill="#000" fillRule="evenodd"
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"></path>
                            </motion.svg>
                          </span>
                          <span>{route.title}</span>
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>

              <NavFooter>
                <Container>
                  <FlexContainer className="FlexContainer">
                    <ContentWrapper className="ContentWrapper">
                      <FooterContent>
                        <p>info@furrow.studio</p>
                      </FooterContent>
                      <FooterContent wider>
                        <p>902.315.1279</p>
                      </FooterContent>
                    </ContentWrapper>
                    <FooterSocial className="FooterSocial">
                      <a onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} href="/" target="_blank">
                        <Instagram />
                      </a>
                      <a onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} href="/" target="_blank">
                        <Facebook />
                      </a>
                      <a onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} href="/" target="_blank">
                        <Vimeo />
                      </a>
                    </FooterSocial>
                  </FlexContainer>
                </Container>
              </NavFooter>

              <NavVideos>
                <motion.div animate={{ width: revealVideo.show ? 0 : "100%" }} className="reveal"
                ></motion.div>
                <motion.div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key} src={require(`../assets/video/${revealVideo.video}`)}
                      loop autoPlay muted initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: "easeInOut" }}></motion.video>
                  </AnimatePresence>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation;