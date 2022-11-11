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

import Blob from '../Blob';

export function Hero() {
  return (
    <Container maxW={"7xl"} mx="auto !important">
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
              Angular | Node Developer
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            A passionate and self-taught full-stack developer with 2.3 years of
            industry experience in Javascript technologies. Developed web
            applications for the Healthcare domain in an Agile-driven
            environment. Master of Applied Computer Science in Canada. Actively
          </Text>
          <Text fontWeight="bold">Actively seeking Job opportunity</Text>
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
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"right center"}
              w={"100%"}
              h={"100%"}
              src={"/hero2.jpg"}
              opacity="0.9"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
