import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="forest"
                imageSource={require('../../assets/forest.jpg')}
                score={9}
            />
            <ImageDetail
                title="beach"
                imageSource={require('../../assets/beach.jpg')}
                score={5}
            />
            <ImageDetail
                title="mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={8}
            />
        </View>
    )
}
const style = StyleSheet.create({});
export default ImageScreen;


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ImageDetail from '../components/ImageDetail';

// const ImageScreen = () => {
//   return (
//     <View>
//       <ImageDetail
//         title="Forest"
//         imageSource={require('../../assets/forest.jpg')}
//         score={9}
//       />
//       <ImageDetail
//         title="Beach"
//         imageSource={require('../../assets/beach.jpg')}
//         score={7}
//       />
//       <ImageDetail
//         title="Mountain"
//         imageSource={require('../../assets/mountain.jpg')}
//         score={10}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ImageScreen;
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { ImageDetail } from '../components/ImageDetail';

// const ImageScreen = () => {
//     return (
//         <View>
//             <ImageDetail />

//             {/* <ImageDetail
//                 imageSource={require('../../assets/forest.jpg')}
//                 title="Forest" /> */}
//         </View>

//     );
// };

// //    <ImageDetail title="Forest" />

// const styles = StyleSheet.create({});

// export default ImageScreen;



