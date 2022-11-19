import styled from "styled-components";
import { FeatureList, FeatureListItem } from "../landing/landingElement";

export const AboutContainer = styled.div`
  margin-top: 0;
`;
export const Heading = styled.h2`
  font-size: 3rem;
  margin-top: 5%;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
`;
export const AboutWrapper = styled.div`
  margin-top: 1%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction || "row"};
`;
export const AboutSubHeading = styled.h1`
  font-size: 1.85rem;
  font-family: "Rajdhani";
  font-weight: 900;
  margin-top: 3%;
`;
export const AboutImage = styled.img`
  width: ${(props) => props.width || "30%"};
`;

export const SubAboutWrapper = styled.div`
  width: 60%;
`;
export const AboutList = styled(FeatureList)``;

export const AboutListItem = styled(FeatureListItem)`
  font-size: 1.25rem;
`;
export const AboutImageWrapper = styled.div`
  text-align: center;
  width: 50%;
`;

export const AboutLabel = styled.h4`
  text-align: center;
  font-size: ${(props) => props.size || "1.5rem"};
  font-weight: 900;
  font-family: "Rajdhani";
`;
