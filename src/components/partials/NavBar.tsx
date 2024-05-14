import { useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Avatar,
  Text,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import { UserContext, type IUserContext } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(UserContext) as IUserContext;

  const basePath = location.pathname.includes("dashboard")
    ? "dashboard"
    : location.pathname.includes("vendors")
    ? "vendors"
    : location.pathname.includes("transactions")
    ? "transactions"
    : location.pathname.includes("settings")
    ? "settings"
    : location.pathname.includes("help-center")
    ? "help-center"
    : "QuikCash";

  return (
    <Box
      paddingBlock={"16px"}
      borderBottom="1px"
      borderColor={"#EAECF0"}
      bgColor={"white"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={4}>
          <IconButton
            onClick={() => navigate(-1)}
            size={"sm"}
            aria-label="back"
            icon={<ArrowLeftIcon />}
          />

          <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                fontWeight={"medium"}
                isCurrentPage
                href={`/${basePath}`}
              >
                {basePath === "help-center" ? "Help Center" : basePath}
              </BreadcrumbLink>
            </BreadcrumbItem>

            {id && (
              <BreadcrumbItem>
                <BreadcrumbLink href={location.pathname}>{id}</BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Avatar size={"sm"} />
          <Flex direction={"column"}>
            <Text fontWeight={"medium"}>{user?.username}</Text>
            <Badge className="uppercase">{user?.role}</Badge>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
