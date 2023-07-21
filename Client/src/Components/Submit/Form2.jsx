import {
 
    Box,
    Flex,
    Input,
    Text,
    Divider,
    FormControl,
    FormLabel,
    Textarea,
   
} from '@chakra-ui/react';
import {   AiFillDollarCircle, AiFillUnlock } from 'react-icons/ai';
 
import { BsClockHistory, BsFillGiftFill } from 'react-icons/bs';

export const Form2 = ({handlechange,Pricing, price_amount,Tags,setTag }) => {
    
    
    
    return (


        <Box >
            <Text fontWeight="400" lineHeight="24px" fontSize="20px">Price</Text>
            <Flex gap="20px" mt="20px" >
                <Box w="fit-content"><input   value={"Free"} name="Pricing"  onChange={handlechange} type='checkBox' /></Box>
                <Box>
                    <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                        <BsFillGiftFill />
                        <Text>Free</Text>
                    </Flex>

                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify">If you choose to list your tool as "Free," it means that users can access and use your tool without having to pay any fee.</Text>
                </Box>

            </Flex>
            <Flex gap="20px" mt="15px"  >
                <Box w="fit-content"><input type='checkBox' value={ "Freetrial" } name="Pricing"  onChange={handlechange} /></Box>
                <Box>
                    <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                        <BsClockHistory />
                        <Text> Freetrial</Text>
                    </Flex>
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify"  >If you choose to list your tool as "Free trial," it means users can access and use the tool without paying any fees for limited period . It allows individuals or organizations to experience the full functionality and features of the product or service for a specified duration, typically without any financial commitment.</Text>
                </Box>

            </Flex>
            <Flex gap="20px" mt="15px" >
                <Box><input type='checkBox' value={ "Freemium" }   name="Pricing"  onChange={handlechange} /></Box>
                <Box>
                    <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                        <AiFillUnlock />
                        <Text> Freemium</Text>
                    </Flex>
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify" >If you choose to list your tool as "Freemium," it means that you are offering both a free and a paid version of your tool.</Text>
                </Box>

            </Flex>
            <Flex gap="20px" mt="15px" >
                <Box w="fit-content"><input   value={ "Paid" }  name="Pricing"  onChange={handlechange} type='checkBox' /></Box>
                <Box>
                    <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                        <AiFillDollarCircle />
                        <Text>Paid</Text>
                    </Flex>
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify"  >If you choose to list your tool as "Paid," it means that users will need to pay a fee to access and use your tool.</Text>
                </Box>

            </Flex>

            <Divider mt="30px" mb="30px" border="1px solid" />

            <Text fontSize="20px" fontWeight="400" lineHeight="24px">Price amount </Text>

            <Flex gap="20px" mt="20px">
                <Text fontSize="14px" fontWeight="400" lineHeight="24px">Starting from </Text>
                <Input name='price_amount' value={price_amount} onChange={handlechange} w="84px" placeholder='$' />
            </Flex>

            <Divider mt="30px" mb="30px" border="1px solid" />
            <FormControl mt="30px" >
                <Flex alignItems="center" justifyContent="space-between">
                    <FormLabel  >
                         Tags
                    </FormLabel>
                    <Text fontSize="14px" fontWeight="400">250 characters max</Text>
                </Flex>
                <Textarea

                    type="textArea"
                    rows={5}
                 
                    value={Tags.join('\n')}
                    name="Tags"
                    onChange={(e) => setTag(e.target.value.split('\n'))}

                    borderRadius="4px" placeholder="Tags for your tool" />

            </FormControl>
            {/* <Text fontSize="20px" fontWeight="400" lineHeight="24px">Deals</Text>

            <Flex gap="20px" mt="20px" fontSize="14px" fontWeight="400" lineHeight="24px" alignItems="center">
                <FormControl mt="15px" >
                    <FormLabel  >
                        Promo code
                    </FormLabel>
                    <Input name='promo_code' value={promo_code} onChange={handlechange} borderRadius="3px" placeholder="AIPEDIA30" />

                </FormControl>

                <FormControl mt="15px"  >
                    <FormLabel  >
                        What is the offer?
                    </FormLabel>
                    <Input name='offer' value={offer} onChange={handlechange} borderRadius="3px" placeholder="30% discount on student plan" />

                </FormControl>




            </Flex>
            <FormControl mt="15px" >
                <FormLabel  >
                    Expiration Date
                </FormLabel>
                <Input name='expire_date' value={expire_date} onChange={handlechange} borderRadius="3px" placeholder="Expiration Date" />

            </FormControl> */}






        </Box>











    );
};