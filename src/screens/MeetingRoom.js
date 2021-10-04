import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import {io} from 'socket.io-client'

let socket
const MeetingRoom = () => {

    const {name, setName} = useState()
    const {roomId, setRoomId} = useState()

    const joinRoom = () => {
        socket.emit('join-room', {roomId: roomId, userName: name})
    }

    useEffect(()=>{
        const API_URL = "http://192.168.20.33:3001"
        socket = io(`${API_URL}`)

        socket.on('connection', ()=>{
            console.log("connected");
        })
        socket.on
    },[])

    return (
        <View style={styles.container}>
            {/* Start Meeting Section */}
            <StartMeeting 
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinRoom={joinRoom}
            />
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    }
})