import styled from "styled-components"

const StyledTitle = styled.h1`
    color: ${({color}) => color || "white"};
`

const Title = (props) => {
    return (
        <StyledTitle {...props}/>
    )
}

export {
    Title,
}