import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Hubris</Text>
            <Text style={styles.subtitle}>Your service-sharing and delivery platform</Text>
            <Button
                title="Book a Professional"
                onPress={() => navigation.navigate('ProfessionalHailing')}
            />
            <Button
                title="Delivery Partner"
                onPress={() => navigation.navigate('DeliveryPartner')}
            />
            <Button
                title="Browse Businesses"
                onPress={() => navigation.navigate('BusinessLocations')}
            />
            <Button
                title="Manage Account"
                onPress={() => navigation.navigate('AccountManagement')}
            />
            <Button
                title="Accessibility Options"
                onPress={() => navigation.navigate('Accessibility')}
            />
            <Button
                title="Customer Support"
                onPress={() => navigation.navigate('CustomerSupport')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default HomeScreen;