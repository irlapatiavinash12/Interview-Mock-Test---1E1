import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const ContentContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  padding: 15px;
  width:60%;
`

export const Interface = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  align-items: center;
  padding:10px;
`

export const InterfaceHeading = styled.h1`
color:#ffffff;
font-family:"Roboto";
text-align:center;`

export const InterfaceLogo = styled.img`
width: 100%;
height:400px;
`

export const InputSection = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #f8fafc;
`

export const OptionsList = styled.ul`
  list-style-type: none;
  display:flex;
  flex-direction:row;
  border:none;
  border-bottom:1px solid #f8fafc;
  padding-left:0px;
`

export const EachOption = styled.li`
list-style-type:none;
`

export const Button = styled.button`
border:none;
background-color:transparent;
color:${props => props.color};`

export const TextElement = styled.textarea`
border:none;
width:90%;
height:80%;
margin-left:10px;
background-color:transparent;
color:#ffffff;
padding-top:10px;
padding-left:10px;
font-style:${props => props.fontStyle};
font-weight:${props => props.fontWeight};
text-decoration:${props => props.textDecoration};`
