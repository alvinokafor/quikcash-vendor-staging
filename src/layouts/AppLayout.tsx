import { Flex, Box } from "@chakra-ui/react";
import { NavBar, SideBar } from "@/components/partials";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <SideBar />
      <Box
        w="100%"
        paddingLeft={"342px"}
        paddingBottom={"32px"}
        paddingRight={"32px"}
        className="space-y-4"
      >
        <NavBar />
        {children}
      </Box>
    </Flex>
  );
}
