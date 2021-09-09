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
  extendTheme
} from "@chakra-ui/react"
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import MainHeader from "./components/MainHeader";
import SmallNav from "./components/SmallNav";
import Main from "./components/Main";
import { Logo } from "./Logo"

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export const App = () => (
  <ChakraProvider theme={theme}>
  <Main>
    <SmallNav />
    <MainHeader />

    <Layout>
      <MainContent/>
    </Layout>
  </Main>
  </ChakraProvider>
)
