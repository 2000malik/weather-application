import { IconToDisplay } from '@/helpers/utils';
import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const CurrentWeatherStats = ({ data }) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const dataList = () => {
    return [
      {
        header: `${data?.name.toUpperCase()}, ${data?.sys?.country.toUpperCase()}`,
        subText: ` ${today.toDateString()}`,
      },
      {
        header: `${Math.round(data?.main?.temp)} °F`,
        subText: ` ${data?.weather?.[0]?.description}`,
      },
      {
        header: IconToDisplay(`${data?.weather?.[0]?.main}`),
        subText: ``,
      },
    ];
  };
  return (
    <Flex boxSizing='border-box' flexFlow='wrap' w='100%'>
      {dataList().map(({ header, subText }) => (
        <CurrentWeatherStatsTagContainer key={header}>
          <CurrentWeatherStatsTag country={header} date={subText} />
        </CurrentWeatherStatsTagContainer>
      ))}
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
