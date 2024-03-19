import { Button } from '@/components/Button';
import { SearchBox } from '@/components/SearchBox';
import { Title } from '@/components/Title';
import { AirConditionStats } from '@/components/Weather/AirConditionStats';
import { CurrentWeatherStats } from '@/components/Weather/CurrentWeatherStats';
import { ForeCastCard } from '@/components/Weather/ForeCastCard';
import { CloudSunRain } from '@/components/icons/CloudSunRain';
import { apiKEY, baseURL } from '@/helpers/constant';
import { isObjEmpty } from '@/helpers/utils';
import { Box, Flex, Skeleton } from '@chakra-ui/react';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const getWeatherStats = () => {
    const url = `${baseURL}/data/2.5/weather?q=${searchValue}&units=imperial&appid=${apiKEY}`;
    if (searchValue) {
      setIsLoading(true);
      axios
        .get(url)
        .then((res) => {
          if (res?.status === 200) {
            setData(res?.data);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err?.response?.data?.message);
        });
    }
  };
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  const isDataEmpty = isObjEmpty(data);
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
        minHeight='50%'
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
          <Button
            w={{ base: 'full', md: '50%' }}
            borderRadius='20'
            isDisabled={!searchValue}
            isLoading={isLoading}
            handleOnClick={getWeatherStats}
          >
            Search
          </Button>
        </Flex>
        {isLoading ? <Skeleton height='20px' /> : null}
        <Flex
          direction={{ base: 'column', md: 'unset' }}
          gap='5'
          justifyContent='space-between'
          my={5}
        >
          {isDataEmpty ? (
            <Box margin='auto' height='300'>
              <CloudSunRain width='100' height='200' />
            </Box>
          ) : (
            <Fragment>
              <Box w={{ base: 'full', md: '50%' }} borderRadius='20'>
                <Title label='CURRENT WEATHER' fontSize='2xl' fontWeight={700} />
                <CurrentWeatherStats data={data} />
                <Title label='AIR  CONDITIONS' fontSize='2xl' fontWeight={700} />
                <AirConditionStats data={data} />
                <Title label={"TODAY'S FORECAST"} fontSize='2xl' fontWeight={700} />
                <CurrentWeatherStats />
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
            </Fragment>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
