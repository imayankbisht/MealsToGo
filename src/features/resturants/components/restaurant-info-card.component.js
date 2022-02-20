import React from "react";
import styled from "styled-components/native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";

import { Text, StyleSheet } from "react-native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/14/7b/81/2a/popular-restuarant-in.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
