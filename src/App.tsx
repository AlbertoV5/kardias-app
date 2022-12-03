import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Temporary } from "./components/Temporary"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Temporary></Temporary>
  </ChakraProvider>
)
