import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { NativeModules,NativeEventEmitter } from 'react-native'

const {CustomMethods}=NativeModules
//for event
//const CounterEvent=new NativeEventEmitter(CustomMethods)
const App = () => {
  const ele=useRef(4)
  //for event
  // useEffect(()=>{
  //   CounterEvent.addListener('onIncrement',(result)=>{
  //     console.log('onIncrement received',result);
  //   })

  //   // return ()=>{
  //   //   CounterEvent.removeAllListeners();
  //   // }
  // },[])
  const calliOSNativeMethos=async()=>{
 
    CustomMethods.MyMethod("raj",ele.current,(val,myString)=>{
      ele.current=val;
      console.log("hello",ele.current,myString)
    })
  
  
  // }
  //for event
  // const calliOSNativeMethos=async()=>{
 
  //   CustomMethods.MyMethod("raj",ele.current,(val,myString)=>{
  //     ele.current=val;
  //     console.log("hello",ele.current,myString)
  //   })
  
  
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