import React, { useEffect, useRef } from "react"
//Custom Hook
import useWindowSize from "../../hooks/useWindowSize"
//Context
import { useGlobalStateContext } from "../../context/globalContext"
//Styled Components
import { Banner, Video, BannerTitle, Canvas, Headline } from "../../styles/homeStyles"

const HomeBanner = ({ onCursor }) => {

  const canvasRef = useRef(null);
  const size = useWindowSize();

  const { currentTheme } = useGlobalStateContext();

  const prepareCanvas = (canvasCtx, brushRadius) => {
    if (brushRadius < 50) { brushRadius = 50 }
    canvasCtx.globalCompositeOperation = 'source-over'
    canvasCtx.fillStyle = currentTheme === 'dark' ? "#000000" : "#FFFFFF"
    canvasCtx.fillRect(0, 0, size.width, size.height)
  }

  const detectLeftButton = (event) => {
    if ('buttons' in event) {
      return event.buttons === 1;
    } else if ('which' in event) {
      return event.which === 1;
    } else {
      return event.button === 1;
    }
  }
  const getBrushPos = (canvas, xRef, yRef) => {
    let canvasRect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvas.width),
      y: Math.floor((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvas.height)
    };
  }
  const drawDot = (canvasCtx, brushRadius, mouseX, mouseY) => {
    canvasCtx.beginPath();
    canvasCtx.lineJoin = 'round'
    canvasCtx.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
    canvasCtx.fillStyle = currentTheme === 'dark' ? "#000000" : "#FFFFFF"
    canvasCtx.globalCompositeOperation = "destination-out";
    canvasCtx.fill();
  }

  useEffect(() => {
    let canvas = canvasRef.current;
    let canvasCtx = canvas.getContext('2d');
    let brushRadius = (canvas.width / 100) * 5;
    prepareCanvas(canvasCtx, brushRadius);
    canvas.addEventListener("mousemove", (e) => {
      var brushPos = getBrushPos(canvas, e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(canvasCtx, brushRadius, brushPos.x, brushPos.y);
      }
    }, false);
    return () => canvas.removeEventListener("mousemove", (e) => {
      var brushPos = getBrushPos(canvas, e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(canvasCtx, brushRadius, brushPos.x, brushPos.y);
      }
    }, false);
  }, [currentTheme])

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video height="100%" width="100%" loop autoPlay muted src={require("../../assets/video/video.mp4")} />
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvasRef}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>DIG</Headline>
        <Headline variants={item}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
