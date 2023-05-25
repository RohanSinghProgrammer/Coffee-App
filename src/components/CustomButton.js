import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

const CustomButton = ( { title, onPress, style } ) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{ backgroundColor: themeColors.bgLight, ...style }} className='p-4 rounded-full items-center justify-center flex-1'>
            <Text className='text-white font-semibold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton