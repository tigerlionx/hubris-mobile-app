import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CustomerSupport = () => {
    const [issue, setIssue] = React.useState('');
    const [contactInfo, setContactInfo] = React.useState('');

    const handleSubmit = () => {
        // Handle the submission of the support request
        console.log('Issue reported:', issue);
        console.log('Contact info:', contactInfo);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Customer Support</Text>
            <TextInput
                style={styles.input}
                placeholder="Describe your issue"
                value={issue}
                onChangeText={setIssue}
            />
            <TextInput
                style={styles.input}
                placeholder="Your contact information"
                value={contactInfo}
                onChangeText={setContactInfo}
            />
            <Button title="Submit" onPress={handleSubmit} />
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
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default CustomerSupport;