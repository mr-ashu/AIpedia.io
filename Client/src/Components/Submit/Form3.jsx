import {
  
    Box,
 
    Flex,
    FormControl,
 
    FormLabel,
    Input,
 
    Text,
    Divider,
 
    Stack,
    Image,
} from '@chakra-ui/react';
import axios from 'axios';
 

export const Form3 = ({thumbnail, cover_image, gallery, setthumbnail,setgallery,setcoverimg,handlechange,youtube_url}) => {
    
 
    

    const addImage = async (event) => {
     
        let image = event.target.files[0];
      
        const dataImg = new FormData();
        dataImg.append("file", image);
        dataImg.append("upload_preset", process.env.REACT_APP_PRESET);
        dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
       
       
       
        let { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          dataImg
        );
    
        setthumbnail(data.url);
      
      };



      const addcoverimg = async (event) => {
     
        let image = event.target.files[0];
      
        const dataImg = new FormData();
        dataImg.append("file", image);
        dataImg.append("upload_preset", process.env.REACT_APP_PRESET);
        dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
       
       
       
        let { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          dataImg
        );
    
        setcoverimg(data.url);
       
      
      };


      const addgallery = async (event) => {
      
        let image = event.target.files[0];
      
        const dataImg = new FormData();
        dataImg.append("file", image);
        dataImg.append("upload_preset", process.env.REACT_APP_PRESET);
        dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
       
       
       
        let { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          dataImg
        );
    
        setgallery([...gallery,data.url]);
      
 
      
      };




    return (
        <>

            <Box>
                <Text fontSize="18px" lineHeight="24.5px" fontWeight="400">Thumbnail</Text>
                <Flex mt="15px" gap="30px">
                    <Box w="103px" h="103px" borderRadius="3px" border="1px dotted" >
                        <Image boxSize={"103px"} src={thumbnail} w="100%"/>
                    </Box>
                    <Box textAlign="center">
                        <Box>



                            <FormLabel

                                textAlign={"center"}
                                htmlFor="file"
                            >

                                <Text bg="#3B89B6" py="5px" px="10px" borderRadius="3px" color="white"> Upload</Text>

                            </FormLabel>

                            <Input
                                type="file"
                                id="file"
                                display={"none"}
                                onChange={addImage}

                            />

                        </Box>
                        <Text>
                            or
                        </Text>
                        <Text fontSize="11px" lineHeight="20px" fontWeight="400" color="#3B89B6">Paste a URL</Text>
                    </Box>
                </Flex>

                <Text mt="15px" fontSize="12px" lineHeight="20px" fontWeight="400">Recommended size:100x100| JPG, PNG, GIF. Max size: 1.50MB</Text>
                <Divider mt="30px" mb="30px" border="1px solid" />
                <Text mb="15px" fontSize="18px" lineHeight="24.5px" fontWeight="400">Cover image</Text>
                <Text mt="15px" fontSize="12px" lineHeight="20px" fontWeight="400">This image will be used as preview of your tool</Text>

                <Stack  backgroundImage={cover_image} backgroundSize="100%" alignItems="center" justifyContent="center" textAlign="center" border="1px dotted" width="70%" height="200px" >
                    <Box  >
                        

                        <FormLabel

                            textAlign={"center"}
                            htmlFor="cfile"
                        >

                            <Text w="fit-content" m="auto" bg="#3B89B6" py="5px" px="10px" borderRadius="3px" color="white"> Upload</Text>

                        </FormLabel>

                        <Input
                            type="file"
                            id="cfile"
                            display={"none"}

                            onChange={(e)=>addcoverimg(e)}

                        />

                        <Text mt="15px" fontSize="11px" lineHeight="20px" fontWeight="400" color="#3B89B6">Paste a URL</Text>
                        <Text mt="15px" fontSize="12px" lineHeight="20px" fontWeight="400">Recommended size:1440x1024| JPG, PNG. Max size: 2MB</Text>
                    </Box>
                </Stack>

                <Divider mt="30px" mb="30px" border="1px solid" />

                <Text fontSize="18px" lineHeight="24.5px" fontWeight="400">Gallery</Text>

                <Text fontSize="14px" lineHeight="32px" fontWeight="400">Upload up to 3 images showcasing your tool's features and benefits.</Text>

                <Flex gap="10px">
                    <Stack  backgroundImage={gallery[0]} backgroundSize="100%" mt="10px" alignItems="center" justifyContent="center" textAlign="center" width="154px" height="110px" border="1px dotted">


                        <FormLabel

                            textAlign={"center"}
                            htmlFor="gfile"
                        >

                            <Text py="5px" px="10px" borderRadius="3px" > +Upload</Text>

                        </FormLabel>

                        <Input
                            type="file"
                            id="gfile"
                            display={"none"}
                            onChange={addgallery}
                        />






                    </Stack>
                    <Stack  backgroundImage={gallery[1]} backgroundSize="100%" mt="10px" alignItems="center" justifyContent="center" textAlign="center" width="154px" height="110px" border="1px dotted">


                        <FormLabel

                            textAlign={"center"}
                            htmlFor="gfile"
                        >

                            <Text py="5px" px="10px" borderRadius="3px" > +Upload</Text>

                        </FormLabel>

                        <Input
                            type="file"
                            id="gfile"
                            display={"none"}
                         
                        />






                    </Stack>
                    <Stack  backgroundImage={gallery[2]} backgroundSize="100%" mt="10px" alignItems="center" justifyContent="center" textAlign="center" width="154px" height="110px" border="1px dotted">


                        <FormLabel

                            textAlign={"center"}
                            htmlFor="gfile"
                        >

                            <Text py="5px" px="10px" borderRadius="3px" > +Upload</Text>

                        </FormLabel>

                        <Input
                            type="file"
                            id="gfile"
                            display={"none"}
                         
                        />






                    </Stack>
                </Flex>



                <Divider mt="30px" mb="30px" border="1px solid" />

                <Text fontSize="18px" lineHeight="32px" fontWeight="400">YouTube video</Text>

                <Text fontSize="14px" lineHeight="32px" fontWeight="400">Provide us with your YouTube video link, and we will embed it on your tool's page</Text>
                <FormControl   >
                    <FormLabel fontSize="14px" lineHeight="24px" fontWeight="400">
                        Link to the video
                    </FormLabel>
                    <Input name="youtube_url" value={youtube_url} onChange={handlechange}/>

                </FormControl>
            </Box>
        </>
    );
};