import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"

const NotFound = () => {
    return (
        <>
            <Box h={'600px'}
                bg={useColorModeValue("purple.200", "black.300")}
                color={useColorModeValue("purple", "purple")}>
                <Box >
                    <Text align={'center'} fontSize={'250'} color={"purple"} >
                        404
                    </Text>
                    <Text align={'center'} fontSize={'30'} color={"purple.400"}>
                        SORRY!!!
                    </Text>
                    <Text align={'center'} fontSize={'30'} color={"purple.400"}>
                        We can't find what you are looking for.
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default NotFound