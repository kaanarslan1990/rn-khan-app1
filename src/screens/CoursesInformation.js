import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformation() {
  return (
    <ScrollView>
      <Information
        title="Angular Course"
        imageSource={require("../../assets/angular.jpg")}
        desc="Detailed Angular Course"
      />
      <Information
        title="C Course"
        imageSource={require("../../assets/c.png")}
        desc="Detailed C Course"
      />
      <Information
        title="Bootstrap Course"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Detailed Bootstrap5 Course"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
