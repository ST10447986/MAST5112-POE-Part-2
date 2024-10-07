import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export function MenuView({ route }: { route: any }) {
  const menuList = route.params?.menuList || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Menu</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menuList.length === 0 ? (
          <Text style={styles.noItemsText}>No items in the menu</Text>
        ) : (
          menuList.map((item: any, index: number) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.itemCourse}>{item.course}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

// ----- Styles -----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  noItemsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#6c757d',
    marginTop: 50,
  },
  listItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // for Android shadow
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 5,
    color: '#6c757d',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#28a745',
  },
  itemCourse: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#6c757d',
  },
});