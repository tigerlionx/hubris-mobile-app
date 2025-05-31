import React from 'react';
import { View, Text, Button } from 'react-native';

const AccountManagement = () => {
    const handleProfileEdit = () => {
        // Logic for editing profile
    };

    const handlePaymentOptions = () => {
        // Logic for managing payment options
    };

    const handleServiceHistory = () => {
        // Logic for viewing service history
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Account Management</Text>
            <Button title="Edit Profile" onPress={handleProfileEdit} />
            <Button title="Payment Options" onPress={handlePaymentOptions} />
            <Button title="Service History" onPress={handleServiceHistory} />
        </View>
    );
};

export default AccountManagement;