import { Box, Flex, Text, Stack, HStack, Image } from "@chakra-ui/react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import Chart from "react-google-charts"
import { geoDataByZone, geoZones } from "../../utils/data"
import classes from "../../styles/electiondata.module.css"

ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle)

const VoteBreakdown = () => {
  const data = {
    labels: ["ACCEPTED VOTES", "REJECTED VOTES"],
    datasets: [
      {
        data: [160512222, 8400000],
        backgroundColor: ["#449352", "#E30325"],
        borderColor: ["#449352", "#E30325"],
      },
    ],
  }

  const options = {
    plugins: {
      title: {
        display: true,
        position: "top",
        text: "TOTAL VOTES",
        color: "#FFFFFF",
        font: {
          size: 14,
          weight: "normal",
          family: "'Jost', san-serif",
        },
      },
      subtitle: {
        display: true,
        position: "top",
        text: "168,912,222",
        color: "#FFFFFF",
        font: {
          size: 20,
          weight: "bold",
          family: "'Jost', san-serif",
        },
        align: "top",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  }

  const geoChartOptions = {
    region: "NG",
    displayMode: "regions",
    resolution: "provinces",
    backgroundColor: "#1B1F30",
    datalessRegionColor: "transparent",
    defaultColor: "#FFFFFF",
    colorAxis: {
      colors: [
        "#449352",
        "#6D769D",
        "#A163BE",
        "#E30325",
        "#2249D1",
        "#018796",
      ],
    },
    legend: "none",
  }

  return (
    <Box px="16" mt="8">
      <Flex
        border="1px"
        borderColor="secondary.600"
        bg="secondary.500"
        p="8"
        rounded="md"
        justify="space-between"
      >
        <Box
          border="1px"
          borderColor="secondary.300"
          rounded="md"
          p="4"
          w="25%"
        >
          <Doughnut data={data} options={options} />
        </Box>

        <Box
          border="1px"
          borderColor="secondary.300"
          rounded="md"
          p="4"
          w="50%"
        >
          <Text color="white" fontSize="sm" fontWeight="normal" mb="4">
            CANDIDATES BY GEOPOLITICAL ZONES
          </Text>
          <Flex className={classes.visualize}>
            <Chart
              data={geoDataByZone}
              options={geoChartOptions}
              chartType="GeoChart"
              width="100%"
              height="240px"
            />

            <Stack direction="column" justify="flex-end" w="auto">
              {geoZones.map((item, index) => (
                <HStack key={index} spacing="2">
                  <Box p="2" bg={item.color}></Box>
                  <Text color="white" fontSize="xs" fontWeight="semibold">
                    {item.zone}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </Flex>
        </Box>

        <Stack
          direction="column"
          spacing="8"
          border="1px"
          borderColor="secondary.300"
          rounded="md"
          p="8"
          color="white"
          w="20%"
        >
          <Box>
            <Text fontSize="sm" fontWeight="normal">
              TOTAL ELECTED MEMBERS
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              10,000
            </Text>
          </Box>

          <Box>
            <HStack>
              <Text fontSize="sm" fontWeight="normal">
                MALE
              </Text>
              <Image src={require("../../assets/male.png")} alt="Male symbol" />
            </HStack>

            <Text fontSize="lg" fontWeight="bold">
              9,000
            </Text>
          </Box>

          <Box>
            <HStack>
              <Text fontSize="sm" fontWeight="normal">
                FEMALE
              </Text>
              <Image
                src={require("../../assets/female.png")}
                alt="Female symbol"
              />
            </HStack>
            <Text fontSize="lg" fontWeight="bold">
              1,000
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default VoteBreakdown
