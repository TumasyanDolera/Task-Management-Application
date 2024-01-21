import { Tag } from "@chakra-ui/react"
import { useState } from "react"
import { Icon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


const ShowButton = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    const InputType = passwordShown ? "text" : "password"
    return(
        <>
          {InputType}
         <Tag pos="absolute" mt={2} ml={40} onClick={togglePasswordVisiblity}>
                  {passwordShown ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
         </Tag>
        </>
    )
}

export default ShowButton