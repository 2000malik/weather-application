import { Button } from '@/components/Button';
import { SearchBox } from '@/components/SearchBox';
import { Title } from '@/components/Title';
import { AirConditionStats } from '@/components/Weather/AirConditionStats';
import { CurrentWeatherStats } from '@/components/Weather/CurrentWeatherStats';
import { ForeCastCard } from '@/components/Weather/ForeCastCard';
import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Box bg='weather-beige.primary' h='100vh' minH='100%' overflow='auto' p='5'>
      <Title label='weather forecast' fontSize='4xl' />
      <Box
        p={{ base: 1, md: '5' }}
        mx={{ base: 'unset', lg: '100' }}
        border='1px'
        borderColor='weather-beige.secondary'
        bg='weather-beige.secondary'
        borderRadius='10'
        height='fit-content'
      >
        <Flex direction={{ base: 'column', md: 'unset' }} justifyContent='space-between'>
          <SearchBox
            id='search-location'
            searchValue={searchValue}
            onInputChange={(evt) => setSearchValue(evt.target.value)}
            placeholder='Enter-location'
            w={{ base: 'full', md: '50%' }}
            mb={{ base: '3' }}
          />
          <Button w={{ base: 'full', md: '50%' }} borderRadius='20'>
            Search
          </Button>
        </Flex>
        <Flex
          direction={{ base: 'column', md: 'unset' }}
          gap='5'
          justifyContent='space-between'
          my={5}
        >
          <Box w={{ base: 'full', md: '50%' }} borderRadius='20'>
            <Title label='CURRENT WEATHER' fontSize='2xl' fontWeight={700} />
            <CurrentWeatherStats />
            <Title label={"TODAY'S FORECAST"} fontSize='2xl' fontWeight={700} />
            <CurrentWeatherStats />
            <Title label='AIR  CONDITIONS' fontSize='2xl' fontWeight={700} />
            <AirConditionStats/>
          </Box>
          <Box w={{ base: 'full', md: '50%' }} borderRadius='20'>
            <Title label='WEEKLY FORECAST' fontSize='2xl' fontWeight={700} />
            <ForeCastCard day='Friday' />
            <ForeCastCard day='Friday' />
            <ForeCastCard day='Friday' />
            <ForeCastCard day='Friday' />
            <ForeCastCard day='Friday' />
            <ForeCastCard day='Friday' />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
