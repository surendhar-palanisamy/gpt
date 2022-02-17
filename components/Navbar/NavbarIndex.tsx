import { Box, Button, HStack, Link, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/GPT-3.svg'
import { RiMenu3Fill } from "react-icons/ri";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
function NavbarIndex() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <HStack
                textColor={'white'}
                fontWeight={'semibold'}
                justify={'space-between'}
            >

                <Link href='#home' >   <Image src={Logo} height='15' /></Link>
                <HStack gap={'10'} display={['none', 'none', 'flex', 'flex']}>


                    <Link href='#home' >   <Text >Home</Text></Link>

                    <Link href='#what' >       <Text>What is GPT?</Text></Link>
                    <Link href='#poss' >        <Text>Open AI</Text></Link>
                    <Link href='#case' >       <Text>Case Studies</Text></Link>
                    <Text>Library</Text>
                </HStack>
                <HStack gap={'10'} display={['none', 'none', 'none', 'flex']}>
                    <Text as={'button'}>Sign in</Text>
                    <Button _hover={{ bgColor: '' }} bgColor='brand.button'>Sign up</Button>
                </HStack>
                <Box display={['flex', 'flex', 'none', 'none']}>
                    <RiMenu3Fill size={'20'} onClick={() => onOpen()} />
                </Box>

            </HStack >
            <Drawer onClose={onClose} isOpen={isOpen} size={'xs'}>
                <DrawerOverlay />
                <DrawerContent mt={['8', '8', '8', '8']} bgGradient='linear(to-r, #01254A, #021932, #040D19)' textColor={'white'}>
                    <DrawerCloseButton />

                    <DrawerBody  >
                        <VStack >
                            <Stack mt={'6'} >
                                <Link href='#home' >   <Text >Home</Text></Link>
                                <Link href='#what' >       <Text>What is GPT?</Text></Link>
                                <Link href='#poss' >        <Text>Open AI</Text></Link>
                                <Link href='#case' >       <Text>Case Studies</Text></Link>
                                <Text>Library</Text>
                                <Text >Sign in</Text>
                                <Text >Sign Up</Text>
                            </Stack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box >
    )
}

export default NavbarIndex