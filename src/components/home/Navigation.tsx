import { BiCodeAlt } from 'react-icons/bi';

import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
  useBoolean,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {FiGithub, FiLinkedin} from 'react-icons/fi'

import {
  NAV_ITEMS,
  NavItem,
} from '../../data/home';
import Blob from '../Blob';

export const Navigation = function () {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box width={"100%"}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex alignItems={"center"} justify={'space-between'} as="a" href={'/'} position={'relative'} zIndex={2}>
            <Blob
              w={'100%'}
              h={'100%'}
              position={'absolute'}
              z={100}
              top={0}
              left={'0%'}
              zIndex={-1}
              color={useColorModeValue('red.100', 'red.400')}></Blob>
            <Box p={3}>
              <Icon className='shake-vertical' as={BiCodeAlt} w={8} h={8} />
            </Box>
            <Stack spacing={'0'}>
              <Text as={'b'} fontSize={{ base: 'xs', md: 'md' }}>Madhu</Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }}>Developer</Text>
            </Stack>
            {/* <Box pl={3}>&gt;</Box> */}
          </Flex>
          <Spacer />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Spacer />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <IconButton
            as={'a'}
            fontSize={'lg'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontWeight={400}
            colorScheme={'blue'}
            bgGradient='linear(to-r, blue.600, pink.800)'
            _hover={{ bg: 'blue.600' }}
            href={'https://www.linkedin.com/in/madhuvanthi-hemanathan-54798a148/'}
            target={'_blank'}
            aria-label='linkedIn'
            icon={<FiLinkedin/>}
          />
          <IconButton
            as={'a'}
            fontSize={'lg'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontWeight={600}
            colorScheme={'purple'}
            bgGradient='linear(to-r, purple.500, pink.700)'
            _hover={{ bg: 'purple.500' }}
            href={'https://github.com/madhuhema'}
            target={'_blank'}
            aria-label='github'
            icon={<FiGithub/>}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} align={'center'}>
      {NAV_ITEMS.map((navItem, i) => (
        HoverMenu(navItem, linkColor, linkHoverColor, popoverContentBgColor, i)
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem, i) => (
        <MobileNavItem key={navItem.label + "-" + i} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = (id: string) => {
    document.getElementById(id.indexOf('#') == 0 ? id.substring(1) : id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        onTouchStart={(evt) => handleClick(href ?? '#')}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            onTouchStart={(evt) => evt.stopPropagation()}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0' }}>
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child, i) => (
              <Link onTouchStart={(evt) => handleClick(child.href ?? '#')} key={child.label + "-" + i} py={2}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

function HoverMenu(navItem: NavItem, linkColor: string, linkHoverColor: string, popoverContentBgColor: string, i: number): JSX.Element {
  const [hover, setHover] = useBoolean()
  const handleClick = (id: string) => {
    document.getElementById(id.indexOf('#') == 0 ? id.substring(1) : id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return <Box key={navItem.label + "-" + i} position={'relative'} zIndex={2} onMouseEnter={setHover.on} onMouseLeave={setHover.off}>
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        {navItem.isExternal ? <Link
          p={2}
          href={navItem.href} isExternal
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}>
          {navItem.label}
        </Link> : <Link
          p={2}
          onClick={(evt) => handleClick(navItem.href ?? '#')}
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}>
          {navItem.label}
        </Link>}
      </PopoverTrigger>

      {navItem.children && (
        <PopoverContent
          border={0}
          boxShadow={'xl'}
          bg={popoverContentBgColor}
          p={4}
          rounded={'xl'}
          minW={'sm'}>
          <PopoverArrow />
          <Stack>
            {navItem.children.map((child, i) => (
              <DesktopSubNav key={child.label + "-" + i} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
    <Blob
      w={'150%'}
      h={'150%'}
      position={'absolute'}
      z={100}
      top={0}
      left={'0%'}
      zIndex={-1}
      color={useColorModeValue('red.100', 'red.400')}
      visibility={hover ? 'visible' : 'hidden'}
    >
    </Blob>
  </Box>;
}
