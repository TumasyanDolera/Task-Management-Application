import { Box, Center, Spinner } from "@chakra-ui/react"

export default function Loading() {
    return (
        <Center>
        <Box >
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            <Box>Loading ...</Box>
        </Box>
        </Center>
    )
}