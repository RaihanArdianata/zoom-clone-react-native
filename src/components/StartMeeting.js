import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StartMeeting = ({name, setName, roomId, setRoomId, joinRoom}) => {
    return (
        <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput} 
                        value={name}
                        placeholder="Enter name"
                        placeholderTextColor="#767476"
                        onChangeText={
                            (text) => setName(text)
                        }
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput} 
                        value={roomId}
                        placeholder="Enter room id"
                        placeholderTextColor="#767476"
                        onChangeText={
                            (text) => setRoomId(text)
                        }
                    />
                </View>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={()=>joinRoom()}
                        style={styles.startMeetingButton}
                    >
                        <Text style={{color: "#ffffff", fontWeight: "bold"}}>Start Meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default StartMeeting


const styles = StyleSheet.create({
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: "center",
    },
    textInput:{
        color: "#ffffff",
        fontSize: 18,
    },
    startMeetingButton:{
        width:350 ,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0470dc",
        height: 50,
        borderRadius: 15
    }
})