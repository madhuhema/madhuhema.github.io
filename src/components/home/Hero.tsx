import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import '../../App.css'
import Blob from '../Blob';

export function Hero() {
  return (
    <Container maxW={"6xl"} mx="auto !important">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack
          flex={{ base: 1, md: 2 }}
          spacing={{ base: 5, md: 10 }}
          position={"relative"}
        >
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            <Flex
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
              flex={1}
            >
              {/* <Blob
            w={"50%"}
            h={"50%"}
            position={"absolute"}
            top={"0%"}
            left={"10%"}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          /> */}
              <Box
                borderRadius={"50%"}
                position={"relative"}
                height={"175px"}
                boxShadow={"2xl"}
                width={"175px"}
                overflow={"hidden"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"top center"}
                  w={"100%"}
                  h={"100%"}
                  src={"/hero-filter1.jpg"}
                  opacity="0.9"
                />
              </Box>
            </Flex>
            <Flex mt="2" flex={2} justify={{ base: 'center', md: 'start' }} align={'center'}>
              <Heading
                lineHeight={1.1}
                fontWeight={800}
                fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
                position={"sticky"}
                textAlign="center"
              >
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, blue.600, gray.400, pink.600)"
                  bgClip="text"
                >
                  &lt; Madhuvanthi H &gt;
                </Text>
                <br />
                <Text
                  width={"100%"}
                  as={"span"}
                  textAlign={"center"}
                  fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                  marginTop={"0"}
                >
                  Angular | React | Node Developer
                </Text>
              </Heading>
            </Flex>
          </Flex>
          <Text px={{ base: 2, md: 10 }} textAlign="justify" color={"gray.500"}>
            A passionate and self-taught full-stack developer with 2.3 years of
            industry experience in Javascript technologies. Developed web
            applications for the Healthcare domain in an Agile-driven
            environments. I'm a flexible developer and can quickly learn and adapt to new technologies.
            Completed Master of Applied Computer Science in Canada.
          </Text>
          <Text px={{ base: 2, md: 10 }} fontWeight="bold">Actively seeking Job opportunities!</Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            <Button
              as={"a"}
              href="mailto:madhunarmi@gmail.com"
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bgGradient="linear(to-r, blue.600, pink.800)"
              _hover={{ bg: "blue.600" }}
            >
              <EmailIcon /> &nbsp;Email
            </Button>
            <Button
              as={"a"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bgGradient="linear(to-r, blue.600, pink.800)"
              _hover={{ bg: "blue.600" }}
              href="https://www.linkedin.com/in/madhuvanthi-hemanathan-54798a148/"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              as={"a"}
              size={"lg"}
              fontWeight={"normal"}
              colorScheme={"purple"}
              bgGradient="linear(to-r, purple.500, pink.700)"
              _hover={{ bg: "purple.500" }}
              px={6}
              href={"https://github.com/madhuhema"}
              target={"_blank"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
