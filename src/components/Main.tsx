import {
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Main({ children }: Props) {
  const bg = useColorModeValue("#E9E2A7","#102143")

  return (
    <Box
      bg={bg}
      position="relative"
    >
      <Image
        position="fixed"
        zIndex="0"
        bottom="0"
        w="full"
        src="waves.svg"
        alt="waves"
      />
      {children}
    </Box>
  );
}
