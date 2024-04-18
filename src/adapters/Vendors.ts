import { useMutation, useQuery } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import ApiService from "./ApiService";
import { LoginSchema } from "@/lib/validations/authValidator";

// api service initiliazer
const authService = new ApiService("/login");

// mutation utility
function useAuthMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (payload: T) => mutationCallback(payload, params),
  });
}

/* query utility
 **other options from tanstack query can be added to this utility function** */
// function useAuthQuery<B>(
//   queryCallback: QueryCallBack<B>,
//   queryKey: string[],
//   slug: string
// ) {
//   return useQuery({
//     queryKey: queryKey,
//     queryFn: () => queryCallback(slug),
//   });
// }
