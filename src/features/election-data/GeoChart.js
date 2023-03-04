import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import Chart from "react-google-charts"
import { geoDataByParty, parties } from "../../utils/data"
import classes from "../../styles/electiondata.module.css"

const GeoChart = () => {
  const options = {
    region: "NG",
    displayMode: "regions",
    resolution: "provinces",
    backgroundColor: "#1B1F30",
    datalessRegionColor: "transparent",
    defaultColor: "#FFFFFF",
    colorAxis: { colors: ["#64CCFF", "#0AA83F", "#D62B3C"] },
    magnifyingGlass: {
      enable: true,
      zoomFactor: 5.0,
    },
    legend: "none",
  }

  return (
    <Box px="16" mt="8">
      <Flex
        border="1px"
        borderColor="secondary.300"
        bg="secondary.500"
        rounded="md"
        p="4"
        className={classes.visualize}
      >
        <Chart
          data={geoDataByParty}
          options={options}
          chartType="GeoChart"
          width="100%"
          height="400px"
        />

        <Stack direction="column" justify="flex-end">
          {parties.map((item, index) => (
            <HStack key={index} spacing="2">
              <Box p="2" bg={item.color}></Box>
              <Text color="text.200" fontSize="sm">
                {item.name}
              </Text>
            </HStack>
          ))}
        </Stack>
      </Flex>
    </Box>
  )
}

export default GeoChart
