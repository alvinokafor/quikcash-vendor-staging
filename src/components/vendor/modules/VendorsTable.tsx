import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Box,
  Heading,
  Select,
} from "@chakra-ui/react";
import { CreateVendorModal, FundVendorModal } from "../ui";
import { Link } from "react-router-dom";

export default function VendorsTable() {
  const vendors = [
    {
      name: "Emeka Walter",
      username: "emekawalter21",
      phone_number: "07065222633",
      email: "emeka@gmail.com",
      user_type: "Agent",
      commission_rate: "50,000",
      date: "20th April 2024",
    },
    {
      name: "Emeka Walter",
      username: "emekawalter21",
      phone_number: "07065222633",
      email: "emeka@gmail.com",
      user_type: "Agent",
      commission_rate: "50,000",
      date: "20th April 2024",
    },
    {
      name: "Emeka Walter",
      username: "emekawalter21",
      phone_number: "07065222633",
      email: "emeka@gmail.com",
      user_type: "Agent",
      commission_rate: "50,000",
      date: "20th April 2024",
    },
    {
      name: "Emeka Walter",
      username: "emekawalter21",
      phone_number: "07065222633",
      email: "emeka@gmail.com",
      user_type: "Agent",
      commission_rate: "50,000",
      date: "20th April 2024",
    },
  ];
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Vendor Revenue Summary</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select width={"150px"} variant="filled">
            <option value="yearly">All</option>
            <option value="daily">Agent</option>
            <option value="weekly">Vendor</option>
            <option value="monthly">Cashier</option>
          </Select>

          <CreateVendorModal />
          <FundVendorModal />
        </Flex>
      </Flex>
      <TableContainer className="h-full">
        <Table variant="simple">
          <TableCaption>Vendor Revenue Summary</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Phone Number</Th>
              <Th>Email</Th>
              <Th>User Type</Th>
              <Th>NMD Commission Rate</Th>
              <Th>Date Created</Th>
            </Tr>
          </Thead>
          <Tbody>
            {vendors.map((vendor, index) => (
              <Tr
                _hover={{
                  bg: "gray.gray50",
                }}
                cursor={"pointer"}
                key={index}
              >
                <Td>
                  <Link to={"/vendors/1"}>{vendor.name} </Link>
                </Td>

                <Td>
                  <Link to={"/vendors/1"}>{vendor.username}</Link>
                </Td>

                <Td>{vendor.phone_number}</Td>
                <Td>{vendor.email}</Td>
                <Td>{vendor.user_type}</Td>
                <Td>{vendor.commission_rate}</Td>
                <Td>{vendor.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
