import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { NativeModules } from 'react-native'

const {CustomMethods}=NativeModules
const App = () => {
  const ele=useRef(4)
  const calliOSNativeMethos=async()=>{
 
    CustomMethods.MyMethod("raj",ele.current,(val,myString)=>{
      ele.current=val;
      console.log("hello",ele.current,myString)
    })
  
  
  }
  const decrement=async()=>{
    CustomMethods.dec().then((res)=>{
console.log("object",res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <View style={{marginTop:80}}>
      <Text onPress={calliOSNativeMethos}>Click to test ios native function</Text>
      <Text onPress={decrement}>Decrement</Text>
    </View>
  )
}

export default App