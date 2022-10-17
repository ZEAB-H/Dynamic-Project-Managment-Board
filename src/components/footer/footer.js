import React from "react";
import styled from "styled-components";


const FooterWrapper=styled.div`
 align-item: center;
 color:blue;

 a{
    color:brown;
    text-decoration:none;
    target="_blank";

 }
`
function Footer(){
    return(<FooterWrapper>
        <span>made with &hearts; by <a href="https://dev-abel.netlify.app/">Abel Hailemichael</a></span>
    </FooterWrapper>)
}

export default Footer;