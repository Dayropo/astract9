import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import React from "react"
import Navbar from "../features/ui/Navbar"
import Footer from "../features/ui/Footer"
import Picker from "../features/ui/Picker"
import { dataTypes, electionLevels, electionYears } from "../utils/data"
import VoteBreakdown from "../features/election-data/VoteBreakdown"
import GeoChart from "../features/election-data/GeoChart"

const ElectionData = () => {
  return (
    <Box bg="secondary.100" minH="100vh">
      <Navbar />

      <Box px="16">
        <Flex align="center">
          <Text fontSize="3xl" fontWeight="bold" color="white">
            Post Election Data
          </Text>
          <Text
            as="span"
            color="white"
            fontSize="sm"
            ml="2"
            bg="secondary.200"
            border="1px"
            borderColor="secondary.300"
            rounded="base"
            px="1"
          >
            PRESIDENTIAL / 2023
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          py="8"
          borderBottom="1px"
          borderColor="secondary.300"
        >
          <Text color="white" fontSize="2xl" fontWeight="medium">
            Presidential Race
          </Text>
          <HStack spacing="3">
            <Picker data={dataTypes} />
            <Picker data={electionLevels} />
            <Picker data={electionYears} />
          </HStack>
        </Flex>
      </Box>

      <GeoChart />

      <VoteBreakdown />

      <Footer />
    </Box>
  )
}

export default ElectionData
