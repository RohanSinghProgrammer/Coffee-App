import { Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";

const CoffeeVariants = ( { item, index, activeCateory, setActiveCateory } ) => {
    const setCategory = () => {
        setActiveCateory( index )
    }
    return (
        <TouchableOpacity onPress={setCategory} style={{ backgroundColor: activeCateory === index ? themeColors.bgLight : '#e7e4e4' }} className='p-4 mr-4 rounded-3xl'>
            <Text style={{ color: activeCateory === index ? 'white' : '#565252' }} className='font-semibold text-gray-700' >
                {item.title}
            </Text>
        </TouchableOpacity> )
}

export default CoffeeVariants;