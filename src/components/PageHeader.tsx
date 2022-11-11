import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Blob from './Blob';

type Props = { id?: string };
export default function PageHeader({ id, children }: PropsWithChildren<Props>) {
    return (
        <Box position={'relative'} w={'100%'}>
            <Heading textAlign={'center'}>{children}</Heading>
            <Blob
                w={'200%'}
                h={'200%'}
                position={'absolute'}
                top={'-50%'}
                left={0}
                zIndex={-1}
                color={useColorModeValue('red.50', 'red.400')} />
        </Box>
    )
}