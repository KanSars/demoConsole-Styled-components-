import { Flex } from "./Flex"
import { ConsoleLine } from "./StyledConsoleLine"
import { ConsoleTextarea } from "./ConsoleTextarea"

const ActiveLine = ({pathLine, onKeyPress}) => {
    return (
        <Flex> 
            <ConsoleLine>
                {pathLine}
                <ConsoleTextarea color="green" onKeyPress ={onKeyPress}></ConsoleTextarea>
            </ConsoleLine>
        </Flex>
    )
}

export {
    ActiveLine,
}