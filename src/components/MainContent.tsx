import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import DataTable from "./DataTable";
import CustomTable from "./CustomTable";

import { listData } from '../data/data.js'

type Props = {
  children?: ReactNode;
};

export default function MainContent({ children }: Props) {
  const bg = useColorModeValue("#fff", "linear-gradient(180deg, #1F3051 0%, #0B1A37 100%)")

  const data = React.useMemo(
    () => listData,
    [],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "Project Name",
        accessor: "Project",
      },
      {
        Header: "TVL KPI",
        accessor: "TVL KPI",
      },
      {
        Header: "defisafety",
        accessor: "defisafety",
      },
      {
        Header: "defiscore.io",
        accessor: "defiscore.io",
      },
      {
        Header: "nexusmutual",
        accessor: "nexusmutual",
      },
    ],
    [],
  )

  console.log(data);


  return (
    <Box>
      <Flex
        width="100vw"
        flexDirection="column"
        bg={bg}
        maxWidth="1024px"
        boxShadow="0px 4px 15px rgba(0,0,0,0.16)"
        p="8"
        mb="20"
        borderRadius="9"
      >
        <CustomTable columns={columns} data={data}/>
      </Flex>
      <Box
        textAlign="center"
        mb="60"
        color={useColorModeValue('#1D2070','white')}
      >
        The information provided is no financial advice. <br/>
        A joint project by <Link href="https://www.opentelos.com" isExternal>Opentelos</Link> and <Link href="https://opty.fi/" isExternal>Optyfi</Link>.
      </Box>
    </Box>
  );
}
