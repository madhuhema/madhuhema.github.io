import { Badge, Box, Divider, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { AiOutlineLink } from 'react-icons/ai'
import { gitProjects } from '../../data/home/git-projects'
import PageHeader from '../PageHeader'

type Props = {}

export function GitProjects({ }: Props) {
    return (
        <Box p={10} id="GitProjects">
            <PageHeader>&lt; Personal Projects &gt;</PageHeader>
            <SimpleGrid p={3} columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                {gitProjects.map((project, i) =>
                    <Box key={"git-" + i} shadow={'2xl'} p={5}>
                        <Heading fontSize={'xl'}>{project.name}</Heading>
                        <Flex align="center"><AiOutlineLink></AiOutlineLink> <Link href={project.link} isExternal>{project.repoName}</Link></Flex>
                        <Text>{project.techStack.split(",").map((stack, j) =>
                            < Badge key={"git-"+ i + "ts-" + j} m="1" bgColor={'red.300'} color="white"> {stack}</Badge>
                        )}</Text>
                        {project.description && <Divider />}
                        <Stack>
                            <Text>{project.description}</Text>
                        </Stack>
                    </Box>
                )
                }
            </SimpleGrid >
        </Box >
    )
}