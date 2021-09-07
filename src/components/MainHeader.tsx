import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue as mode
} from '@chakra-ui/react';

export default function MainNav() {

  return (
    <Box>
      <Flex
        color={mode('#1D2070', '#FFFFFF')}
        py={{ base: 16 }}
        px={{ base: 4 }}
        align={'center'}
        alignItems="center"
        flexDirection="column">
        <Image mb={"2"} src="logo.svg" alt="risklist" />
        <Text mb={"3"}>by ensemble</Text>
        <Box
          w="4px"
          h="30px"
          mb={"3"}
          border={mode("1px double #1D2070","1px double #fff")}
        ></Box>
        <Text>You don’t need to risk it for the biscuit.</Text>
      </Flex>
    </Box>
  );
}
