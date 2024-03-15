import { Box, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import { Card } from '../Card';
import { Temperature } from '../icons/Temperature';
import { Wind } from '../icons/Wind';
import { Sun } from '../icons/Sun';
import { Cloud } from '../icons/Cloud';
import { CloudSun } from '../icons/CloudSun';

export const ForeCastCard = ({ day, ...props }) => {
  return (
    <Card
      bg='weather-beige.primary'
      borderRadius='10'
      color='weather-grey.primary'
      mb={2}
      {...props}
    >
      <CardBody px={{ base: 1, md: '20px' }} py='2px'>
        <Flex flexBasis='100%' flexGrow={0} maxWidth='100%' alignItems='center'>
          <Box alignItems='flex-start' w='100%'>
            <Heading as='h6' fontSize='sm' textTransform='capitalize'>
              {day}
            </Heading>
            <IconTag icon={<Sun />} title='sun' />
          </Box>
          <Box alignItems='flex-start' w='100%'>
            <IconTag icon={<Temperature />} title='10' />
            <IconTag icon={<Wind />} title='wind' />
          </Box>
          <Box alignItems='flex-start' w='100%'>
            <IconTag icon={<Cloud />} title='6 %' />
            <IconTag icon={<CloudSun />} title='1.77 m/s' />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export const IconTag = ({ icon, title, ...props }) => {
  return (
    <Box {...props}>
      {icon}
      <Text as='span' ml='4px' fontSize='sm' fontWeight={400}>
        {title}
      </Text>
    </Box>
  );
};
