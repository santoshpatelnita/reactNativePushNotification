import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import {
  showNotification,
  handleScheduleNotification,
  handleCancel, createChannel} from './src/pushnotification'
const App = () => {
  return (
    <SafeAreaView style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Push Notification </Text>

      <TouchableOpacity style={{
        width: 300,
        height:44, 
        backgroundColor: 'blue',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
        }}
        onPress={() => showNotification('Hellow', 'message')}
        >
        <Text style={{color: '#FFF', fontWeight: '700', fontSize: 12}}>Sent Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width: 300,
        height:44, 
        backgroundColor: 'blue',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
        }}
        onPress={() => handleScheduleNotification('Hellow', 'message')}
        >
        <Text style={{color: '#FFF', fontWeight: '700', fontSize: 12}}>Sent Notification after 5 Sec</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width: 300,
        height:44, 
        backgroundColor: 'blue',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
        }}
        onPress={() => handleCancel('Hellow', 'message')}
        >
        <Text style={{color: '#FFF', fontWeight: '700', fontSize: 12}}>Cancel Notification</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App
