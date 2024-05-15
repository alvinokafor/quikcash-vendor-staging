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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { UserContext, type IUserContext } from "@/contexts/UserContext";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logout from "../auth/Logout";

const navLinks = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Vendors", link: "/vendors" },
  { name: "Transactions", link: "/transactions" },
  { name: "Settings", link: "/settings" },
  { name: "Help Center", link: "/help-center" },
];

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
          <Box className="block xl:hidden">
            <Menu>
              <MenuButton as={Button}>
                <HamburgerMenuIcon />
              </MenuButton>
              <MenuList>
                {navLinks.map((link) => (
                  <MenuItem key={link.name}>
                    <Link to={`${link.link}`}>{link.name}</Link>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Logout renderAs="text" />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
