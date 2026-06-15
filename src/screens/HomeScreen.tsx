import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({navigation}) => {
    const proteinFoods = [
        {
            id: 1,
            Name: "Chicken Protein Bowl",
            Price: 299,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        },
        {
            id: 2,
            Name: "Paneer Power Meal",
            Price: 249,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        },
        {
            id: 3,
            Name: "Protein Burger",
            Price: 349,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        },
        {
            id: 4,
            Name: "Egg Chicken Salad",
            Price: 199,
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        },
        {
            id: 5,
            Name: "Greek Yogurt Protein Mix",
            Price: 179,
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.content}>
                <Text style={styles.title}>onlyProtein</Text>
                <Text style={styles.subtitle}>High-protein favorites, ready to order.</Text>
                {proteinFoods.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Image source={{uri: item.image}} style={styles.image} />
                        <Text style={styles.itemName}>{item.Name}</Text>
                        <Text style={styles.price}>{"\u20B9"}{item.Price}</Text>
                        <Button
                            title="Order Now"
                            color="#ff4f9a"
                            onPress={() => {
                                navigation.navigate("Order", {
                                    img: item.image,
                                    id: item.id,
                                    Name: item.Name,
                                    Price: item.Price,
                                });
                            }}
                        />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#090909",
    },
    content: {
        padding: 20,
        gap: 18,
    },
    title: {
        color: "#ff4f9a",
        fontSize: 34,
        fontWeight: "900",
        textAlign: "center",
    },
    subtitle: {
        marginBottom: 6,
        color: "#ffffff",
        fontSize: 16,
        textAlign: "center",
    },
    card: {
        overflow: "hidden",
        paddingBottom: 18,
        gap: 10,
        borderWidth: 2,
        borderColor: "#ff4f9a",
        borderRadius: 18,
        backgroundColor: "#ffffff",
    },
    image: {
        width: "100%",
        height: 220,
    },
    itemName: {
        paddingHorizontal: 16,
        color: "#090909",
        fontSize: 20,
        fontWeight: "800",
    },
    price: {
        paddingHorizontal: 16,
        color: "#d91f71",
        fontSize: 18,
        fontWeight: "700",
    },
});

export default HomeScreen;
