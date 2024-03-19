import { Box, Flex } from '@chakra-ui/react';
import { CurrentWeatherStatsTagContainer } from './CurrentWeatherStats';
import { IconTag } from './ForeCastCard';
import { Cloud } from '../icons/Cloud';
import { Title } from '../Title';
import { Wind } from '../icons/Wind';
import { Temperature } from '../icons/Temperature';
import { Humidity } from '../icons/Humidity';

export const AirConditionStats = ({ data }) => {
  const dataList = () => {
    return [
      {
        header: `${data?.clouds?.all} %`,
        icon: <Cloud />,
        title: 'Clouds',
      },
      {
        header: `${data?.wind?.speed} mph`,
        icon: <Wind />,
        title: 'Wind',
      },
      {
        header: `${Math.round(data?.main?.feels_like)} °F`,
        icon: <Temperature />,
        title: 'Feels Like',
      },
      {
        header: `${data?.main?.humidity} %`,
        icon: <Humidity />,
        title: 'Humidity',
      },
    ];
  };
  return (
    <Flex boxSizing='border-box' flexFlow='wrap' w='100%'>
      {dataList().map(({ title, icon, header }) => {
        return (
          <CurrentWeatherStatsTagContainer key={title} my={1}>
            <Box>
              <IconTag icon={icon} title={title} />
              <Title label={header} fontSize='md' fontWeight={600} />
            </Box>
          </CurrentWeatherStatsTagContainer>
        );
      })}
    </Flex>
  );
};
