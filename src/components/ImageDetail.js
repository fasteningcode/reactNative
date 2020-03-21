import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
            <Text>Image score - {score}</Text>
        </View>
    )
}

export default ImageDetail;
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const ImageDetail = ({ imageSource, title, score }) => {
//     return (
//         <View>
//             <Image source={imageSource} />
//             <Text>{title}</Text>
//             <Text>Image Score - {score}</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({});

// export default ImageDetail;
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const ImageDetail = (props) => {
//     console.log(props);
//     return <View>
//         <Image source={props.imageSource} />
//         <Text>{props.title}</Text>
//     </View >

// };

// const styles = StyleSheet.create({});

// export default ImageDetail;