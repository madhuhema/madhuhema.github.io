import { Badge, Box, Button, Collapse, Divider, Flex, Heading, SimpleGrid, SlideFade, Stack, Text, useBoolean } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { workExperience } from '../../data/home';

import PageHeader from '../PageHeader'

type Props = {}

function formatDate(date: Date): string {
    return Intl.DateTimeFormat('default', { month: 'short', year: 'numeric' }).format(date);
}

function getExperienceYears(date: Date): string {
    // const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
    // return rtf1.format();
    const currDate = new Date(2020, 11, 30);
    const yearDiff = (currDate.getFullYear() - date.getFullYear());
    const monthDiff = Math.abs(currDate.getMonth() - date.getMonth());
    return monthDiff > 0 ? `${yearDiff}.${monthDiff} years` : `${yearDiff} years`;
}

function collapseDesc(description: string) {
    const [show, toggle] = useBoolean();

    return <>
        <Collapse startingHeight={50} in={show}>
            {description}
        </Collapse>
        <Button size='sm' onClick={() => toggle.toggle()} mt='1rem'>
            Show {show ? 'Less' : 'More'}
        </Button>
    </>
}

export function Work({ }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    console.log('isInView', isInView)

    const directionsX = ['100px', '60px', '-60px', '-100px'];
    const directionsY = ['-100px', '-60px', '60px', '100px']
    return (
        <Box id="Work" ref={ref}>
            <PageHeader>&lt; Work Experience &gt;</PageHeader>
            <Box textAlign={'center'} margin="6">
                <Badge fontSize={'lg'} alignItems={'center'} bgColor={'transparent'} color={'#7B6794'} px="2" py="1">
                    {getExperienceYears(workExperience.at(-1)?.startDate || new Date())}
                </Badge>
            </Box>
            <Box p={10}>
                {
                    workExperience.map((company, i) =>
                        <Stack mt={0} key={company.name + "-" + i} id={company.name + "-" + company.location}>
                            <Heading fontSize={'xl'}>{company.name}&nbsp;<Badge bgColor={'blue.50'}>{company.location}</Badge></Heading>
                            <Flex gap={10}>
                                <Badge bgColor={'red.50'}>{`${formatDate(company.startDate)}-${company.endDate ? formatDate(company.endDate) : 'present'}`}</Badge>
                            </Flex>
                            <Divider pt="3" />
                            <SimpleGrid p={10} columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                                {company.projects.map((project, j) =>
                                    <SlideFade
                                        in={isInView}
                                        dir='top'
                                        delay={0.2}
                                        key={'skill-' + i}
                                        offsetX={directionsX[j % 4]}
                                        offsetY={directionsY[j % 4]}
                                        transition={{
                                            enter: {
                                                duration: 2
                                            }
                                        }}
                                    >
                                        <Stack shadow={'2xl'} padding={'5'} key={project.name + "-" + j}>
                                            <Heading>
                                                <Text fontSize={'xl'}>
                                                    {project.name}
                                                </Text>
                                            </Heading>
                                            <Text as={'i'} fontSize={'sm'}>
                                                {project.position}
                                            </Text>
                                            <Divider />
                                            <Box>{project.techStack}</Box>
                                            <Box>{collapseDesc(project.description)}</Box>
                                        </Stack>
                                    </SlideFade>
                                )}
                            </SimpleGrid>
                        </Stack >
                    )
                }
            </Box >
        </Box >
    )
}