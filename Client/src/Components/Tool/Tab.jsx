import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { Overview } from './Overview'
import ShareModel from '../Share'
import style from "../../Style/Tool.module.css"
import { Link } from "react-scroll"
import { Alternative } from './Alternative'
import { Comment } from './Comment'
import { Embed } from './Embed'

export const Tabcomp = ({ el, id }) => {
    return (


        <Box>

            <Tabs  >
                <TabList>
                    <Flex justifyContent="space-between" w="100%" alignItems="center">
                        <Box overflow="auto" whiteSpace="nowrap" className={style.tscroll}>
                            <Flex className={style.tnav} gap="10px">
                                <Link

                                    activeClass="active"
                                    to="Overview"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Overview</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Alternative"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Alternative tools</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Embed"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Embed</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Reviews"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Reviews</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Request"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Request access</Tab>
                                </Link>




                            </Flex>
                        </Box>

                        <ShareModel />

                    </Flex>


                </TabList>
            </Tabs>





            <Box mt="50px"   >

                <section id="Overview">

                    <Overview el={el} id={id} />

                </section>


                <section id="Alternative">

                    <Alternative id={id} el={el} />
                </section>


                <section id="Embed">
                    <Embed />
                </section>


                <section id="Reviews">
                    <Comment el={el} id={id} />
                </section>

                <section id="Request">

                </section>
            </Box>









        </Box>
    )
}
