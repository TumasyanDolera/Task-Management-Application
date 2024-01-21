import { InputForm } from "../../molecule";
import { Box, Button, FormControl, Center } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../../../models";
import { Icon, Text, Stack, Flex, Heading, InputGroup, HStack, InputRightElement, } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"
import { useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { WrappedApp } from "../../../i18n";
import { useNavigate } from "react-router-dom";
import { UserRegister } from "../../../redux_toolkit/services";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { Loading } from "../../../loading";
import { useEffect } from "react";

const RagisterForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    const { loading, error, userInfo, success } = useAppSelector((state) => state.userAuth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
        watch,
    } = useForm<IForm>({
        mode: "onBlur"
    });
    useEffect(() => {
        if (success) navigate('/login')
        // if (userInfo) navigate('/user-profile')
      }, [navigate, userInfo, success])
    const onSubmit: SubmitHandler<IForm> = async (data) => {
        if (data.password !== data.confirmPassword) {
            alert('Password mismatch')
          }
          dispatch(UserRegister(data))
          reset();
        }
    const confirmPassword = watch("confirmPassword");
    const password = watch("password");
    const { t } = useTranslation();

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue("purple.200", "black.300")}
            color={useColorModeValue("purple", "purple")}
        >
            <form onSubmit={handleSubmit(onSubmit)} >
                <Stack spacing={8} mx={'auto'} maxW={''} py={12} px={6}>
                    <Stack align={'center'}>
                        <Center > <WrappedApp /></Center>
                        <Heading fontSize={'4xl'} textAlign={'center'}
                            color={useColorModeValue("purple", "white")}
                            fontWeight={800}>
                            {t("REGISTRATION.REGISTER")}
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue("purple.200", "gray.800")}
                        boxShadow='2xl'
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>

                                <FormControl id="firstName" isRequired >
                                    <Box>
                                        <InputForm
                                            text={t("REGISTRATION.FIRST_NAME")}
                                            type="text"
                                            placeholder="Enter your name *"
                                            size="md"
                                            register={{
                                                ...register("firstName", {
                                                    required: true
                                                })
                                            }}
                                        />
                                    </Box>
                                    <Box color='red'>{errors?.firstName && t("ERRORS.ERROR_NAME")}</Box>
                                </FormControl>
                                <FormControl id="lastName">
                                    <Box>
                                        <InputForm
                                            text={t("REGISTRATION.LAST_NAME")}
                                            type="text"
                                            placeholder="Enter your last name *"
                                            size="md"
                                            register={{
                                                ...register("lastName", {
                                                    required: true
                                                })
                                            }}
                                        />
                                    </Box>
                                    <Box color='red'>{errors?.lastName && t("ERRORS.ERROR_LAST_NAME")}</Box>
                                </FormControl>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <InputForm
                                    text={t("REGISTRATION.EMAIL")}
                                    type="email"
                                    placeholder="Enter your email *"
                                    size="md"
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
                                <Box color='red'> {errors?.email && errors.email.message}</Box>
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <InputGroup>
                                    <InputForm
                                        text={t("REGISTRATION.PASSWORD")}
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Enter your password *"
                                        size="md"
                                        register={{
                                            ...register("password", {
                                                required: t("ERRORS.ERROR_PASSWORD"),
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[a-zA-Z\d!@#$%]{8,}$/,
                                                    message: t("ERRORS.ERROR_PASSWORD_VALID")
                                                }
                                            })
                                        }}
                                    />
                                    <InputRightElement h={'full'} height="6.5rem">
                                        <Button
                                            variant={'ghost'}
                                            onClick={togglePasswordVisiblity}>
                                            {passwordShown ? <Icon as={ViewIcon} color={"purple"} /> : <Icon as={ViewOffIcon} color={"purple"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box color='red'>{errors?.password && errors.password.message}</Box>
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <InputGroup>
                                    <InputForm
                                        text={t("REGISTRATION.CONFIRM_PASSWORD")}
                                        type={passwordShown ? "text" : "password"}
                                        placeholder=" Confirm *"
                                        size="md"
                                        value={confirmPassword}
                                        register={{
                                            ...register("confirmPassword", {
                                                required: t("ERRORS.CONFIRM_PASSWORD"),
                                                validate: (value) =>
                                                    value === password || t("ERRORS.CONFIRM_PASSWORD_VALID")
                                            })
                                        }}
                                    />
                                    <InputRightElement h={'full'} height="6.5rem">
                                        <Button
                                            variant={'ghost'}
                                            onClick={togglePasswordVisiblity}>
                                            {passwordShown ? <Icon as={ViewIcon} color={"purple"} /> : <Icon as={ViewOffIcon} color={"purple"} />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box color='red'> {errors?.confirmPassword && errors.confirmPassword.message}</Box>
                            </FormControl>
                            {error && <Box color='red' fontSize='15'>account already exists</Box>}
                            <Stack spacing={10} pt={2}>
                                <Button type="submit" value="Submit" size="lg"
                                    bg={'purple'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'purple.400',
                                    }}>
                                    {t("REGISTRATION.SIGN_UP")}
                                </Button>
                            </Stack>
                            <Stack pt={1}>
                                <Text align={'center'} fontSize={'1xl'}>
                                    {t("REGISTRATION.OR")}
                                </Text>
                                <Text align={'center'} fontSize={'1.5xl'}>
                                    {t("REGISTRATION.HAVE_AN_ACCOUNT")} <Link to="/login" style={{ color: 'blue', marginLeft: '10px' }}> {t("REGISTRATION.SIGN_IN")} </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </form>
            {loading ? <Loading/> : null}
        </Flex>
    )
}

export default RagisterForm