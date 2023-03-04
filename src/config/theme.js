import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      100: "#E5B805",
    },
    secondary: {
      100: "#1F2335",
      200: "#181C2E",
      300: "#242B47",
      400: "rgba(255, 255, 255, 0.1)",
      500: "#1B1F30",
      600: "#393C4A",
    },
    text: {
      100: "#C6C7CB",
      200: "#57656B",
      300: "rgba(255, 255, 255, 0.5)",
    },
  },
  fonts: {
    heading: `"Jost", sans-serif`,
    body: `"Jost", sans-serif`,
  },
})

export default theme
