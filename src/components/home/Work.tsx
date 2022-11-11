import { Badge, Box, Divider, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { workExperience } from '../../data/home';

import PageHeader from '../PageHeader'

type Props = {}

function formatDate(date: Date): string {
    return Intl.DateTimeFormat('default', { month: 'short', year: 'numeric' }).format(date);
}

function getExperienceYears(date: Date): string {
    // const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
    // return rtf1.format();
    const currDate = new Date();
    const yearDiff = (currDate.getFullYear() - date.getFullYear());
    const monthDiff = Math.abs(currDate.getMonth() - date.getMonth());
    return monthDiff > 0 ? `${yearDiff}.${monthDiff} years` : `${yearDiff} years`;
}

export function Work({ }: Props) {
    return (
        <Box id="Work">
            <PageHeader>&lt; Work Experience &gt;</PageHeader>
            <Box textAlign={'center'} margin="2">
                <Badge fontSize={'md'} alignItems={'center'} bgColor={'red.300'} color="white" px="2" py="1">
                    {getExperienceYears(workExperience.at(-1)?.startDate || new Date())}
                </Badge>
            </Box>
            <Box p={10}>
                {
                    workExperience.map((company, i) =>
                        <Stack mt={'10'} key={company.name + "-" + i} id={company.name + "-" + company.location}>
                            <Heading fontSize={'xl'}>{company.name}&nbsp;<Badge bgColor={'blue.50'}>{company.location}</Badge></Heading>
                            <Flex gap={10}>
                                <Badge bgColor={'red.50'}>{`${formatDate(company.startDate)}-${company.endDate ? formatDate(company.endDate) : 'present'}`}</Badge>
                            </Flex>
                            <Divider pt="3" />
                            <SimpleGrid p={3} columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                                {company.projects.map((project, j) =>
                                    <Stack shadow={'2xl'} padding={'5'} key={project.name  + "-" + j}>
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
                                        <Box>{project.description}</Box>
                                    </Stack>
                                )}
                            </SimpleGrid>
                        </Stack >
                    )
                }
            </Box >
        </Box >
    )
}