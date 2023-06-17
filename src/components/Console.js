import styled from "styled-components"
import { Flex } from "./Flex"
import { useState } from "react"
import { Line } from "./Line"
import { ActiveLine } from "./ActiveLine"

const StyledConsole = styled.div`
    width: 100%;
    height: 70vh;
    background-color: black;
    border: none;
    color: ${(props) => props.color || props.theme.colors.primary};
`

const getEnteredLines = (pathLine, lines) => {
    if (lines.length == 0) {
        return
    } else {
        return lines.map((line, index) =>
        <Flex key={`${line}${index}`}>
            <Line>{pathLine}{line}</Line>
        </Flex>
    )
    }
    
}

const Console = () => {
    const pathLine = "C/users/demo-console: "
    const [lines, setLines] = useState([]);
    const [value, setValue] = useState('');

    function onKeyPress(e) {
        if (e.keyCode === 13) {
            setLines([...lines, e.target.value]);
            e.target.value = '';
        } else {
            setValue(e.target.value);
        }
    }

    return (
        <StyledConsole>
            {getEnteredLines(pathLine, lines)}
            <ActiveLine pathLine={pathLine} onKeyPress={onKeyPress} value={value}></ActiveLine>
        </StyledConsole>

    )
}

export {
    Console,
}