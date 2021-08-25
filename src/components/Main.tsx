import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Main({ children }: Props) {
  const bg = useColorModeValue("gray.100","gray.900")

  return (
    <Box
    >
      <Box
        position="absolute"
        zIndex="-1"
        width="100%"
        h="25vh"
        minH="200px"
        bg={bg}
      >
      </Box>
      {children}
    </Box>
  );
}
