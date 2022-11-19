import {
  AboutContainer,
  AboutImage,
  AboutLabel,
  AboutList,
  AboutListItem,
  AboutSubHeading,
  AboutWrapper,
  Heading,
  SubAboutWrapper,
  AboutImageWrapper,
} from "./aboutElements";
import Group from "../../assets/group.png";
import Salesman from "../../assets/salesman.png";
import Previous from "../../assets/precious.gif";
import Database from "../../assets/db.png";
const About = () => {
  return (
    <>
      <AboutContainer>
        <Heading>Our Goal</Heading>
        <AboutWrapper>
          <SubAboutWrapper style={{ width: "50%" }}>
            <AboutLabel
              style={{ marginTop: "4%", textAlign: "left" }}
              size={"1.75rem"}
            >
              At Ensemble, we aim to make the work from home experience great
              when working on group projects.
            </AboutLabel>
            <AboutListItem style={{ listStyleType: "none", marginTop: "4%" }}>
              Work from home is not only a necessity but has also become a
              trend. Are you ready to keep up with the competition? Well now you
              are!
              <br /> With Ensemble We're constantly working to improve our
              services and make your experience better.
            </AboutListItem>
          </SubAboutWrapper>
          <AboutImage src={Group} width={"28%"} style={{marginRight: "3%"}} />
        </AboutWrapper>
        <Heading>Why choose Ensemble?</Heading>
        <AboutWrapper direction={"row-reverse"}>
          <SubAboutWrapper>
            <AboutSubHeading>
              Well, where else are you going to find features like these for
              absolutely free:-
            </AboutSubHeading>
            <AboutList>
              <AboutListItem>Create unlimited workspaces.</AboutListItem>
              <AboutListItem>
                Insert unlimited task planner lists in these workspaces.
              </AboutListItem>
              <AboutListItem>Invite people to work with.</AboutListItem>
              <AboutListItem>Share boards with others.</AboutListItem>
              <AboutListItem>
                Monitor the progress of your projects.
              </AboutListItem>
              <AboutListItem style={{ listStyleType: "none" }}>
                and more amazing features are on their way.......
              </AboutListItem>
            </AboutList>
            <AboutSubHeading>What to expect in the next patch</AboutSubHeading>
            <AboutList>
              <AboutListItem style={{ listStyleType: "none" }}>
                We're planning to bring you more incredible features like:-
              </AboutListItem>
              <AboutListItem>Email and text reminders.</AboutListItem>
              <AboutListItem>Sign up using existing accounts.</AboutListItem>
              <AboutListItem>Security fixes.</AboutListItem>
              <AboutListItem style={{ listStyleType: "none" }}>
                We value your opinion and your comfort is our priority. If you
                want us to include any special feature, just let us now here.
              </AboutListItem>
            </AboutList>
          </SubAboutWrapper>
          <AboutImage src={Salesman} />
        </AboutWrapper>
        <Heading>Privacy Policy</Heading>
        <AboutListItem style={{ listStyleType: "none" }}>
          Our team has put in great work to design and develop the system
          architecture that brings you Ensemble. However, there are still a few
          speed bumps to get through. We store your data on our centralised
          secure database systems, but for security reasons we advice you that
          avoid storing sensitive private information in your workspaces.
        </AboutListItem>
        <AboutLabel style={{ marginTop: "4%" }} size={"1.75rem"}>
          Please follow our instructions or else hackers will go.....
        </AboutLabel>
        <AboutWrapper
          style={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <AboutImageWrapper>
            <AboutImage src={Previous} width={"60%"} />
            <AboutLabel>Your data</AboutLabel>
          </AboutImageWrapper>
          <AboutImageWrapper>
            <AboutImage src={Database} width={"20%"} />
            <AboutLabel>Your data</AboutLabel>
          </AboutImageWrapper>
        </AboutWrapper>
        <AboutListItem style={{ listStyleType: "none", marginTop: "4%" }}>
          Of course, the fix for this is already on its way in our next patch.
          Until then, hang tight, sit back, relax and{" "}
          <span style={{ fontFamily: "Architects Daughter" }}>
            Keep Collaborating.
          </span>
        </AboutListItem>
      </AboutContainer>
    </>
  );
};

export default About;
