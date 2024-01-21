import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Box, Button, MenuButton, Image, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface ITranslate {
    en: object
    ru: object
    am: object
}
const Translate = () => {
    const { t, i18n } = useTranslation();
    const locales: ITranslate = {
        en: {
            translation: t("NAV_BAR.ENGLISH"),
        },
        am: {
            translation: t("NAV_BAR.ARMENIAN"),
        },
        ru:{
            translation: t("NAV_BAR.RUSSINAN"),
        },
       
    }

return (
      <Menu >
            <MenuButton as={Button}
                colorScheme='purple.500'
                color="white"
                fontSize={'lg'}
                fontWeight={400}
                type="submit"
                _hover={{
                    bg: 'purple',
                    boxShadow: 'lg'
                }}

                rightIcon={<ChevronDownIcon />}>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://cdn.iconscout.com/icon/premium/png-256-thumb/language-2780793-2306634.png?f=webp'
                    alt='English'
                    mr='12px'
                />
            </MenuButton>
            <MenuList >
                {Object.keys(locales).map((locale) => (
                    <Box key={locale}>
                        <MenuItem onClick={() => i18n.changeLanguage(locale)}>
                            {locales[locale].translation}
                        </MenuItem>
                       </Box>
                       
                   ))
                    }
                      
                </MenuList>
              
        </Menu>
     )
}

export default function WrappedApp() {
    return (
        <Suspense fallback={<Box>Loading ...</Box>}>
            <Translate />
        </Suspense>
    )
}

   