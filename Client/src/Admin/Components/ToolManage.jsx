import { Box, Button, CircularProgress, Flex, FormLabel, Image, Input, Menu, MenuButton, MenuItem, MenuList, Switch, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCaretRight, AiOutlineDelete, AiOutlineEdit, AiOutlineMinus, AiOutlinePause, AiOutlinePlus, } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { UpDownIcon } from '@chakra-ui/icons'
import { MdOutlineFileUpload } from 'react-icons/md'
import { FcUpload } from 'react-icons/fc'

import { FaGripLinesVertical, FaWpforms } from 'react-icons/fa'
import notification from '../../Components/Toast'
import { useSelector } from 'react-redux'

export const ToolManages = () => {

  let [click, setclick] = useState(false);
  const userReducer = useSelector((store) => store)

  const [values, setValues] = useState([]);
  let [data, setData] = useState([])
  let [page, setPage] = useState(1);
  let [total, setTotal] = useState("")
  let [show, setShow] = useState(false);
  let verify = true
  console.log(userReducer);
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValues(file);
    }
  };

  const addData = async () => {


    const formData = new FormData();
    formData.append("csvFile", values);

     
   
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/data/add`,
         formData
      );

      getData()
      notification("success", data.msg);
    } catch (err) {

      notification("error", "Something went wrong");
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

  console.log(data);

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


        <Table variant='simple' >
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead h="60px" bg="red" alignItems="center" >
            <Tr>
              <Th color="white">id</Th>
              <Th color="white">title <Menu >
                <MenuButton bg="" pl="0" _hover={{ background: "" }}>
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">Status
              </Th>
              <Th color="white">logo <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">cover image <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">url
              </Th>
              <Th color="white">tagline
              </Th>
              <Th color="white">Description
              </Th>
              <Th color="white">tags <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">pricing

              </Th>
              <Th color="white">category
              </Th>
              <Th color="white">support <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>


              <Th color="white">galary image <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">youtube embed <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">key feature <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">price amount <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">works with <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">other feature <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">social media <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">likes <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu></Th>
              <Th color="white">featured <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu>
              </Th>
              <Th color="white">higligeted <Menu color="black">
                <MenuButton >
                  <UpDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>

                </MenuList>
              </Menu>
              </Th>
              <Th color="white">note </Th>
              <Th color="white">dashboard  </Th>
              <Th color="white">action  </Th>

            </Tr>


          </Thead>

          <Tbody color="black" fontWeight="500" >

            {
              data?.filter((e) => e.verify).map((el, i) => (
                <Tr key={i}>
                  <Td>{i + 1}</Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="Title" value={el.Title} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td>
                    <Switch type='checkbox' defaultChecked={el.isActive ? true : false} name='isActive' onChange={(event) => handleChange(event, el._id)} />
                  </Td>
                  <Td>
                    <Box>
                      {
                        click ? <Textarea onChange={(event) => handleChange(event, el._id)} name="Logo" value={el.Logo} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /> :
                          <>
                            <Image borderRadius="5px" minW="80px" h="80px" src={el.Logo} />
                            <Flex justifyContent="end" mt="8px">
                              <AiOutlineEdit cursor="pointer" onClick={() => setclick(true)} />
                            </Flex>

                          </>
                      }

                    </Box>



                  </Td>
                  <Td>

                    {
                      click ? <Textarea onChange={(event) => handleChange(event, el._id)} name="Cover_image" value={el.Cover_image} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /> :
                        <>
                          <Image borderRadius="5px" minW="230px" h="120px" src={el.Cover_image} />
                          <Flex justifyContent="end" mt="8px">
                            <AiOutlineEdit cursor="pointer" onClick={() => setclick(true)} />
                          </Flex>

                        </>
                    }
                  </Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="URL" value={el.URL} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={el.URL} /></Td>
                  <Td> <Textarea onChange={(event) => handleChange(event, el._id)} name="Tagline" value={el.Tagline} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Textarea onChange={(event) => handleChange(event, el._id)} name="Description" value={el.Description} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="Title" value={el.Title} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={el.Title} /></Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="Pricing" value={el.Pricing} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={el.Pricing} /></Td>
                  <Td><Textarea onChange={(event) => handleChange(event, el._id)} name="Category" value={el.Category} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="Support" value={el.Support} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={el.Support} /></Td>

                  <Td><Textarea onChange={(event) => handleChange(event, el._id)} name="Galary_image" value={el.Galary_image} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Textarea onChange={(event) => handleChange(event, el._id)} name="Youtube_embed" value={el.Youtube_embed} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Textarea onChange={(event) => handleChange(event, el._id)} name="key_features" value={el.key_features} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="price_amount" value={el.price_amount} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>

                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="works_with" value={el.works_with} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /> </Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="others_features" value={el.others_features} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Textarea onChange={(event) => handleChange(event, el._id)} name="social_media" value={el.social_media} css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td><Input onChange={(event) => handleChange(event, el._id)} name="likes" value={el.likes} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" /></Td>
                  <Td>


                    <Switch type='checkbox' defaultChecked={el.featured ? true : false} name='featured' onChange={(event) => handleChange(event, el._id)} />


                  </Td>
                  <Td>


                    <Switch type='checkbox' defaultChecked={el.highlighted ? true : false} name='highlighted' onChange={(event) => handleChange(event, el._id)} />


                  </Td>
                  <Td><Textarea css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={"note"} /></Td>
                  <Td><Textarea css={{ '&::-webkit-scrollbar': { display: "none" } }} border="none" textAlign="left" borderRadius="3px" pl="0" w="fit-content" placeholder={"dashboard"} /></Td>

                  <Td><Text color="white" borderRadius="5px" w="fit-content" p="8px" justifyContent="center" bg="red"><AiOutlineDelete cursor="pointer" onClick={() => deleteItem(el._id)} style={{ margin: "auto" }} /></Text> </Td>

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

      <Flex zIndex="10" position="fixed" flexDirection="column" bottom="20px" right="22px" justifyContent="end" alignItems="end" color="white">
        <Button _hover={{ bg: "red" }} mt="15px" borderRadius="100%" bg="red" w="fit-content"><BiSearch /></Button>

        <Button _hover={{ bg: "red" }} mt="15px" borderRadius={show ? "5px" : "100%"} bg="red" w="fit-content" alignItems="center" >

          {
            show ? <Flex gap="15px" alignItems="center" justifyContent="space-between">
              <Flex gap="20px" alignItems="center">
                <FcUpload size={22} onClick={addData} />

                <FormLabel cursor="pointer" h="fit-content" m="auto" ml="0px" htmlFor="file">
                  CSV file
                </FormLabel>
              </Flex>
 
            




              <AiOutlineCaretRight  onClick={() => setShow(false)} />
            </Flex> :
              <AiOutlinePlus onClick={() => setShow(true)} />
          }


        </Button>
        <Input
          onChange={handleFileChange}
          id="file"
          type="file"
          accept=".csv"
          name="csvFile"
          display="none" />

        <Button _hover={{ bg: "red" }} onClick={updateData} mt="15px" borderRadius="100%" bg="red" w="fit-content" ><MdOutlineFileUpload /></Button>
      </Flex>

      <Flex w="fit-content" position="fixed" bottom="15px" justifyContent="center" marginLeft="20px" gap="8px" color="white">
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)} _hover={{ bg: "red" }} borderRadius="100%" bg="red"   ><AiOutlineArrowLeft /></Button>

        <Button borderRadius="100%" bg="red" _hover={{ bg: "red" }}>{page}</Button>
        <Button isDisabled={page === total} onClick={() => setPage(page + 1)} _hover={{ bg: "red" }} borderRadius="100%" bg="red" ><AiOutlineArrowRight /></Button>
      </Flex>
    </>
  )
}
