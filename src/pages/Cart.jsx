

import {
  Box,
  Center,
  
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../redux/data/action'


export default function Cart() {

const cartData=useSelector((store)=>store.data.getCart)
const dispatch=useDispatch()

console.log("cartData",cartData)

useEffect(()=>{
    dispatch(getCart())
},[])





  return (


   <>

   cart
   {cartData.map((item)=>(
    <>

<Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
           
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
           
          
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
            {item.name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
           
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} color={'white'}>
             {item.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>

    
    
    
    </>
   ))}


    

    </>



  )
}