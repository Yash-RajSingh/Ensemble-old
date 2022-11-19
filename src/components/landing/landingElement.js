import styled from "styled-components";
import { HeaderButton } from "../header/headerElements";

export const LandingContainer = styled.div`
  margin-top: 4%;
`;
export const LandingWrapper = styled.div`
  margin-top: ${(props) => props.top || "1%"};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LandingMessage = styled.span`
  font-size: 3rem;
  color: var(--dark-blue);
  font-family: "Architects Daughter";
  -webkit-text-stroke: 1px rgba(0, 0, 0, 1);
  /* margin-left: 1%; */
  `;

export const CollaborativeImage = styled.img`
  width: ${(props) => props.width || "32%"};
  `;

export const MottoMessage = styled.p`
  width: 75%;
  font-size: 1.5rem;
  font-family: "Roboto Slab";
  font-weight: 600;
  margin-top: 5%;
  `;

export const Highlight = styled.p`
  font-size: 1.85rem;
  font-family: "Rajdhani";
  font-weight: 900;
  margin-top: 2%;
  `;

export const GetStartedButton = styled(HeaderButton)`
  padding: 0.5rem 1.5rem;
  margin: 5% 0 0 15%;
  `;

export const LandingHeading = styled(MottoMessage)`
  width: 90%;
  font-size: 2rem;
  margin-top: 2%;
  font-weight: 900;
  `
export const LandingFeaturesWrapper = styled.div`
  margin-top: ${(props) => props.top || "1%"};
  `

export const LandingDisplayWrapper = styled.div`
  text-align: center;
  `
export const BoardImage = styled.img`
  width: 80%;
  margin-top: 3%;
  filter: hue-rotate(90deg);
  `
export const Label = styled.p`
font-family: "Rajdhani";
margin-top: 1%;
  font-size: 1.25rem;
  font-weight: 900;
`
export const FeatureList = styled.ul`
  list-style-type: square;
  margin: 2% 0 0 4%;
`
export const FeatureListItem = styled.li`
  font-size: 1.35rem;
  font-family: 'Roboto Slab';
  font-weight: 900;
  margin-top: 0.5%;
`

export const Motto = styled(LandingMessage)`
  width: 55%;
  margin-left: 2%;
  `;

export const SafetyMessage = styled(Highlight)`
  text-align: center;
  font-family: 'Anton';
  color: transparent;
  -webkit-text-stroke: 0.11px #000000;
  margin-top: 5%;
  letter-spacing: 1px;
`;
