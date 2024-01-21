import { FormControl,Box } from "@chakra-ui/react"
import { IMolecul } from "../../../models"
import {FormLabel} from "../../atom"
import { Input } from "../../atom"


const InputForm = ({ type, text, placeholder, value, register, size}: IMolecul) => {
    return (
        <FormControl>
            <Box>
            <FormLabel text={text} />
            <Input
                register={register}
                type={type}
                placeholder={placeholder}
                value={value}
                size={size}
                {...register}
            />
            </Box>
        </FormControl>
    )
}

export default InputForm


