import { Input as ChakraInput } from "@chakra-ui/react";
import { IInput } from "../../../models"; 

const Input = ({ type, placeholder, value, register, size}: IInput) => {
    return (
        <ChakraInput
            type={type}
            placeholder={placeholder}
            value={value}
            size={size}
            {...register}
        />

    )
}

export default Input