import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const HandleSignIn = () => {
    navigate("/home");
  };
  return (
    <Flex
      flexDirection="column"
      width="76%"
      borderRadius={10}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "auto", md: "422.64px" }}>
          <form >
            <Stack
              spacing={4}
              p="2rem"
              backgroundColor="whiteAlpha.900"
              borderRadius={10}
            >
              <FormControl>
                <Box mb={"5px"}>Email address</Box>
                <InputGroup>
                  <Input type="email" placeholder="Johndoe@gmail.com" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Box mb={"5px"}>Password</Box>
                <InputGroup>
                  <Input type="password" placeholder="Password" />
                </InputGroup>
                <FormHelperText textAlign="left">
                  <Link color={"#605BFF"}>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={10}
                onClick={(e)=>HandleSignIn(e)}
               
                variant="solid"
                backgroundColor="#605BFF"
                width="full"
                color="white"
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    
  );
};

export default Form;
