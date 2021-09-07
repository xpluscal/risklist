import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import Toggle from "./Toggle";

export default function SmallNav() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>


    </Box>
  );
}
