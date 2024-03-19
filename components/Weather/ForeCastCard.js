import { Box, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import { Card } from '../Card';
import { Temperature } from '../icons/Temperature';
import { Wind } from '../icons/Wind';
import { Sun } from '../icons/Sun';
import { Cloud } from '../icons/Cloud';
import { Humidity } from '../icons/Humidity';
import { AppContext } from '@/context';
import { useContext } from 'react';
import {
  ISODateToDaysOfTheWeek,
  unitAbbreviationForSpeed,
  unitAbbreviationForTemperature,
} from '@/helpers/utils';

export const ForeCastCard = ({
  day,
  image,
  description,
  temperature,
  wind,
  clouds,
  humidity,
  ...props
}) => {
  const { unitConversion } = useContext(AppContext);
  // const forecastDays = getWeekDays();
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
              {ISODateToDaysOfTheWeek(day)}
            </Heading>
            <IconTag icon={<Sun />} title={description} />
          </Box>
          <Box alignItems='flex-start' w='100%'>
            <IconTag
              icon={<Temperature />}
              title={`${temperature} ${unitAbbreviationForTemperature(unitConversion)}`}
            />
            <IconTag
              icon={<Wind />}
              title={`${wind} ${unitAbbreviationForSpeed(unitConversion)}`}
            />
          </Box>
          <Box alignItems='flex-start' w='100%'>
            <IconTag icon={<Cloud />} title={`${clouds} %`} />
            <IconTag icon={<Humidity />} title={`${humidity} %`} />
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
