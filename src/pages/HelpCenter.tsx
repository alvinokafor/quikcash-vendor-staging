import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Flex,
  Button,
  Text,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { ProtectedRoute } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import ApiService from "@/adapters/ApiService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HelpCenterSchema,
  helpCenterValidator,
} from "@/lib/validations/helpCenterValidator";

const metaData = {
  title: "QuikCash :: Help Center",
  name: "QuikCash :: Help Center",
  content: "QuikCash :: Help Center",
};

export default function HelpCenter() {
  const toast = useToast();
  const helpCenterService = new ApiService("/helpcenter/");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: HelpCenterSchema) => {
      return helpCenterService.mutate<{}>("", payload, "JSON", "POST");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HelpCenterSchema>({
    resolver: zodResolver(helpCenterValidator),
  });

  const handleSupportTicketSubmission = async (data: HelpCenterSchema) => {
    try {
      await mutateAsync(data);
      toast({
        position: "top-right",
        title: "Your support ticket has been opened.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: "top-right",
        title: "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-6">
            <Flex direction={"column"} gap={"2"}>
              <Heading size={"md"}>Help Center</Heading>
              <Text>
                Having an issue? Fill out the form below to open a support
                ticket
              </Text>
            </Flex>
            <form className="space-y-4">
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input {...register("title")} placeholder="Enter Title" />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  {...register("description")}
                  placeholder="Enter Description"
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                isLoading={isPending}
                onClick={handleSubmit(handleSupportTicketSubmission)}
                bg={"purple.600"}
                color={"white"}
                _hover={{
                  bg: "purple.400",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
