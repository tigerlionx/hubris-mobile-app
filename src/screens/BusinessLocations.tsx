import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BusinessLocations = () => {
    const businesses = [
        { id: '1', name: 'Business One', rating: 4.5 },
        { id: '2', name: 'Business Two', rating: 4.0 },
        { id: '3', name: 'Business Three', rating: 3.5 },
        // Add more businesses as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Browse Local Businesses</Text>
            <FlatList
                data={businesses}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
    },
    rating: {
        fontSize: 14,
        color: '#666',
    },
});

export default BusinessLocations;