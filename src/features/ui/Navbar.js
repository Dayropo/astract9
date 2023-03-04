import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react"
import { TriangleDownIcon } from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <Box px={16} py={8}>
      <Flex align="center" justify="space-between">
        <Flex>
          <Image
            src={require("../../assets/Hernalytics Full Logo Yellow@3x 1.png")}
            alt="Hernalytics Logo"
          />
        </Flex>

        <HStack spacing="8">
          {/**about us */}
          <Button
            color="white"
            variant="link"
            fontSize="sm"
            _hover={{ textDecoration: "none" }}
          >
            ABOUT US
          </Button>

          {/**our communities */}
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button
                color="white"
                variant="link"
                fontSize="sm"
                _hover={{ textDecoration: "none" }}
              >
                OUR COMMUNITIES <TriangleDownIcon ml="2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="auto">
              <PopoverBody>
                <Stack
                  direction="column"
                  color="secondary-200"
                  p="2"
                  spacing="4"
                >
                  <Flex align="center" justify="space-between">
                    <Box w="72">
                      <Link
                        fontWeight="bold"
                        _hover={{ textDecoration: "none" }}
                      >
                        General User
                      </Link>
                      <Text fontSize="sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Text>
                    </Box>
                    <Box w="72">
                      <Link
                        fontWeight="bold"
                        _hover={{ textDecoration: "none" }}
                      >
                        Election Candidates
                      </Link>
                      <Text fontSize="sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </Text>
                    </Box>
                  </Flex>

                  <Flex align="center" justify="space-between">
                    <Box w="72">
                      <Link
                        fontWeight="bold"
                        _hover={{ textDecoration: "none" }}
                      >
                        Decide To Run (DTR)
                      </Link>
                      <Text fontSize="sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Text>
                    </Box>
                    <Box w="72">
                      <Link
                        fontWeight="bold"
                        _hover={{ textDecoration: "none" }}
                      >
                        Reporters
                      </Link>
                      <Text fontSize="sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/**election data */}
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button
                color="white"
                variant="link"
                fontSize="sm"
                _hover={{ textDecoration: "none" }}
              >
                ELECTION DATA <TriangleDownIcon ml="2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="auto">
              <PopoverBody>
                <Flex direction="column">
                  <Link py="2" _hover={{ textDecoration: "none" }}>
                    Election Day Live Updates
                  </Link>
                  <Link py="2" _hover={{ textDecoration: "none" }}>
                    Post-Election Analysis
                  </Link>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/**e-buddy */}
          <Button
            color="white"
            variant="link"
            fontSize="sm"
            _hover={{ textDecoration: "none" }}
          >
            E-BUDDY
          </Button>

          {/**veo platform */}
          <Button
            color="white"
            variant="link"
            fontSize="sm"
            _hover={{ textDecoration: "none" }}
          >
            VEO PLATFORM
          </Button>
        </HStack>

        <HStack spacing={8}>
          <Button
            color="white"
            variant="link"
            _hover={{ textDecoration: "none" }}
          >
            LOGIN
          </Button>
          <Button color="black" bg="primary.100">
            SIGN UP
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
