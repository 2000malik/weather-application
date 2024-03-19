import { Flex, Heading } from '@chakra-ui/react';
import { unitAbbreviationForTemperature } from '@/helpers/utils';
import { useContext } from 'react';
import { AppContext } from '@/context';
import Image from 'next/image';

export const CurrentWeatherStats = ({ data }) => {
  const { unitConversion } = useContext(AppContext);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const baseURL = 'https://openweathermap.org/img/wn';
  const myLoader = () => {
    return `${baseURL}/${data?.weather?.[0]?.icon}@2x.png`;
  };
  const dataList = () => {
    return [
      {
        header: `${data?.name.toUpperCase()}, ${data?.sys?.country.toUpperCase()}`,
        subText: ` ${today.toDateString()}`,
      },
      {
        header: `${Math.round(data?.main?.temp)} ${unitAbbreviationForTemperature(unitConversion)}`,
        subText: ` ${data?.weather?.[0]?.description}`,
      },
      {
        header: (
          <Image
            alt={data?.weather?.[0]?.main || 'img'}
            loader={myLoader}
            src={`${baseURL}/${data?.weather?.[0]?.icon}@2x.png`}
            unoptimized
            width={'100'}
            height={'100'}
          />
        ),
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
