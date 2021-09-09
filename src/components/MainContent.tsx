import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";
import {
  Flex,
  Text,
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
    <Flex
      width="100vw"
      flexDirection="column"
      bg={bg}
      maxWidth="1024px"
      boxShadow="0px 4px 15px rgba(0,0,0,0.16)"
      p="8"
      mb="80"
      borderRadius="9"
    >
      <CustomTable columns={columns} data={data}/>
    </Flex>
  );
}
