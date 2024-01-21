import { InputForm } from "../../molecule";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ISignInForm } from "../../../models";
import { Center, useColorModeValue } from "@chakra-ui/react";
import { WrappedApp } from "../../../i18n"
import { UserLogin } from "../../../redux_toolkit/services";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { useAppSelector } from "../../../hooks/redux";
import { Loading } from "../../../loading";
import { useEffect } from "react";
import {
    Box,
    FormControl,
    Stack,
    Icon,
    Button,
    Flex,
    Avatar,
    Heading,
    InputGroup,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
import { Navigation } from "../../../navigation";

const SignIn = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm<ISignInForm>({
        mode: "onBlur"
    });
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { loading, error, userInfo } = useAppSelector((state) => state.userAuth)

    useEffect(() => {
        if (userInfo) {
           console.log("hhhh");
           navigate('/')
           
            
        }
      }, [navigate, userInfo])
    const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
        dispatch(UserLogin(data))
       
        reset()
    }
           
 const [passwordShown, setPasswordShown] = useState(false);
 const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const { t } = useTranslation()
    return (
       <Flex
            flexDirection="column"
            width="100wh"
            height="95vh"
            bg={useColorModeValue("purple.200", "black.300")}
            color={useColorModeValue("purple", "purple")}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="5"
                justifyContent="center"
                alignItems="center" >
                <WrappedApp />
                <Avatar bg="purple.500" />
                <Heading color="purple">{t("LOG_IN.WELCOME")}</Heading>
                <Box minW={{ base: "90%", md: "500px" }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            spacing={4}
                            p="3rem"
                            bg={useColorModeValue("purple.200", "gray.800")}
                            boxShadow="2xl"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputForm
                                        text={t("LOG_IN.EMAIL")}
                                        type="email"
                                        placeholder="Enter your email *"
                                        size='lg'
                                        register={{
                                            ...register("email", {
                                                required: t("ERRORS.ERROR_EMAIL"),
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: t("ERRORS.ERROR_EMAIL_VALID")
                                                }
                                            })
                                        }}
                                    />
                                </InputGroup>
                                <Box color='red'>{errors?.email && errors.email.message}</Box>
                            </FormControl>
                            <FormControl>
                                <InputGroup color={"purple"}>
                                    <InputForm
                                        text={t("LOG_IN.PASSWORD")}
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Enter your password *"
                                        size='lg'
                                        register={{
                                            ...register("password", {
                                                required: t("ERRORS.ERROR_PASSWORD")

                                            })
                                        }}
                                    />
                                    <InputRightElement width="4.5rem" height="7rem">
                                        <Button h="1.75rem" onClick={togglePasswordVisiblity} bg={useColorModeValue("purple.200", "black.300")}>
                                            {passwordShown ? <Icon as={ViewIcon} color={"purple"} /> : <Icon as={ViewOffIcon} color={"purple"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box color='red'>{errors?.password && errors.password.message}</Box>
                                <FormHelperText textAlign="right">
                                    <Link to="#">{t("LOG_IN.FORGOT_PASSWORD")}</Link>
                                </FormHelperText>
                            </FormControl>
                            {error && <Box color='red' fontSize="18">wrong email or password</Box>}
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="purple"
                                width="full"
                            >
                                {t("LOG_IN.SIGN_IN")}
                            </Button>
                            <Center >
                                {t("LOG_IN.DO_NOT_HAVE_AN_ACCOUNT")} 
                                 <Link to="/register" style={{ color: 'blue', marginLeft: '10px' }}>
                                    {t("LOG_IN.REGISTER")}
                                </Link>
                            </Center>
                        </Stack>
                    </form>
                    {loading ? <Loading/> : null}
                </Box>
            </Stack>
        </Flex>
        
        
    );
   
};

export default SignIn