import styled, { css, keyframes } from "styled-components"

const rorateAnimation = keyframes`
0% {
    transform: rotateZ(0deg)
}
100% {
    transform: rotateZ(-360deg)
}
`

const StyledButton = styled.button.attrs(()=> ({
    outlined: true,
}))`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        animation: ${rorateAnimation} 1s infinite linear;
    }
    align-self: ${({align}) => align || "stretch"};

    ${({primary}) => primary && css`
        color: ${({color}) => color || "white"};
        background: ${({background}) => background || "green"};
    `}
    ${({outlined}) => outlined && css`
        color: ${({color}) => color || "white"};
        border: 1px solid ${({color}) => color || "white"};
        background: transparent;
    `}

`

const LargeButton = styled(StyledButton)`
    font-size: 32px;
`

const Button = (props) => {
    return <StyledButton {...props}/>
};

export {
    Button,
}