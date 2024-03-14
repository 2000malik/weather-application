import { Button } from '@/components/Button';
import { SearchBox } from '@/components/SearchBox';
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg='weather-beige.primary' h='100vh' p='5'>
      <Text color='weather-grey.primary' align='center'>
        weather
      </Text>
      <SearchBox id='search-location' placeholder="search-location">
        <Button>
          search
        </Button>
      </SearchBox>
    </Box>
  );
}
