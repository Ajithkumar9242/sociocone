import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup"
import { useFormik } from 'formik';
import { register } from '../../store/auth/AuthActions';


export default function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstname] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState()
    const toast = useToast()
    const navigateTo = useNavigate()
  const dispatch = useDispatch();
  const authState = useSelector(state=>state.auth)
  const {isRegisterSuccess,message} = authState

   const submitHandler = async () =>{
      setLoading(true)
      if(!firstName || !lastName || !email || !password || !confirmPassword){
        toast({
        title: "Please Enter All Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        })
        setLoading(false)
        return
      }
      if(password !== confirmPassword){
        toast({
        title: "Please Match Passwords",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
        return
      }

      try {
        const  data  = {
          firstName, lastName, email, password, confirmPassword
        }

        toast({
        title: "Registered Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
         dispatch(register(data))


        setLoading(false)

        navigateTo("/")
      } catch (error) {
        toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
        console.log(error);
        setLoading(false)
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
          <Heading fontSize={'4xl'} fontFamily={'Comfortaa'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'}  color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={(e) => setFirstname(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

               <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={submitHandler}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link style={{color: "lightblue"}} to={"/"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}