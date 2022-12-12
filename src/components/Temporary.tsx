import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Logo } from "../Logo"
import { useState, useEffect } from "react"

const URL = 'http://localhost:8000/api/v1/surgical_procedure/list';

export const Temporary = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(URL, {
          method: 'GET',
        }).then((response) => response.json())
        .then((list_) => {
          console.log(list_)
          setData((d) => list_)
    });
    }, []);
    
    return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Stat>
          <StatLabel>{data.length > 0 ? data[0]['surgical_procedure']: "Loading"}</StatLabel>
          <StatNumber>{data.length > 0 ? data[0]['count']: "Loading"}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>{data.length > 0 ? data[1]['surgical_procedure']: "Loading"}</StatLabel>
          <StatNumber>{data.length > 0 ? data[1]['count']: "Loading"}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>{data.length > 0 ? data[4]['surgical_procedure']: "Loading"}</StatLabel>
          <StatNumber>{data.length > 0 ? data[4]['count']: "Loading"}</StatNumber>
        </Stat>
      </Grid>
    </Box>
    )
}