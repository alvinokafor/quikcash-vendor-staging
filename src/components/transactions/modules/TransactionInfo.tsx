import {
  Heading,
  Flex,
  Text,
  Box,
  Grid,
  Badge,
  useToast,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { ClipboardIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function TransactionInfo() {
  const toast = useToast();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`ref`);
    toast({
      position: "top-right",
      title: "Copied to Clipboard!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={2}>
          <Heading>#REF-SKK0202</Heading>

          <ClipboardIcon
            onClick={handleCopyLink}
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Card>
          <CardHeader>
            <Heading size="sm"> User Details</Heading>
          </CardHeader>
          <CardBody className="space-y-4">
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text fontSize="sm">Emeka Walter</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Account Number
              </Heading>
              <Text fontSize="sm">1093002011</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                District
              </Heading>
              <Text fontSize="sm">OKADA</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Meter Number
              </Heading>
              <Text fontSize="sm">12390002332</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Customer Type
              </Heading>
              <Text fontSize="sm">Prepaid</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="sm"> Transaction Details</Heading>
          </CardHeader>
          <CardBody className="space-y-4">
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Transaction ID
              </Heading>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize="sm">JAKA40242</Text>

                <ClipboardIcon
                  onClick={handleCopyLink}
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Token
              </Heading>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize="sm">0298392340258240242</Text>

                <ClipboardIcon
                  onClick={handleCopyLink}
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Units
              </Heading>
              <Text fontSize="sm">2040.5Kwh</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Gross Amount (NGN)
              </Heading>
              <Text fontSize="sm">12,000.00</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Net Amount (NGN)
              </Heading>
              <Text fontSize="sm">11,000.00</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Vendor
              </Heading>
              <Link to={"/vendors/1"}>
                <Text fontSize="sm">Crown</Text>
              </Link>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Channel
              </Heading>
              <Text fontSize="sm">App/PAGA</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Date & Time
              </Heading>
              <Text fontSize="sm">September 23, 2023 at 9:07PM</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Badge colorScheme="green">Success</Badge>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
