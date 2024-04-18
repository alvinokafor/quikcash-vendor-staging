import { useMutation } from "@tanstack/react-query";
import { type MutationCallBack } from "./helpers";
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

const AuthAdapter = {
  login: async function (payload: LoginSchema, _params: string) {
    const res = await authService.mutate("", payload, "JSON", "POST");
    return res;
  },
};

export { AuthAdapter, useAuthMutation };
