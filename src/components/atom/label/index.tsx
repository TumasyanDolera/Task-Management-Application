import { FormLabel as ChakraFormLabel} from "@chakra-ui/react";
import { ILabelForm } from "../../../models"; 

const FormLabel = ({text}:ILabelForm) => {
    return(
        <>
        <ChakraFormLabel>{text}</ChakraFormLabel>
        </>
    )
}

export default FormLabel