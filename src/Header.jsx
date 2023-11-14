import { Box,Text,Button,Center } from "@chakra-ui/react"
export default function Header() {
    return(
    
<Box bgImage="url(https://th.bing.com/th/id/OIP.NMyHeBlFLBum1-LjyBSAlQHaDy?pid=ImgDet&rs=1)" width={1000} height={200} >
    <Center>
      <Box textAlign="center" color="white">
        <Text fontSize="4xl" fontWeight="bold">DOMINA EL TERRENO</Text>
        <Button colorScheme="teal" size="lg" m={4}>VER DETALLES</Button>
        <Button colorScheme="teal" size="lg" m={4}>VER VIDEO</Button>
      </Box>
    </Center>
  </Box>
  
    )
}