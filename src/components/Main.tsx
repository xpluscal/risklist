import {
  Box,
  BoxProps,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props extends BoxProps {
  children?: ReactNode;
};

export default function Main({ children, ...rest }: Props) {
  const bg = useColorModeValue("#E9E2A7","#102143")

  return (
    <Box
      position="relative"
      bg={bg}
      zIndex="0"
    >
      <Image
        position="fixed"
        zIndex="0"
        bottom="0"
        w="full"
        src="waves.svg"
        alt="waves"
      />
      <Box
        zIndex="1"
        position="relative"
      >
      {children}
      </Box>
    </Box>
  );
}
