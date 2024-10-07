import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export function HomeScreen({ route }: { route: any }) {
  // Get menuList from route params, default to an empty array if not provided
  const menuList = route.params?.menuList || [];

  // Calculate total items and average price
  const totalItems = menuList.length;
  const totalPrice = menuList.reduce((sum: number, item: any) => sum + item.price, 0);
  const averagePrice = totalItems > 0 ? totalPrice / totalItems : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu Items</Text>

      <View style={styles.summary}>
        <Text style={styles.summaryTI}>Total Items: {totalItems}</Text>
        <Text style={styles.summaryAP}>Average Price: R{averagePrice.toFixed(2)}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {menuList.length === 0 ? (
          <Text>No items in the menu</Text>
        ) : (
          menuList.map((item: any, index: number) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDes}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
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
    padding: 20,
    backgroundColor: '#252525',
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#f21905',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  scrollView: {
    marginTop: 10,
    marginBottom: 20,
  },
  listItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#3c3c3c',
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9f29',
  },
  itemDes: {
    fontSize: 12,
    color: '#fff',
  },
  itemPrice: {
    fontSize: 14,
    color: '#A1CD00',
  },
  itemCourse: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  summary: {
    padding: 10,
    backgroundColor: '#3c3c3c',
    borderRadius: 8,
    marginTop: 10,
  },
  summaryTI: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a67803',
  },
  summaryAP: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#83a603',
  },
});
