import { Badge, Box, Divider, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { AiOutlineLink } from 'react-icons/ai'
import { BiShowAlt } from 'react-icons/bi'
import { gitProjects } from '../../data/home/git-projects'
import PageHeader from '../PageHeader'

type Props = {}

export function GitProjects({ }: Props) {
    return (
        <Box p={{ base: 2, md: 10 }} id="GitProjects">
            <PageHeader>&lt; Personal Projects &gt;</PageHeader>
            <SimpleGrid p={10} columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                {gitProjects.map((project, i) =>
                    <Box key={"git-" + i} shadow={'2xl'} p={5}>
                        <Heading fontSize={'xl'}>{project.name}</Heading>
                        {project.link && <Flex align="center"><AiOutlineLink></AiOutlineLink> <Link href={project.link} isExternal>&nbsp;{project.repoName}</Link></Flex>}
                        {project.demo && <Flex align="center"><BiShowAlt></BiShowAlt> <Link href={project.demo} isExternal>&nbsp;demo</Link></Flex>}
                        <Text>{project.techStack.split(",").map((stack, j) =>
                            < Badge key={"git-" + i + "ts-" + j} m="1" bgColor={'#7B6794'} color={'white'}> {stack}</Badge>
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