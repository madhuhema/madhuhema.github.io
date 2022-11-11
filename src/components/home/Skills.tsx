import { Box, SimpleGrid, Stack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import { SlBadge } from 'react-icons/sl'
import { skillSet, SkillSet } from '../../data/home'
import PageHeader from '../PageHeader'

type Props = {}



export function Skills({ }: Props) {

    function getStats(skills: Array<SkillSet>) {
        return skills.map((skill, i) =>
            <Stat
                key={'skill-' + i}
                px={{ base: 4, md: 8 }}
                py={'5'}
                shadow={'xl'}
                position={'relative'}
            >
                <StatLabel fontSize="md">
                    <Stack direction="row" align="center">
                        <Box>{skill.label}</Box>
                        {
                            skill.certified && <>&nbsp;<SlBadge /></>
                        }
                    </Stack>
                </StatLabel>
                <StatNumber>{skill.scale}</StatNumber>
                <StatHelpText>
                    out of 5
                </StatHelpText>
            </Stat >
        )
    }

    return (
        <Stack id='Skills'>
            <PageHeader id="Skills">&lt; Technical Skills &gt;</PageHeader>
            <SimpleGrid p={10} columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                {getStats(skillSet)}
            </SimpleGrid>
        </Stack>
    )
}
