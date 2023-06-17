import styled from "styled-components";

const StyledConsoleTextarea = styled.textarea`
    position: relative;
    margin-bottom: -8px;
    height: 28px;
    width: auto;
    background-color: black;
    font-size: 24px;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
    color: ${({ color }) => color || "white"};
    line-height: 24px;
`

const ConsoleTextarea = ({color, onKeyPress}) => {
    return <StyledConsoleTextarea color={color} onKeyUp ={(e) => onKeyPress(e)}></StyledConsoleTextarea>
}

export {
    ConsoleTextarea,
}