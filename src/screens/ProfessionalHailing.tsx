import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfessionalHailing = () => {
    const [location, setLocation] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [competencies, setCompetencies] = useState('');

    const handleBooking = () => {
        // Logic for booking the professional service
        console.log('Booking service:', { location, serviceType, competencies });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book a Professional Service</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your location"
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="Select service type"
                value={serviceType}
                onChangeText={setServiceType}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter required competencies"
                value={competencies}
                onChangeText={setCompetencies}
            />
            <Button title="Book Service" onPress={handleBooking} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default ProfessionalHailing;