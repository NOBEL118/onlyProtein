import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>About onlyProtein</Text>
                <Text style={styles.body}>
                    This is onlyProtein app, we are here to provide you with the best
                    protein products in the market with the best prices and the best quality.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#090909",
    },
    card: {
        padding: 24,
        gap: 16,
        borderWidth: 2,
        borderColor: "#ff4f9a",
        borderRadius: 20,
        backgroundColor: "#ffffff",
    },
    title: {
        color: "#d91f71",
        fontSize: 28,
        fontWeight: "900",
        textAlign: "center",
    },
    body: {
        color: "#090909",
        fontSize: 17,
        lineHeight: 26,
        textAlign: "center",
    },
});

export default AboutScreen;
