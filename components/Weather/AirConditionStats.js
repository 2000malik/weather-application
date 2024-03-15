import { Box, Flex } from '@chakra-ui/react';
import { CurrentWeatherStatsTagContainer } from './CurrentWeatherStats';
import { ClouldMoon } from '../icons/CloudMoon';
import { IconTag } from './ForeCastCard';
import { Cloud } from '../icons/Cloud';
import { Title } from '../Title';
import { Wind } from '../icons/Wind';
import { Temperature } from '../icons/Temperature';

export const AirConditionStats = () => {
  return (
    <Flex boxSizing='border-box' flexFlow='wrap' w='100%'>
      <CurrentWeatherStatsTagContainer>
        <Box>
          <IconTag direction={'column' } icon={<Cloud />} title='Clouds' />
          <Title label='3 °C' fontSize='md' fontWeight={600} />
        </Box>
      </CurrentWeatherStatsTagContainer>
      <CurrentWeatherStatsTagContainer>
        <Box>
          <IconTag icon={<Wind />} title='Wind' />
          <Title label='3 °C' fontSize='md' fontWeight={600} />
        </Box>
      </CurrentWeatherStatsTagContainer>

      <CurrentWeatherStatsTagContainer>
        <Box>
          <IconTag icon={<Temperature />} title='Temperature' />
          <Title label='3 °C' fontSize='md' fontWeight={600} />
        </Box>
      </CurrentWeatherStatsTagContainer>
      <CurrentWeatherStatsTagContainer>
        <Box>
          <IconTag icon={<ClouldMoon />} title='Temperature' />
          <Title label='3 °C' fontSize='md' fontWeight={600} />
        </Box>
      </CurrentWeatherStatsTagContainer>
    </Flex>
  );
};
