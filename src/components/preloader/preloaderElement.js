import styled, { keyframes } from "styled-components";

export const PreloaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
`

export const Lines = styled.svg`
  height: 100px;
  width: 100px;
`
const Anime = keyframes`
to{
  stroke-dashoffset:  -136;
}
`
export const Poly = styled.polygon`
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray:  17;
  animation: ${Anime} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  fill: transparent;
`
