import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <Box maxW="1200px" w="100%" m="0 auto" p={4}>
      {children}
    </Box>
  );
}
