import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Navigation, GitProjects, Hero, Skills, Work } from '../components/home'

type Props = {}

export default function Home({ }: Props) {
    return (
        <Stack>
            <Navigation />
            <Hero />
            <Skills />
            <Work />
            <GitProjects />
        </Stack>
    )
}