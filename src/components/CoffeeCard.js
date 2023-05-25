import { View, Text, Pressable, Image, TouchableOpacity, LogBox } from 'react-native'
import React, { memo } from 'react'
import { themeColors } from '../theme'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CoffeeCard = ( { item } ) => {
    LogBox.ignoreLogs( [
        "exported from 'deprecated-react-native-prop-types'.",
        "ViewPropTypes will be removed",
        "ColorPropType will be removed",
    ] ) // ignore unnecessary warnings
    const navigation = useNavigation()
    const redirectToItem = ( item ) => {
        navigation.navigate( 'Item', {item} )
    }
    return (
        <Pressable className='overflow-visible'>
            <View
                style={{
                    height: 330,
                    width: 250,
                    backgroundColor: themeColors.bgDark,
                    borderRadius: 40,
                }} className='p-4 w-full'>
                <View className='w-full items-center -mt-20'>
                    <View
                        className='w-fit h-fit rounded-full'
                        style={{ elevation: 60, shadowColor: 'black' }} >
                        <Image
                            className='h-40 w-40'
                            source={item?.image}
                        />
                    </View>
                </View>
                <Text className='text-2xl mt-4 text-white font-semibold'>{item.name}</Text>
                <View style={{ backgroundColor: themeColors.bgLight }} className='mt-2 p-2 w-16 rounded-2xl flex-row justify-evenly'>
                    <AntDesign name="star" size={16} color="white" />
                    <Text className='text-white ml-1'>{item.stars}</Text>
                </View>
                <View className='flex-row items-center space-x-1 mt-2'>
                    <Text className='text-white opacity-70'>Volume</Text>
                    <Text className='text-white font-semibold'>{item.volume}</Text>
                </View>
                <View
                    className='flex-1 flex-row items-end justify-between'>
                    <View className='justify-center h-12'>
                        <Text className='text-lg text-white font-semibold ml-2'>$ {item.price}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => redirectToItem( item )}
                        style={{ elevation: 8, shadowColor: 'black' }}
                        className='p-3 bg-white rounded-full w-fit h-fit'>
                        <AntDesign name="plus" size={24} color={themeColors.bgDark} />
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    )
}

export default memo( CoffeeCard )