import { Box, ScaleFade, SimpleGrid, Slide, SlideFade, Stack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import { SlBadge } from 'react-icons/sl'
import { skillSet, SkillSet } from '../../data/home'
import PageHeader from '../PageHeader'
import '../../App.css'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {}



export function Skills({ }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    console.log('isInView', isInView)

    const directionsX = ['60px', '40px', '-40px', '-60px'];
    const directionsY = ['-60px', '-40px', '40px', '60px']

    function getStats(skills: Array<SkillSet>) {
        return skills.map((skill, i) =>
            <SlideFade
                in={isInView}
                dir='top'
                delay={0.2}
                key={'skill-' + i}
                offsetX={directionsX[i % 4]}
                offsetY={directionsY[i % 4]}
                transition={{
                    enter: {
                        duration: 2
                    }
                }}
                >
                <Stat

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
            </SlideFade>
        )
    }

    return (
        <Stack id='Skills' ref={ref}>
            <PageHeader id="Skills">&lt; Technical Skills &gt;</PageHeader>
            <SimpleGrid p={10} columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                {getStats(skillSet)}
            </SimpleGrid>
        </Stack>

    )
}
