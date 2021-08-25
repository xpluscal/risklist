import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import Layout from "./components/Layout";
import MainNav from "./components/MainNav";
import MainContent from "./components/MainContent";
import Main from "./components/Main";
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
  <Main
  >
    <MainNav />

    <Layout>
      <MainContent/>
    </Layout>
  </Main>
  </ChakraProvider>
)
