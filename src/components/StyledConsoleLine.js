import styled from "styled-components"
import { Line } from "./Line"

const StyledConsoleLine = styled.div`
    background-color: inherit;
    border: none;
    color: inherit;
    @media ${(props) => props.theme.media.phone} {
        border: 1px solid red;
    }
    @media ${(props) => props.theme.media.tablet} {
        border: 1px solid green;
    }
    text-align: justify;
`

const ConsoleLine = ({ pathLine, value, children }) => {
    return (
        <StyledConsoleLine>
            <Line>{pathLine}{value}{children}</Line>
        </StyledConsoleLine>
    )

}

export {
    ConsoleLine,
}