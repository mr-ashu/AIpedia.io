import {
    Box,
    Flex,
    Text,
 
} from '@chakra-ui/react';


export const Form4 = ({ tool_own,setTool}) => {

 
    return (
        <Box>
            <Text fontSize="18px" lineHeight="24px" fontWeight="400">Do you own this tool?</Text>
            <form>
                <Flex mt="25px" gap="20px"  >
                    <Box><input onChange={()=>

                    {
                        return setTool(true)
                    }
                    
                    
                    } type='checkBox' /></Box>
                    <Box>
                        <Text fontSize="15px" lineHeight="24px" fontWeight="600">Yes</Text>
                        <Text textAlign="justify" fontSize="14px" lineHeight="24px" fontWeight="400">We welcome you to the AI ZONE Creators world. If you have logged in with your official tools domain registered email, our team will automatically send you a verification link. Upon successful verification, you will be granted access to the "Creators Portal" where you can regularly update your tools details and leverage our exciting features. If you haven't used your official registered domain email, no worries! Simply sign up using your official registered email, and once your tool is live on AI ZONE, you can request access to the Creators Portal, where our team will verify and provide access. Thank you for your contribution!</Text>
                    </Box>

                </Flex>
                <Flex mt="25px" gap="20px"  >
                    <Box><input onChange={()=>{

                   return setTool(false)
                    }} type='checkBox' /></Box>
                    <Box>
                        <Text fontSize="15px" lineHeight="24px" fontWeight="600">No</Text>
                        <Text textAlign="justify" fontSize="14px" lineHeight="24px" fontWeight="400">Thank you for helping us grow our AI ZONE community by submitting a tool!
                            Your contribution means a lot to us.</Text>
                    </Box>

                </Flex>
            </form>
        </Box>
    );
};