import { Copyright, FooterHeader, FooterItem, FooterItemWrapper, FooterWrapper } from "./footerElements";
import {Link} from "react-router-dom"

const Style = {
    textDecoration: "none",
    color: "black"
}
const Footer = () => {
    return ( 
        <>
        <FooterWrapper id="Footer">
            <FooterHeader>Ensemble</FooterHeader>
            <FooterItemWrapper>
                <Link to="/" style={Style}> <FooterItem>Home</FooterItem></Link>
                <Link to="/about" style={Style} ><FooterItem>About</FooterItem></Link>
                <Link to="/contact" style={Style}><FooterItem>Contact Us</FooterItem></Link>
                <Link to="/" style={Style}><FooterItem>Privacy Policy</FooterItem></Link>
            </FooterItemWrapper>
            <Copyright>© Ensemble</Copyright>
        </FooterWrapper>
        </>
     );
}
 
export default Footer;