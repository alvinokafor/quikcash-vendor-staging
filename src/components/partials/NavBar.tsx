import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  return (
    <Box
      paddingBlock={"16px"}
      borderBottom="1px"
      borderColor={"#EAECF0"}
      bgColor={"white"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="capitalize"
              fontWeight={"medium"}
              isCurrentPage
              href={location.pathname}
            >
              {location.pathname.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem> */}
        </Breadcrumb>

        <Flex alignItems={"center"} gap={4}>
          <Avatar size={"sm"} />

          <Text fontWeight={"medium"}>Alvin Okafor</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
