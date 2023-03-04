import { Box, Flex, HStack, Image, Link, Stack, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box bg="secondary.400" p="16" mt="16" bottom="0" w="100%">
      <Flex justify="space-between" color="white">
        <Box>
          <Image
            src={require("../../assets/Hernalytics Full Logo Yellow@3x 1.png")}
            alt="Hernalytics Logo"
          />
          <Text mt="3">
            Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria
          </Text>
          <Text mt="3">&copy; 2022 Hernalytics</Text>
        </Box>

        <Stack direction="column" spacing="4">
          <Text fontWeight="bold">About</Text>
          <Link _hover={{ textDecoration: "none" }}>Our Story</Link>
          <Link _hover={{ textDecoration: "none" }}>Blog</Link>
          <Link _hover={{ textDecoration: "none" }}>About Hernalytics</Link>
          <Link _hover={{ textDecoration: "none" }}>Videos</Link>
        </Stack>

        <Stack direction="column" spacing="4">
          <Text fontWeight="bold">Support</Text>
          <Link _hover={{ textDecoration: "none" }}>FAQs</Link>
          <Link _hover={{ textDecoration: "none" }}>Privacy Policy</Link>
          <Link _hover={{ textDecoration: "none" }}>Terms of Service</Link>
        </Stack>

        <Stack direction="column" spacing="4">
          <Text fontWeight="bold">Let's chat!</Text>
          <Link href="mailto:hernalytics@gmail.com">hernalytics@gmail.com</Link>
          <Link href="tel:+2348012345678">+234 801 234 5678</Link>
          <HStack></HStack>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Footer
