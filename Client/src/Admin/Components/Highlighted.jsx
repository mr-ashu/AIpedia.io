import { Box, Button,  CircularProgress, Flex, Image, Input,  Switch, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDelete, AiOutlineEdit,   AiOutlinePlus, } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
 
import { MdOutlineFileUpload } from 'react-icons/md'
 

export const Highlighted = () => {

  let [click, setclick] = useState(false);

  let [data, setData] = useState([])
  let [page, setPage] = useState(1);
  let [total, setTotal] = useState("")

  const [showLoader, setShowLoader] = useState(true);

  const getData = async (page) => {



    try {

      await axios.post(
        `${process.env.REACT_APP_API}/data/get?page=${page}`,

      ).then((res) => {

        setData(res.data.data)
        setTotal(res.data.page)

        setShowLoader(false)
      })




    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {

    getData(page)


  }, [page])

  const handleChange = (event, i) => {



    let n = data?.map((el, id) => {
      if (el._id === i) {
        if (event.target.type === "checkbox") {
          el[event.target.name] = event.target.checked
        }
        else {
          el[event.target.name] = event.target.value
        }

      }
      return el
    })
    setData(n)





  };



  const updateData = async () => {
    try {

      axios.patch(`${process.env.REACT_APP_API}/data/update`, data)
        .then((res) => {

          getData()
          alert("Sucessfully update!")
        })

    } catch (e) {
      alert(e.message)
    }


  }

 

  const deleteItem = (id) => {
    axios.delete(`${process.env.REACT_APP_API}/data/delete/${id}`)
      .then((res) => {
        getData()
        alert("Sucessfully Delete!")
      })
  }






  return (

    <>

      <TableContainer color="white"
        css={{
          '&::-webkit-scrollbar': {
            display: "none",
          },

        }}>


        <Table variant='simple' color="black" fontWeight="500">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead bg="red" h="60px" alignItems="center" >
            <Tr>
              <Th color="white">id</Th>
              <Th color="white">title</Th>
              <Th color="white">logo</Th>
             
              <Th color="white">Status</Th>
            
              <Th color="white">about</Th>
              <Th color="white">likes </Th>
              <Th color="white">visibility</Th>
              <Th color="white">Remove</Th>

            </Tr>


          </Thead>

          <Tbody cplor="black" fontWeight="500" >

            {
              data?.map((el, i) => (
                <Tr key={i}>
                  <Td>{i + 1}</Td>
                  
                  <Td><Input w="fit-content" onChange={(event) => handleChange(event, el._id)} name="Title" value={el.Title} border="none" textAlign="left" borderRadius="3px" pl="0"   placeholder={el.Title} /></Td>
                  <Td>
                    <Box w="100%">
                      {
                        click ? <Textarea onChange={(event) => handleChange(event, el._id)} name="Logo" value={el.Logo} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={el.Logo} /> :
                          <>
                            <Image borderRadius="5px"   minW="60px"  h="60px"   src={el.Logo} />
                            <Flex justifyContent="end" mt="8px">
                              <AiOutlineEdit cursor="pointer" onClick={() => setclick(true)} />
                            </Flex>

                          </>
                      }

                    </Box>



                  </Td>
                  <Td>
                  <Switch type='checkbox' isChecked={el.isActive?true:false} />
                  </Td>
             
                
 
                  <Td><Input w="fit-content" onChange={(event) => handleChange(event, el._id)} name="Tagline" value={el.Tagline} border="none" textAlign="left" borderRadius="3px" pl="0"   placeholder={el.Pricing} /></Td>  
                  <Td><Input w="fit-content" onChange={(event) => handleChange(event, el._id)} name="likes" value={el.likes} border="none" textAlign="left" borderRadius="3px" pl="0"  placeholder={el.price_amount} /></Td>

                  <Td>
                    <Switch/>
                  </Td>
                  <Td ><Text color="white" borderRadius="5px" w="fit-content" p="8px" justifyContent="center" bg="red"><AiOutlineDelete cursor="pointer" onClick={() => deleteItem(el._id)} style={{ margin: "auto" }} /></Text> </Td>

                </Tr>
              ))

            }


          </Tbody>

        </Table>
      </TableContainer>
      {showLoader ? (
        <Box
          height="100px"
          w="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Box>
      ) : null}
      <Box zIndex="10" position="fixed" display="grid" bottom="20px" right="22px" color="white">
        <Button _hover={{ bg: "red" }} mt="15px" borderRadius="100%" bg="red" ><BiSearch /></Button>
        <Button _hover={{ bg: "red" }} mt="15px" borderRadius="100%" bg="red" ><AiOutlinePlus /></Button>
        <Button _hover={{ bg: "red" }} onClick={updateData} mt="15px" borderRadius="100%" bg="red" ><MdOutlineFileUpload /></Button>
      </Box>

      <Flex color="white" w="fit-content" position="fixed" bottom="15px" justifyContent="center" marginLeft="20px" gap="8px">
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)} _hover={{ bg: "red" }} borderRadius="100%" bg="red"   ><AiOutlineArrowLeft /></Button>
        <Button borderRadius="100%" bg="red" _hover={{ bg: "red" }}>{page}</Button>
        <Button isDisabled={page === total} onClick={() => setPage(page + 1)} _hover={{ bg: "red" }} borderRadius="100%" bg="red" ><AiOutlineArrowRight/></Button>
      </Flex>
    </>
  )
}
