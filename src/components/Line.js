import styled, { css } from "styled-components"

const StyledLine = styled.div.attrs(() => ({
    primary: true,
}))`
    font-size: 24px;
    color: ${({color}) => color || "blue"};
    margin: 10px;
    ${({primary}) => primary && css`
        color: ${({color}) => color || "green"};
    `}
`

const Line = (props) => {
    return <StyledLine {...props}/>
}

export {
    Line,
}