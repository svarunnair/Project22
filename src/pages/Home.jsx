// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData } from '../redux/data/action'

// function Home() {

//     const mainData=useSelector((store)=>store.data.data)
//     const dispatch=useDispatch()

//     console.log("mainData",mainData)

//     useEffect(()=>{
//       dispatch(getData())
//     },[])

//   return (
//     <div>Home
//       {mainData.map((item)=>(
//         <>
//         <img src={item.image}/>


//         </>
//       ))}
//     </div>
//   )
// }

// export default Home





import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, postCart } from '../redux/data/action'
import { useEffect } from 'react'

export default function Home() {

    const mainData=useSelector((store)=>store.data.data)
    const dispatch=useDispatch()

    console.log("mainData",mainData)

    useEffect(()=>{
      dispatch(getData())
    },[])

    const handleCart=(item)=>{
      dispatch(postCart(item))
    }


  return (

    <>

    {mainData.map((item)=>(
      <>

<Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={item.image}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'}>
         {item.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          $.{item.price} /-
        </Text>
        <Text
          textAlign={'center'}
          color={('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Text color={'blue.400'}>#tag</Text> me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          {/* <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button> */}
          <Button onClick={()=>handleCart(item)}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Center>


      
      
      </>
    ))}
    
    

    


    </>

  )
}