import { useMutation } from "@tanstack/react-query";
import { type MutationCallBack } from "./helpers";
import ApiService from "./ApiService";
import { LoginSchema } from "@/lib/validations/authValidator";

// api service initiliazer
const authService = new ApiService("");

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
    const res = await authService.mutate("login", payload, "JSON", "POST");
    return res;
  },
  initiateOTP: async function (payload: {}, _params: string) {
    const res = await authService.mutate(
      "initiate-otp/",
      payload,
      "JSON",
      "POST"
    );
    return res;
  },
  verifyOTP: async function (payload: {}, _params: string) {
    const res = await authService.mutate(
      "verify-otp/",
      payload,
      "JSON",
      "POST"
    );
    return res;
  },
  toggle2FA: async function (
    payload: { two_factor_enabled: boolean },
    _params: string
  ) {
    const res = await authService.mutate(
      "toggle-two-factor/",
      payload,
      "JSON",
      "POST"
    );
    return res;
  },
};

export { AuthAdapter, useAuthMutation };
