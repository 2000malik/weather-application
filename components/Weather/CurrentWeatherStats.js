import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Sun } from '../icons/Sun';

export const CurrentWeatherStats = () => {
  return (
    <Flex boxSizing='border-box' flexFlow='wrap' w='100%'>
      <CurrentWeatherStatsTagContainer>
        <CurrentWeatherStatsTag country='USA, jp' date=' Today 14 Mar' />
      </CurrentWeatherStatsTagContainer>
      <CurrentWeatherStatsTagContainer>
        <CurrentWeatherStatsTag country='USA, jp' date=' Today 14 Mar' />
      </CurrentWeatherStatsTagContainer>

      <CurrentWeatherStatsTagContainer>
        <Sun />
      </CurrentWeatherStatsTagContainer>
    </Flex>
  );
};
export const CurrentWeatherStatsTagContainer = ({ children, ...props }) => {
  return (
    <Flex
      flexBasis='33.3%'
      maxW='33.3333%'
      my={'10'}
      flexGrow={0}
      direction='row'
      justifyContent='center'
      alignItems='center'
      {...props}
    >
      {children}
    </Flex>
  );
};
export const CurrentWeatherStatsTag = ({ country, date, ...props }) => {
  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      color='weather-grey.primary'
      h='100%'
      {...props}
    >
      <Heading as='h3' textTransform='uppercase' fontSize='md' fontWeight={600}>
        {country}
      </Heading>
      <Heading as='h4' fontSize='sm' fontWeight={400}>
        {date}
      </Heading>
    </Flex>
  );
};
