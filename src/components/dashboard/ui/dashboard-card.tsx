import {
  Card,
  CardBody,
  Heading,
  Text,
  CardHeader,
  Flex,
  Tooltip,
  Skeleton,
} from "@chakra-ui/react";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { getFormattedAmount } from "@/utils";

export default function DashboardCard({
  title,
  value,
  isLoading,
}: {
  title: string;
  value: string | number | undefined;
  isLoading: boolean;
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
        {!isLoading ? (
          <Text fontWeight={"bold"} fontSize={"4xl"}>
            {title === "Vendor Balance"
              ? getFormattedAmount(Number(value), "NGN")
              : value}
          </Text>
        ) : (
          <Skeleton height="20px" />
        )}
      </CardBody>
    </Card>
  );
}
