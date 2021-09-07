import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Image,
  VStack,
  Code,
  Grid,
  DarkMode,
  theme,
} from "@chakra-ui/react"
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import MainHeader from "./components/MainHeader";
import SmallNav from "./components/SmallNav";
import Main from "./components/Main";
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
  <DarkMode>
  <Main
  >
    {/*<SmallNav />*/}
    <MainHeader />

    <Layout>
      <MainContent/>
    </Layout>
  </Main>
  </DarkMode>
  </ChakraProvider>
)
