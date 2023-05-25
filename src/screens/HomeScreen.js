import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/CoffeeCard';
import CoffeeVariants from '../components/CoffeeVariants'

const HomeScreen = () => {
    const hideKeyboard = () => {
        Keyboard.dismiss()
    }
    const [activeCateory, setActiveCateory] = useState( 1 )
    return (
        <TouchableWithoutFeedback onPress={hideKeyboard} >
            <View className="flex-1 relative">
                <Image source={require( '../../assets/images/beansBackground1.png' )} className='absolute -top-48 w-full opacity-20' />
                <StatusBar style="auto" />
                <SafeAreaView className='flex-1'>
                    {/* header section */}
                    <View className='w-full flex-row items-center justify-between py-1.5 px-4'>
                        <TouchableOpacity>
                            <Image source={require( '../../assets/images/avatar.png' )} className='h-8 w-8 rounded-full' />
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center'>
                            <Entypo name="location-pin" size={30} color={themeColors.bgLight} />
                            <Text className='text-lg font-bold'>Kolkata, Barrackpore</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="bell-o" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    {/* search section */}
                    <View className='p-6 mt-11'>
                        <View className='bg-gray-200 flex-row w-full p-2 rounded-3xl'>
                            <TextInput className='flex-1 rounded-lg px-2' placeholder='Search' placeholderTextColor={'gray'} />
                            <TouchableOpacity className='p-2 rounded-full' style={{ backgroundColor: themeColors.bgLight }}>
                                <Entypo name="magnifying-glass" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* coffee variants */}
                    <View className='pl-4 -mt-1'>
                        <FlatList
                            data={categories}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={( item ) => item.id}
                            renderItem={( { item, index } ) => <CoffeeVariants item={item} index={index} activeCateory={activeCateory} setActiveCateory={setActiveCateory} />}
                        />
                    </View>
                    {/* coffee card */}
                    <View className='flex-row justify-center items-center overflow-visible mt-12'>
                        <Carousel
                            data={coffeeItems}
                            renderItem={( { item } ) => <CoffeeCard item={item} />}
                            sliderWidth={Dimensions.get( 'window' ).width}
                            itemWidth={250}
                            loop={true}
                            firstItem={1}
                            removeClippedSubviews={false}
                            initialNumToRender={3}
                            inactiveSlideOpacity={0.75}
                            inactiveSlideScale={0.77}
                            slideStyle={{
                                display: 'flex', alignItems: 'center',
                                overflow: 'visible',
                                marginTop: 64
                            }}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default HomeScreen