import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SV1 from './SV1';
import SV2 from './SV2';

const App = () => {
  return <SafeAreaProvider>
    <StatusBar style='auto' />
    <SV1>
      <SV2 bgc='green' prefix='あ'></SV2>
      <SV2 bgc='blue' prefix='い'></SV2>
      <SV2 bgc='white' prefix='う'></SV2>
    </SV1>
  </SafeAreaProvider>
};
export default App;
