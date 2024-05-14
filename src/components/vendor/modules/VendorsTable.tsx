import { useContext } from "react";
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
  Badge,
  Spinner,
} from "@chakra-ui/react";
import { UserContext, IUserContext } from "@/contexts/UserContext";
import { CreateVendorModal, CreateVendorWallet } from "../ui";
import { Link } from "react-router-dom";
import { type Vendor } from "@/lib/types/Vendors";
import { getFormattedDate } from "@/utils";

export default function VendorsTable({
  allVendors,
  isLoading,
}: {
  allVendors: Vendor[] | undefined;
  isLoading: boolean;
}) {
  const { user } = useContext(UserContext) as IUserContext;

  if (!user) return null;
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Vendors</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select width={"150px"} variant="filled">
            <option value="yearly">All</option>
            <option value="daily">Agent</option>
            <option value="weekly">Vendor</option>
            <option value="monthly">Cashier</option>
          </Select>

          <CreateVendorModal />
          {/* {getRolePermissions(user?.role) && ( */}
          <CreateVendorWallet allVendors={allVendors} />
          {/* )} */}
          {/* {getRolePermissions(user?.role) && <FundVendorModal />} */}
        </Flex>
      </Flex>
      <TableContainer className="h-full">
        {!isLoading ? (
          <Table variant="simple">
            <TableCaption>Vendor Revenue Summary</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Phone Number</Th>
                <Th>Email</Th>
                <Th>User Type</Th>
                <Th>Status</Th>
                <Th>Date Created</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allVendors?.map((vendor) => (
                <Tr
                  _hover={{
                    bg: "gray.gray50",
                  }}
                  cursor={"pointer"}
                  key={vendor.id}
                >
                  <Td className="capitalize">
                    <Link to={`/vendors/${vendor.username}`}>
                      {vendor.first_name} {vendor.last_name}
                    </Link>
                  </Td>

                  <Td>
                    <Link to={`/vendors/${vendor.username}`}>
                      {vendor.username}
                    </Link>
                  </Td>

                  <Td>+234-{vendor.phone}</Td>
                  <Td>{vendor.email}</Td>
                  <Td className="capitalize">{vendor.role}</Td>
                  <Td>
                    <Badge>{vendor.status ?? "No Status"}</Badge>
                  </Td>
                  <Td>{getFormattedDate(vendor.date_joined)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Box className="mx-auto mt-20 w-max">
            <Spinner
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
            />
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}
