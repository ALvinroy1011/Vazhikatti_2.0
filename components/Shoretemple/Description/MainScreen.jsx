// import React from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import Header from "./Header";
// import TabNavigation from "./TabNavigation";
// import InfoCard from "./InfoCard";
// import BottomNav from "./BottomNav";
// import ScanButton from "./ScanButton";

// const MainScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.content}>
//         <Header />
//         <View style={styles.mainContent}>
//           <TabNavigation />
//           <View style={styles.infoSection}>
//             <InfoCard
//               title="You know what?"
//               description="The Shore Temple in Mahabalipuram, located on the southeastern coast of India, is a stunning 8th-century architectural marvel."
//               icon={require("https://cdn.builder.io/api/v1/image/assets/TEMP/93c0e8cedb21d9b16397f8eba7ec705acced7efa")}
//               iconStyle={styles.lightbulbIcon}
//             />
//             <InfoCard
//               title="When is the best time to visit?"
//               description="November - February"
//               icon={require("https://cdn.builder.io/api/v1/image/assets/TEMP/8a9e040355b2ee304c7081a15c0744445a8c2ab1")}
//               iconStyle={styles.calendarIcon}
//             />
//           </View>
//         </View>
//       </ScrollView>
//       <ScanButton />
//       <BottomNav />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     maxWidth: 412,
//     backgroundColor: "#3D0008",
//     fontFamily: "Poppins",
//   },
//   content: {
//     flex: 1,
//   },
//   mainContent: {
//     width: "100%",
//     minHeight: 430,
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     borderTopRightRadius: 24,
//     backgroundColor: "#FFFFFF",
//   },
//   infoSection: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 20,
//   },
//   lightbulbIcon: {
//     transform: [{ rotate: "13.39deg" }],
//   },
//   calendarIcon: {
//     width: 32,
//     height: 32,
//     transform: [{ rotate: "12.457deg" }],
//   },
// });

// export default MainScreen;
