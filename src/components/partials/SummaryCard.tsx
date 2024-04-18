import {
  Card,
  CardBody,
  Heading,
  Text,
  CardHeader,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export default function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card>
      <CardHeader>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontWeight={"medium"} size="sm">
            {title}
          </Heading>

          <Tooltip label={title}>
            <QuestionMarkCircledIcon />
          </Tooltip>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontWeight={"bold"} fontSize={"4xl"}>
          {value}
        </Text>
      </CardBody>
    </Card>
  );
}
