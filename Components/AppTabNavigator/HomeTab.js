import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Content, Icon, Thumbnail } from "native-base";
import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  state = {
    feeds: []
  };

  componentWillMount() {
    this.fetchFeeds().then(feeds => {
      this.setState({
        feeds
      });
    });
  }

  fetchFeeds() {
    const data = {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: "en", limit: 20 }]
      ]
    };
    return fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => res.result);
  }

  render() {
    return (
      <Container style={style.container}>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}> Watch All</Text>
              </View>
            </View>

            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{ uri: "https://steemitimages.com/u/jacobyu/avatar" }}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{
                    uri: "https://steemitimages.com/u/blockchainstudio/avatar"
                  }}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{ uri: "https://steemitimages.com/u/gomdory/avatar" }}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{ uri: "https://steemitimages.com/u/bbooaae/avatar" }}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{
                    uri: "https://steemitimages.com/u/codingman/avatar"
                  }}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{ uri: "https://steemitimages.com/u/bukio/avatar" }}
                />
              </ScrollView>
            </View>
          </View>
          {this.state.feeds.map((feed, index) => (
            <CardComponent key={"feed" + index} data={feed} />
          ))}
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
