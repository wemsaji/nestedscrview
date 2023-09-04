import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const WH: number = Dimensions.get('window').height;
const heights: (number | undefined)[] = [
    WH / 4,
    WH / 3,
    WH / 2,
    undefined,
];
const SV2 = ({
    bgc,
    prefix,
}: {
    bgc: string;
    prefix: string;
}) => {

    const [heightIndex, setHeightIndex] = useState<number>(0);
    const styles = StyleSheet.create({
        sv: {
            height: heights[heightIndex],
            backgroundColor: bgc,
            margin: 20,
            marginTop: 0,
        },
        svInner: {
            alignItems: 'stretch',
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 20,
            marginBottom: 0,
        },
    });

    const onPressPlus = () => {
        setHeightIndex(heightIndex === heights.length - 1 ? 0 : heightIndex + 1);
    };

    const onPressMinus = () => {
        setHeightIndex(heightIndex === 0 ? heights.length - 1 : heightIndex - 1);
    };

    return <>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={onPressPlus}><Icon name='plus-square' size={30}></Icon></TouchableOpacity >
            {/* <TouchableOpacity onPress={onPressMinus}><Icon name='minus-square' size={30}></Icon></TouchableOpacity > */}
        </View>
        <ScrollView
            bounces={false}
            nestedScrollEnabled
            style={styles.sv}
            contentContainerStyle={styles.svInner}>
            {[...Array(100)].map((_, i) => <Text key={prefix + i}>{prefix}：{i}</Text>)}
        </ScrollView>
    </>
};
export default SV2;
