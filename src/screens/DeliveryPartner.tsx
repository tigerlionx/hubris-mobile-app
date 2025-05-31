import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeliveryPartner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivery Partner Dashboard</Text>
            <Text style={styles.subtitle}>Track your earnings and navigate to your deliveries.</Text>
            {/* Additional features for delivery partners can be added here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default DeliveryPartner;