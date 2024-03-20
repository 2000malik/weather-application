import { Button } from '@/components/Button';
import { SelectBox } from '@/components/Form/SelectBox';
import { SearchBox } from '@/components/SearchBox';
import { Title } from '@/components/Title';
import { AirConditionStats } from '@/components/Weather/AirConditionStats';
import { CurrentWeatherStats } from '@/components/Weather/CurrentWeatherStats';
import { ForeCastCard } from '@/components/Weather/ForeCastCard';
import { CloudSunRain } from '@/components/icons/CloudSunRain';
import { AppContext } from '@/context';
import { apiKEY, baseURL } from '@/helpers/constant';
import { isObjEmpty } from '@/helpers/utils';
import { Box, Flex, Skeleton, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react';

export default function Home() {
  const { setUnitConversion } = useContext(AppContext);
  const toast = useToast();

  // states
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [unit, setUnit] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  // functions
  const fetchData = useCallback(async (url, setDataCallback) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      if (response.status === 200) {
        setDataCallback(response.data);
      }
    } catch (err) {
      if (err?.response?.status === 404) {
        setError(err?.response?.data?.message);
      } else {
        setError('An error occurred while fetching data.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getCurrentWeatherStats = useCallback(async () => {
    const url = `${baseURL}/data/2.5/weather?q=${searchValue}&units=${unit}&appid=${apiKEY}`;
    if (searchValue) {
      await fetchData(url, setData);
    }
  }, [searchValue, unit, fetchData]);

  const getWeatherForeCastStats = useCallback(async () => {
    const url = `${baseURL}/data/2.5/forecast?q=${searchValue}&units=${unit}&cnt=6&appid=${apiKEY}`;
    if (searchValue) {
      await fetchData(url, setForecastData);
    }
  }, [searchValue, unit, fetchData]);

  const getWeatherStats = async () => {
    await getCurrentWeatherStats();

    await getWeatherForeCastStats();
  };
  const handleUnitConversionChange = (evt) => {
    const value = evt.target.value;
    if (unit !== value) {
      setData({});
    }
    setUnitConversion(value);
    setUnit(value);
  };

  // side-effects
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          if (error) {
            setError('Geolocation error occurred. Please enter location manually.');
          }
        }
      );
    } else {
      setError('Geolocation is not supported by this browser. Please enter location manually.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const url = `${baseURL}/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=imperial&appid=${apiKEY}`;
      fetchData(url, setData);
    }
  }, [userLocation, fetchData]);

  useEffect(() => {
    if (error) {
      toast({
        title: 'oops',
        status: 'error',
        position: 'top-right',
        description: error,
        duration: 9000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  const isDataEmpty = isObjEmpty(data);

  let labelTag = 'CURRENT WEATHER';
  if (unit) {
    if (unit === 'metric') {
      labelTag += ' in Celsius';
    } else {
      labelTag += ' in Fahrenheit';
    }
  }
  
  return (
    <Box bg='weather-beige.primary' h='100vh' minH='100%' overflow='auto' p='5'>
      <Title label='weather forecast' fontSize='4xl' />
      <Box
        p={{ base: 1, md: '5' }}
        mx={{ base: 'unset', md: 'unset', lg: '100' }}
        border='1px'
        borderColor='weather-beige.secondary'
        bg='weather-beige.secondary'
        borderRadius='10'
        minHeight='50%'
        height='fit-content'
      >
        <Flex direction={{ base: 'column', md: 'unset' }} justifyContent='space-evenly'>
          <Box w={{ base: 'full', md: '30%' }} mb={{ base: '3' }}>
            <SearchBox
              id='search-location'
              searchValue={searchValue}
              onInputChange={(evt) => setSearchValue(evt.target.value)}
              placeholder='Enter-location'
              borderRadius='10px'
              size='md'
            />
          </Box>
          <Box w={{ base: 'full', md: '30%' }} mb={{ base: '3' }}>
            <SelectBox
              placeholder='select unit conversion'
              options={[
                { value: 'imperial', label: 'Fahrenheit' },
                { value: 'metric', label: 'Celsius' },
              ]}
              selectValue={unit}
              handleChange={(evt) => handleUnitConversionChange(evt)}
              borderColor='weather-grey.primary'
              borderRadius='10px'
              size='md'
            />
          </Box>
          <Box w={{ base: 'full', md: '30%' }}>
            <Button
              borderRadius='10px'
              size='md'
              isDisabled={!(searchValue && unit)}
              isLoading={isLoading}
              handleOnClick={getWeatherStats}
            >
              Search
            </Button>
          </Box>
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
                <Title label={labelTag} fontSize='2xl' fontWeight={700} />
                <CurrentWeatherStats data={data} />
                <Title label='AIR  CONDITIONS' fontSize='2xl' fontWeight={700} />
                <AirConditionStats data={data} />
              </Box>
              {forecastData?.list ? (
                <Box w={{ base: 'full', md: '50%' }} borderRadius='20'>
                  <Title label='FORECAST' fontSize='2xl' fontWeight={700} />
                  {React.Children.toArray(
                    forecastData?.list?.map((item) => (
                      <ForeCastCard
                        day={item?.dt_txt}
                        image={item?.weather?.[0]?.icon}
                        description={item?.weather?.[0]?.description}
                        temperature={item?.main?.temp}
                        wind={item?.wind?.speed}
                        clouds={item?.clouds?.all}
                        humidity={item?.main?.humidity}
                      />
                    ))
                  )}
                </Box>
              ) : null}
            </Fragment>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
