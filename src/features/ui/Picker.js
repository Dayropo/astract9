import { Select } from "@chakra-ui/react"

const Picker = ({ data }) => {
  return (
    <Select
      variant="outline"
      placeholder=""
      borderColor="secondary.300"
      bg="secondary.200"
      color="text.100"
      w="60"
    >
      {data?.map((item, index) => (
        <option
          value={item.value}
          key={index}
          style={{
            backgroundColor: "#181C2E",
            padding: "4px auto",
            borderBottom: "1px",
          }}
        >
          {item.label}
        </option>
      ))}
    </Select>
  )
}

export default Picker
