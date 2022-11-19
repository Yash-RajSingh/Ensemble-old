import {
  LandingMessage,
  LandingWrapper,
  LandingContainer,
  CollaborativeImage,
  MottoMessage,
  Highlight,
  GetStartedButton,
  Motto,
  SafetyMessage,
  LandingHeading,
  LandingFeaturesWrapper,
  BoardImage,
  LandingDisplayWrapper,
  Label,
  FeatureList,
  FeatureListItem,
} from "./landingElement";
import Collaborate from "../../assets/collaborate1.png";
import Planning from "../../assets/planning.png";
import Board from "../../assets/board.jpg";

const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingMessage>The new way to collaborate</LandingMessage>
        <LandingWrapper top={"2%"}>
          <div style={{ width: "60%" }}>
            <MottoMessage>
              Start Collaborating the better way. Collaborate, manage projects,
              and reach new productivity peaks. From high rises to the home
              office, the way your team works is unique. Accomplish it all with
              Ensemble.
            </MottoMessage>
            <Highlight>Join Ensemble Today!</Highlight>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
          <CollaborativeImage src={Collaborate} width={"35%"} style={{marginRight: "3%"}} />
        </LandingWrapper>

        <LandingFeaturesWrapper top={"12%"}>
          <LandingHeading>
            It's more than work. It's a way of working together.
          </LandingHeading>

          <LandingDisplayWrapper>
            <BoardImage src={Board} />
            <Label>A typical Ensemble workspace.</Label>
          </LandingDisplayWrapper>

          <LandingHeading style={{marginTop: "5%"}}>
            With Ensemble, start collaborating the new way with features like -
          </LandingHeading>
          <FeatureList>
            <FeatureListItem>
              Creating boards and managing work.
            </FeatureListItem>
            <FeatureListItem>
              Plan out your schedule ahead of time.
            </FeatureListItem>
            <FeatureListItem>Keep track of your tasks.</FeatureListItem>
            <FeatureListItem>Invite people to collaborate</FeatureListItem>
            <FeatureListItem>
              Assign tasks to the other members of your team.
            </FeatureListItem>
            <FeatureListItem>Monitor their progress</FeatureListItem>
          </FeatureList>
        </LandingFeaturesWrapper>

        <LandingWrapper top={"10%"}>
          <Motto>
            Working in a group has never been more easy. Turn group projects
            into fun, with Ensemble!
          </Motto>
          <CollaborativeImage src={Planning} />
        </LandingWrapper>
        <SafetyMessage>
          For safety concerns, please go through the privacy policy before
          joining
        </SafetyMessage>
      </LandingContainer>
    </>
  );
};

export default Landing;
