import { Button, Image, StyleSheet, Text, View } from "react-native";

const OrderScreen = ({navigation, route}) => {
    const {img, id, Name, Price} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your order is on the way</Text>
            <View style={styles.card}>
                <Image source={{uri: img}} style={styles.image} />
                <Text style={styles.itemName}>{Name}</Text>
                <Text style={styles.details}>Order ID: {id}</Text>
                <Text style={styles.price}>Total: {"\u20B9"}{Price}</Text>
                <Button
                    title="Go Back"
                    color="#ff4f9a"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 24,
        backgroundColor: "#090909",
    },
    title: {
        color: "#ff4f9a",
        fontSize: 30,
        fontWeight: "900",
        lineHeight: 36,
        textAlign: "center",
    },
    card: {
        overflow: "hidden",
        paddingBottom: 20,
        gap: 12,
        borderWidth: 2,
        borderColor: "#ff4f9a",
        borderRadius: 20,
        backgroundColor: "#ffffff",
    },
    image: {
        width: "100%",
        height: 240,
    },
    itemName: {
        paddingHorizontal: 18,
        color: "#090909",
        fontSize: 22,
        fontWeight: "800",
    },
    details: {
        paddingHorizontal: 18,
        color: "#4a4a4a",
        fontSize: 16,
    },
    price: {
        paddingHorizontal: 18,
        color: "#d91f71",
        fontSize: 20,
        fontWeight: "800",
    },
});

export default OrderScreen;
