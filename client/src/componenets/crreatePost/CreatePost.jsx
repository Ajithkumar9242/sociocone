import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch  } from 'react-redux'
import { createPost } from '../../store/post/postAction';

const CreatePost = () => {
  const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = async () =>{
        const data = new FormData()
        await data.append("file",image)
        await data.append("upload_preset","sociocone")
        await data.append("cloud_name","dqlckrtgm")
        await fetch(`https://api.cloudinary.com/v1_1/dqlckrtgm/image/upload`,{
            method:"post", body:data
        })
        .then(res=>res.json())
        .then(async data=>{
           console.log(data)
            let postdata = {
                title,
                desc,
                image :data.secure_url
            }
            await dispatch(createPost(postdata))
        })
    }
  return (
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create a new post</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>


              <FormControl id="Title">
                <FormLabel>Title</FormLabel>
                <Input type="text" value={title} onChange={(e) =>setTitle(e.target.value)}/>
              </FormControl>


              <FormControl id="Desc">
                <FormLabel>Description</FormLabel>
                <Input type="text"  value={desc} onChange={(e) =>setDesc(e.target.value)}/>
              </FormControl>
 

            <FormControl id="Pic">
              <FormLabel>Choose Pic</FormLabel>
              <Input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            </FormControl>
            


              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleSubmit}>
                Submit
              </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  
    </>
  )
}

export default CreatePost