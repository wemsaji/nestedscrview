import { ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const SV1 = ({ children, }: { children: JSX.Element[]; }) => {
    const insets = useSafeAreaInsets();
    const bgc = 'red';
    const prefix = 'あ';
    const styles = StyleSheet.create({
        sv: {
            flex: 1,
            marginTop: insets.top,
            marginBottom: insets.bottom,
            backgroundColor: bgc,
        },
        svInner: {
            alignItems: 'stretch',
        }
    });

    return <ScrollView
        bounces={false}
        style={styles.sv}
        contentContainerStyle={styles.svInner}>
        {/* {[...Array(100)].map((_, i) => <Text key={prefix + i}>{prefix}：{i}</Text>)} */}
        <Text>SV1</Text>
        {children}
    </ScrollView>
};
export default SV1;
