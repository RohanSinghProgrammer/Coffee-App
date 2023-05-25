import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { themeColors } from '../theme'
import CoffeeVariants from '../components/CoffeeVariants'
import CustomButton from '../components/CustomButton';

const ItemScreen = () => {
    const navigation = useNavigation()
    const { item } = useRoute().params
    const [activeCateory, setActiveCateory] = useState( 0 )
    const [qty, setQty] = useState( 1 )
    const goBack = () => {
        navigation.goBack()
    }
    const increaseQty = () => {
        setQty( prev => prev + 1 )
    }
    const decreaseQty = () => {
        setQty( prev => prev === 1 ? 1 : prev - 1 )
    }
    const coffeeVariants = [{ title: 'Small' }, { title: 'Medium' }, { title: 'Large' }];
    return (
        <View className='flex-1 relative'>
            <StatusBar style='light' />
            <Image source={require( '../../assets/images/beansBackground2.png' )} className='absolute h-64 w-full' style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
            <SafeAreaView className='flex-1'>
                {/* header section */}
                <View className='p-2 flex-row items-center justify-between'>
                    <TouchableOpacity onPress={goBack} className='border-2 rounded-full border-white p-1.5'>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className='border-2 rounded-full border-white p-2'>
                        <AntDesign name="heart" size={22} color="white" />
                    </TouchableOpacity>
                </View>
                {/* coffee image */}
                <View className='w-full items-center mt-8'>
                    <Image source={item.image} className='h-64 w-64' />
                </View>
                {/* middle section */}
                <View className='p-4 flex-1 h-full'>
                    {/* rating */}
                    <View style={{ backgroundColor: themeColors.bgLight }} className='mt-2 p-2 w-16 rounded-2xl flex-row justify-evenly opacity-90'>
                        <AntDesign name="star" size={16} color="white" />
                        <Text className='text-white ml-1'>{item.stars}</Text>
                    </View>
                    {/* name and price */}
                    <View className='flex-row items-center justify-between my-4'>
                        <Text className='text-3xl font-semibold'>{item.name}</Text>
                        <Text className='text-lg'>$ {item.price}</Text>
                    </View>
                    {/* variants */}
                    <View>
                        <Text className='text-lg font-semibold'>
                            Coffee size
                        </Text>
                        <View className='my-2.5'>
                            <FlatList
                                data={coffeeVariants}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={( { item, index } ) => <CoffeeVariants item={item} index={index} activeCateory={activeCateory} setActiveCateory={setActiveCateory} />}
                            />
                        </View>
                    </View>
                    {/* description */}
                    <View>
                        <Text className='mb-2 text-xl font-semibold'>About</Text>
                        <Text>{item.desc}</Text>
                    </View>
                    {/* set coffee quantity */}
                    <View className='mt-8 flex-row justify-between items-center'>
                        {/* volume */}
                        <View className='flex-row items-center space-x-1.5'>
                            <Text>Volume</Text>
                            <Text className='text-lg font-semibold'>{item.volume}</Text>
                        </View>
                        {/* quantity */}
                        <View className='flex-row items-center py-2 px-3.5 rounded-3xl border-2 border-gray-500 space-x-5'>
                            <TouchableOpacity onPress={decreaseQty} >
                                <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <Text className='text-lg'>{qty}</Text>
                            <TouchableOpacity onPress={increaseQty} >
                                <AntDesign name="plus" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* lower section */}
                <View className='p-4 flex-row items-center'>
                    <TouchableOpacity className='p-4 rounded-full border items-center justify-center mr-3'>
                        <SimpleLineIcons name="handbag" size={24} color="black" />
                    </TouchableOpacity>
                    <CustomButton title={'Buy Now'} />
                </View>

            </SafeAreaView>
        </View>
    )
}

export default ItemScreen