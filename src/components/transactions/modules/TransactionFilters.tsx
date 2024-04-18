import { Flex, Select, Heading } from "@chakra-ui/react";

export default function TransactionFilters() {
  return (
    <Flex alignItems="center" gap={4}>
      <Flex alignItems="center" gap={2}>
        <Heading size="xs" className={"capitalize"}>
          Filter By District
        </Heading>

        <Select width={"150px"} variant="filled">
          <option value="yearly">Okada</option>
          <option value="daily">Asaba</option>
          <option value="weekly">Auchi</option>
        </Select>
      </Flex>

      <Flex alignItems="center" gap={2}>
        <Heading size="xs" className={"capitalize"}>
          Filter By Customer Type
        </Heading>

        <Select width={"150px"} variant="filled">
          <option value="prepaid">Prepaid</option>
          <option value="postpaid">Postpaid</option>
        </Select>
      </Flex>
    </Flex>
  );
}
