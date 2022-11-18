import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

// layout 

export const Section = styled.section`
    padding: 1em 0;
`
export const DarkButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 1rem 0;
  width: 11rem; 
  background: #000;
  color: white;
  border: 2px solid white;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  margin-right: 0.5rem;
`

export const LightButton = styled(DarkButton)`
  background: white;
  color: #000; 
  border: 1px solid  #000; 
`

export const BoostrapButton = styled(Button)`
    margin-right: 1em;
    width: 12%;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    color: white;
    &:hover {
        background-color: ${props => props.color};
        border: 1px solid ${props => props.color}; 
        color: white;
    }
    ${props => {
        if (props.outlined) {
            const clr = props.color;
            return `
                color: ${props.color}!important;
                background-color: white;
                border: 1px solid ${props.color};
            `
        }
        if (props.rounded) {
            return `
                border-radius : 20px;
            `
        }
    }}
`

export const Turquoise = styled(BoostrapButton)`
    background-color: #1abc9c;
    border: 1px solid #1abc9c;
    &:hover {
        background-color: #16a085;
        border: 1px solid #16a085;
    }
    ${props => {
        if (props.outlined) {
            return `
                background-color: white;
                border: 1px solid #16a085;
                color: #16a085;
            `
        }
    }}
`

export const River = styled(BoostrapButton)`
    background-color: #3498db
    border: 1px solid #3498db
    &:hover {
        background-color: #2980b9;
        border: 1px solid #2980b9;
    }
    ${props => {
        if (props.outlined) {
            return `
                background-color: white;
                border: 1px solid #3498db;
                color: #3498db;
            `
        }
    }}
`

export const Amethyste = styled(BoostrapButton)`
    background-color: #9b59b6;
    border: 1px solid #9b59b6;
    &:hover {
        background-color: #8e44ad;
        border: 1px solid #8e44ad;
    }
    ${props => {
        if (props.outlined) {
            return `
                background-color: white;
                border: 1px solid #9b59b6;
                color: #9b59b6;
            `
        }
    }}
`
export const _BootstrapBadge = styled(Badge)` 
    margin-right: 1em;
    ${props => {
        if (props.rounded) {
            return `border-radius: 20px`;
        }
    }}
`
export const BootstrapBadge = styled(_BootstrapBadge)`
    ${props => {
        if (props.variant === "turquoise") {
            return `background: #1abc9c!important`;
        }
        if (props.variant === "river") {
            return `background: #3498db!important`;
        }
        if (props.variant === "carrot") {
            return `background: #e67e22!important`;
        }
    }}
`
