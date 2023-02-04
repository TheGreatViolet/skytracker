import { Box, Center, NativeBaseProvider, Text } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box alignItems="center">
          <Text>SkyTracker</Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
