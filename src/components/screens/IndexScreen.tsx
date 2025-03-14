'use client';

import {
	Badge,
	Box,
	Button,
	Card,
	CardBody,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Grid,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	Link,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	VStack,
	useDisclosure
} from '@chakra-ui/react';

import { useRef } from 'react';
import { FaClock, FaPlane, FaUsers } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';

export default function IndexScreen() {
	const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
	const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<Box minH='100vh' display='flex' flexDirection='column'>
			<Box
				as='header'
				position='sticky'
				top={0}
				zIndex={40}
				w='full'
				borderBottom='1px'
				borderColor='gray.200'
				bg='brand.primary'
				color='white'
			>
				{/*<Center h='30px' w='100%' bg='brand.light'>
					<Text color='brand.primary' fontWeight='bold'>
						ENJOY A COMBO DISCOUNT OF 5% WHEN MAKING YOUR SECOND RESERVATION!
					</Text>
				</Center>*/}
				<Container maxW='container.xl' py={4}>
					<Flex h='16' alignItems='center' justifyContent='space-between'>
						<Flex alignItems='center' gap={2}>
							<Image
								src='/logo-alt.png'
								alt='Tenerife Airport Transfers Logo'
								width={32}
								height={32}
								borderRadius='md'
								style={{
									width: '50px',
									height: '50px'
								}}
								p={1}
							/>
							<Text fontWeight='bold' fontSize='xl' fontStyle='italic'>
								Tenerife Airport Transfers
							</Text>
						</Flex>

						<IconButton
							ref={btnRef}
							display={{ base: 'flex', md: 'none' }}
							aria-label='Open menu'
							icon={<Icon as={HiOutlineMenu} w={6} h={6} />}
							onClick={onMenuOpen}
							variant='ghost'
							color='white'
						/>

						<Drawer isOpen={isMenuOpen} placement='right' onClose={onMenuClose} finalFocusRef={btnRef}>
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader borderBottomWidth='1px' bg='brand.primary' color='white'>
									Menu
								</DrawerHeader>
								<DrawerBody>
									<VStack spacing={4} align='stretch' pt={4}>
										<Link href='/' fontWeight='bold' onClick={onMenuClose}>
											Home
										</Link>
										<Link href='#' onClick={onMenuClose}>
											Airport Transfers
										</Link>
										<Link href='#' onClick={onMenuClose}>
											FAQ
										</Link>
										<Link href='#' onClick={onMenuClose}>
											Destinations
										</Link>
										<Link href='#' onClick={onMenuClose}>
											Contact
										</Link>
										<Button variant='primary' w='full' onClick={onModalOpen}>
											BOOK NOW
										</Button>
									</VStack>
								</DrawerBody>
							</DrawerContent>
						</Drawer>

						<HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
							<Link
								href='/'
								fontWeight='bold'
								fontSize='sm'
								_hover={{ color: 'brand.secondary' }}
								textDecor='underline'
							>
								Home
							</Link>
							<Link
								href='#services'
								fontWeight='medium'
								fontSize='sm'
								_hover={{ color: 'brand.secondary' }}
							>
								Airport Transfers
							</Link>
							<Link href='#' fontWeight='medium' fontSize='sm' _hover={{ color: 'brand.secondary' }}>
								FAQ
							</Link>
							<Link href='#' fontWeight='medium' fontSize='sm' _hover={{ color: 'brand.secondary' }}>
								Destination
							</Link>
							<Link
								href='#contact'
								fontWeight='medium'
								fontSize='sm'
								_hover={{ color: 'brand.secondary' }}
							>
								Contact
							</Link>
						</HStack>

						<Button
							display={{ base: 'none', md: 'flex' }}
							variant='secondary'
							rightIcon={<Icon as={FiArrowRight} w={4} h={4} />}
							onClick={onModalOpen}
						>
							BOOK NOW
						</Button>
					</Flex>
				</Container>
			</Box>

			<Box as='main' flex='1'>
				<Box w='full' bgImage='url(/hero-bg.jpg)' bgRepeat='no-repeat' bgSize='cover' color='white'>
					<Box
						w='full'
						h='full'
						bg='linear-gradient(#0F2657, #0F265750)'
						py={{ base: 12, md: 24, lg: 32, xl: 48 }}
					>
						<Container maxW='container.xl' px={{ base: 4, md: 6 }} py='50px'>
							<Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} gap={{ base: 6, lg: 12 }}>
								<VStack alignItems='flex-start' justifyContent='center' spacing={4}>
									<Box>
										<Heading
											as='h1'
											fontSize={{ base: '3xl', sm: '5xl', xl: '6xl' }}
											fontWeight='bold'
											lineHeight='tight'
											textShadow='2px 2px 2px #00000050'
										>
											Reliable Airport Transfers in Tenerife
										</Heading>
										<Text
											maxW='600px'
											opacity={0.9}
											mt={2}
											fontSize={{ md: 'xl' }}
											textShadow='2px 2px 2px #00000050'
										>
											Safe, comfortable, and punctual transportation from Tenerife airports to
											your destination.
										</Text>
									</Box>
									<Stack direction={{ base: 'column', sm: 'row' }} spacing={2}>
										<Button
											size='lg'
											variant='secondary'
											leftIcon={<Icon as={FaPlane} w={4} h={4} />}
											onClick={onModalOpen}
										>
											BOOK MY TRANSFER
										</Button>
										<Button size='lg' variant='outline' textShadow='2px 2px 2px #00000050'>
											VIEW RATES
										</Button>
									</Stack>
								</VStack>
								<Flex alignItems='center' justifyContent='center'>
									<Image
										src='/hero-tenerife.png'
										width={850}
										height={450}
										boxShadow='1px 1px 5px #00000050'
										alt='Tenerife Airport Transfer '
										borderRadius='xl'
										objectFit='cover'
									/>
								</Flex>
							</Grid>
						</Container>
					</Box>
				</Box>

				<Box id='services' w='full' py={{ base: 12, md: 24, lg: 32 }} bg='brand.light'>
					<Modal isOpen={isModalOpen} onClose={onModalClose} size='4xl' scrollBehavior='inside'>
						<ModalOverlay />
						<ModalContent bg='brand.light'>
							<iframe
								title='FareHarbor'
								allow='payment *'
								height='1000px'
								width='100%'
								style={{
									borderRadius: '10px'
								}}
								src='https://fareharbor.com/embeds/book/tenerifeairporttransfers/?full-items=yes&ref=https%3A%2F%2Ftenerifeairporttransfers.co.uk&from-ssl=yes&ga4t=&g4=yes&cp=no&csp=yes&back=https%3A%2F%2Ftenerifeairporttransfers.co.uk%2F&language=en&u=4462c381-939a-4ad4-b0cd-916604f14083'
							/>
							<ModalCloseButton />
						</ModalContent>
					</Modal>
					<Container maxW='container.xl' px={{ base: 4, md: 6 }}>
						<VStack spacing={4} textAlign='center' mb={12}>
							<Box>
								<Box
									display='inline-block'
									bg='brand.secondary'
									color='brand.primary'
									px={3}
									py={1}
									borderRadius='lg'
									fontSize='sm'
								>
									OUR SERVICES
								</Box>
								<Heading
									mt={2}
									fontSize={{ base: '3xl', md: '4xl' }}
									fontWeight='bold'
									color='brand.primary'
								>
									Most Popular Tenerife Airport Transport
								</Heading>
								<Text maxW='700px' color='gray.600' mt={2} fontSize={{ md: 'xl' }}>
									We offer a range of professional transportation services to meet your needs.
								</Text>
							</Box>
						</VStack>

						<Grid
							templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
							gap={6}
							maxW='container.xl'
							mx='auto'
							px={4}
						>
							<Card overflow='hidden' variant='outline' bg='white' color='brand.primary'>
								<Box position='relative'>
									<Image
										src='/taxi.png'
										alt='Tenerife Airport Transfer Vehicle'
										w='full'
										h='250px'
										objectFit='cover'
									/>
									<Badge
										position='absolute'
										top={4}
										right={4}
										bg='brand.secondary'
										color='brand.primary'
										px={4}
										py={1}
										borderRadius='full'
										fontWeight='bold'
									>
										MOST POPULAR!
									</Badge>
									<HStack
										position='absolute'
										bottom={4}
										left={4}
										spacing={4}
										bg='white'
										p={2}
										borderRadius='lg'
										boxShadow='md'
									>
										<HStack>
											<Icon as={FaPlane} />
											<Text fontWeight='medium'>TFS</Text>
										</HStack>
										<HStack>
											<Icon as={FaClock} />
											<Text fontWeight='medium'>30-90 MINUTES</Text>
										</HStack>
										<HStack>
											<Icon as={FaUsers} />
											<Text fontWeight='medium'>UP TO 30</Text>
										</HStack>
									</HStack>
									<HStack
										position='absolute'
										bottom={4}
										right={4}
										spacing={4}
										bg='white'
										p={2}
										borderRadius='lg'
										boxShadow='md'
									>
										<Box bg='white' px={3} py={1} borderRadius='md' fontWeight='bold'>
											FROM €45
										</Box>
									</HStack>
								</Box>
								<CardBody>
									<Stack spacing={4}>
										<Heading size='md'>Taxi from Tenerife South Airport — Pickup</Heading>
										<Text>
											Tenerife Airport Transfers will pick you up from Tenerife South Airport and
											take you to Costa Adeje, Fuerteventura, and more. Book your airport transfer
											today!
										</Text>
										<Flex gap={4}>
											<Button
												bg='brand.secondary'
												color='brand.primary'
												size='lg'
												flex={1}
												_hover={{ opacity: 0.9 }}
											>
												BOOK NOW
											</Button>
											<Button
												variant='outline'
												color='brand.secondary'
												outlineColor='brand.secondary'
												size='lg'
												flex={1}
											>
												LEARN MORE
											</Button>
										</Flex>
									</Stack>
								</CardBody>
							</Card>

							<Card overflow='hidden' variant='outline' bg='white' color='brand.primary'>
								<Box position='relative'>
									<Image
										src='/dropoff.png'
										alt='Tenerife Airport Transfer Vehicle'
										w='full'
										h='250px'
										objectFit='cover'
									/>
									<HStack
										position='absolute'
										bottom={4}
										left={4}
										spacing={4}
										bg='white'
										p={2}
										borderRadius='lg'
										boxShadow='md'
									>
										<HStack>
											<Icon as={FaPlane} />
											<Text fontWeight='medium'>TFS</Text>
										</HStack>
										<HStack>
											<Icon as={FaClock} />
											<Text fontWeight='medium'>30-90 MINUTES</Text>
										</HStack>
										<HStack>
											<Icon as={FaUsers} />
											<Text fontWeight='medium'>UP TO 30</Text>
										</HStack>
									</HStack>
									<HStack
										position='absolute'
										bottom={4}
										right={4}
										spacing={4}
										bg='white'
										p={2}
										borderRadius='lg'
										boxShadow='md'
									>
										<Box bg='white' px={3} py={1} borderRadius='md' fontWeight='bold'>
											FROM €45
										</Box>
									</HStack>
								</Box>
								<CardBody>
									<Stack spacing={4}>
										<Heading size='md'>To Tenerife South Airport — Drop-off</Heading>
										<Text>
											We'll pick you up from anywhere on the island and take you to Tenerife South
											Airport. Book your airport transfer to TFS with Tenerife Airport Transfers
											now!
										</Text>
										<Flex gap={4}>
											<Button
												bg='brand.secondary'
												color='brand.primary'
												size='lg'
												flex={1}
												_hover={{ opacity: 0.9 }}
											>
												BOOK NOW
											</Button>
											<Button
												variant='outline'
												color='brand.secondary'
												outlineColor='brand.secondary'
												size='lg'
												flex={1}
											>
												LEARN MORE
											</Button>
										</Flex>
									</Stack>
								</CardBody>
							</Card>
						</Grid>
					</Container>
				</Box>
				<Box w='full' py={{ base: 12, md: 24, lg: 32 }} bg='white'>
					<Container maxW='container.xl' px={{ base: 4, md: 6 }}>
						<VStack spacing={4} textAlign='center' mb={12}>
							<Box>
								<Box
									display='inline-block'
									bg='brand.secondary'
									color='brand.primary'
									px={3}
									py={1}
									borderRadius='lg'
									fontSize='sm'
								>
									[POR TERMINAR]
								</Box>
							</Box>
						</VStack>
					</Container>
				</Box>
			</Box>
		</Box>
	);
}
