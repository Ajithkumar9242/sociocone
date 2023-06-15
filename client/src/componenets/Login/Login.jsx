import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,

  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/auth/AuthActions';

export default function Login() {
  const toast = useToast()
  const dispatch = useDispatch();


  const [loading, setLoading] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
    const navigateTo = useNavigate()

const submitHandler = async () =>{
  setLoading(true)
  if(!email || !password) {
    toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false)
      return
  }

  try {
 
    const data  = {
          email, password
        }
        toast({
        title: "Login Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      dispatch(login(data));

      localStorage.setItem("userInfo" , JSON.stringify(data))
        setLoading(false)
        navigateTo("/home")


  } catch (error) {
    toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      setLoading(false)
        console.log(error);
  }
}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontFamily={'Comfortaa'}>Sign in to your account</Heading>
          <Text fontSize={'lg'}  color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text fontFamily={'Comfortaa'}>Dont have an account?</Text>
                <Link style={{color: "lightblue"}} to={"/register"}>Signup</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick = { submitHandler }
                isLoading = { loading }
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}