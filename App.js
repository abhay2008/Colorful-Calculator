// By
/* Abhay : All of the React Native(design implementation)
   Simon : Parser(calculating algorithm)
   Neva : Design decision
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  Platform,
  ToastAndroid
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import parseExpression from "./parser";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [expression, setExpression] = useState("");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.outerContainer}>
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      />
      <View
        style={isEnabled ? styles.ltdisplayContainer : styles.displayContainer}
      >
        <View style={{ marginTop: RFValue(28), margin: RFValue(10), alignSelf: 'flex-start'}}>
          {isEnabled ? (
            <Feather name="sun" size={RFValue(30)} color="yellow" />
          ) : (
            <Ionicons name="moon" size={RFValue(25)} color="yellow" />
          )}
         
        </View>
        <View style={{ marginRight: RFValue(10), alignSelf: 'flex-end', marginTop: RFValue(-30)}}>
          <Switch
            trackColor={{ false: "#3a3663", true: "#426336" }}
            thumbColor={isEnabled ? "#d8ff29" : "#14111c"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={isEnabled ? styles.ltdisplayText : styles.displayText}>
          {expression}
        </Text>
      </View>
      <View
        style={isEnabled ? styles.ltkeypadContainer : styles.keypadContainer}
      >
        <View style={{ flex: 1, width: "95%" }}>
          <View style={{ marginLeft: "85%" }}>
            <Feather
              name="delete"
              size={RFPercentage(5)}
              color="red"
              onPress={() => setExpression(expression.slice(0, -1))}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: "15%",
              marginTop: RFValue(10),
              marginBottom: RFValue(5),
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression("")}
            >
              <Text
                style={[
                  styles.keyText,
                  {
                    fontSize: RFPercentage(5),
                    color: isEnabled ? "#cf672b" : "tomato",
                    fontWeight: "bold",
                  },
                ]}
              >
                C
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "(")}
            >
              <Text
                style={[
                  styles.keyText,
                  {
                    fontSize: RFPercentage(4),
                    color: isEnabled ? "orange" : "#f7d15e",
                    fontWeight: "bold",
                  },
                ]}
              >
                {"("}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + ")")}
            >
              <Text
                style={[
                  styles.keyText,
                  {
                    fontSize: RFPercentage(4),
                    color: isEnabled ? "orange" : "#f7d15e",
                    fontWeight: "bold",
                  },
                ]}
              >
                {")"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "/")}
            >
              <Text
                style={
                  isEnabled
                    ? [
                        styles.ltkeyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "teal",
                          fontWeight: "bold",
                        },
                      ]
                    : [
                        styles.keyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "aqua",
                          fontWeight: "bold",
                        },
                      ]
                }
              >
                ÷
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              marginTop: RFValue(5),
              marginBottom: RFValue(5),
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "7")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "8")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "9")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "*")}
            >
              <Text
                style={
                  isEnabled
                    ? [
                        styles.ltkeyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "teal",
                          fontWeight: "bold",
                        },
                      ]
                    : [
                        styles.keyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "aqua",
                          fontWeight: "bold",
                        },
                      ]
                }
              >
                ×
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              marginTop: RFValue(5),
              marginBottom: RFValue(5),
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "4")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "5")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "6")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "-")}
            >
              <Text
                style={
                  isEnabled
                    ? [
                        styles.ltkeyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "teal",
                          fontWeight: "bold",
                        },
                      ]
                    : [
                        styles.keyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "aqua",
                          fontWeight: "bold",
                        },
                      ]
                }
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              marginTop: RFValue(5),
              marginBottom: RFValue(5),
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "1")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "2")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "3")}
            >
              <Text style={isEnabled ? styles.ltkeyText : styles.keyText}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + "+")}
            >
              <Text
                style={
                  isEnabled
                    ? [
                        styles.ltkeyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "teal",
                          fontWeight: "bold",
                        },
                      ]
                    : [
                        styles.keyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "aqua",
                          fontWeight: "bold",
                        },
                      ]
                }
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              marginTop: RFValue(5),
              marginBottom: RFValue(35),
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={
                isEnabled
                  ? [styles.ltkey, { width: "49%" }]
                  : [styles.key, { width: "49%" }]
              }
              onPress={() => setExpression(expression + "0")}
            >
              <Text
                style={
                  isEnabled
                    ? [styles.ltkeyText, { fontSize: RFPercentage(5) }]
                    : [styles.keyText, { fontSize: RFPercentage(5) }]
                }
              >
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() => setExpression(expression + ".")}
            >
              <Text
                style={
                  isEnabled
                    ? {
                        fontSize: RFPercentage(10),
                        alignSelf: "center",
                        marginBottom: 40,
                        color: "#2a2391",
                        fontWeight: "bold",
                      }
                    : {
                        fontSize: RFPercentage(10),
                        alignSelf: "center",
                        marginBottom: 40,
                        color: "#d6b0e8",
                        fontWeight: "bold",
                      }
                }
              >
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isEnabled ? styles.ltkey : styles.key}
              onPress={() =>{
                try {
                  setExpression(parseExpression(expression).reduce().toString())
                } catch (error) {
                  setExpression("");
                  return (
                    Platform.OS === "android" ? (
                      ToastAndroid.show(`❌ Operation Invalid ❌ ${error.message}`, ToastAndroid.LONG)
                    ) : (
                      alert(`❌ Operation Invalid ❌ ${error.message}`)
                    )
                  )
                }
               
              }}
            >
              <Text
                style={
                  isEnabled
                    ? [
                        styles.ltkeyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "#622cde",
                          fontWeight: "bold",
                        },
                      ]
                    : [
                        styles.keyText,
                        {
                          fontSize: RFPercentage(6),
                          color: "#9e8fff",
                          fontWeight: "bold",
                        },
                      ]
                }
              >
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  displayContainer: {
    flex: 0.35,
    backgroundColor: "#3d4091",
    width: "100%",
  },
  ltdisplayContainer: {
    flex: 0.35,
    backgroundColor: "#afabff",
    width: "100%",
  },
  displayText: {
    fontSize: RFValue(30),
    color: "plum",
    alignSelf: "center",
  },
  ltdisplayText: {
    fontSize: RFValue(30),
    color: "#1f1473",
    alignSelf: "center",
  },
  keypadContainer: {
    flex: 0.65,
    backgroundColor: "#190f33",
    alignItems: "center",
    width: "105%",
    shadowColor: "#190f33",
    shadowOffset: { width: 0, height: RFValue(-16) },
    shadowOpacity: 1,
    shadowRadius: RFValue(10),
    elevation: RFValue(30),
  },
  ltkeypadContainer: {
    flex: 0.65,
    backgroundColor: "#5865F2",
    alignItems: "center",
    width: "105%",
    shadowColor: "#5865F2",
    shadowOffset: { width: 0, height: RFValue(-16) },
    shadowOpacity: 1,
    shadowRadius: RFValue(10),
    elevation: RFValue(30),
  },
  key: {
    width: "24%",
    height: "135%",
    borderRadius: RFValue(100),
    borderWidth: 1,
    borderColor: "aqua",
    marginLeft: "1%",
    justifyContent: "center",
    backgroundColor: "#0a080a",
  },
  ltkey: {
    width: "24%",
    height: "135%",
    borderRadius: RFValue(100),
    borderWidth: 2,
    borderColor: "#5c44bd",
    marginLeft: "1%",
    justifyContent: "center",
    backgroundColor: "gainsboro",
  },
  keyText: {
    fontSize: RFPercentage(4),
    alignSelf: "center",
    color: "#abffbc",
    fontWeight: "bold",
  },
  ltkeyText: {
    fontSize: RFPercentage(4),
    color: "#479c22",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
