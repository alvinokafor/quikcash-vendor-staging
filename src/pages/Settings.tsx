import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { AccountInfo } from "@/components/settings/modules";

import { ProtectedRoute } from "@/utils";

const metaData = {
  title: "QuikCash :: Settings",
  name: "QuikCash :: Settings",
  content: "QuikCash :: Settings",
};

export default function Settings() {
  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            <AccountInfo />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
