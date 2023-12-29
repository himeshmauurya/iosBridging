//
//  CustomMethods.swift
//  iosBridge
//
//  Created by ChicMic on 29/12/23.
//

import Foundation
import React
//for event
//@objc(CustomMethods) class CustomMethods: RCTEventEmitter{
@objc(CustomMethods) class CustomMethods: NSObject{
  @objc func MyMethod(_ name: String, num: Int,increment:RCTResponseSenderBlock) {
    var o=num
     o+=3;
    increment([o,name])
      }
  
  //for event
//  @objc func MyMethod(_ name: String, num: Int,increment:RCTResponseSenderBlock) {
//    var o=num
//     o+=3;
//    increment([o,name])
//    sendEvent(withName: "onIncrement", body: ["count increase",o])
//      }
//  override func supportedEvents() -> [String]! {
//    return ["onIncrement"]
//  }
//  @objc override static func requiresMainQueueSetup() ->Bool{return true}
  
  
  //when we use promise we need one successful path and one error or
  //faliure path so we need to either resolve the promise or reject
  // the promise
  @objc func dec(_ resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) {
    if(false){
      let error=NSError(domain:"",code:200,userInfo:nil)
      reject("ERROR_COUNT","This is error",error)
    }else{
      resolve("promise is resolve")
    }
      }
//  @objc func constantsToExport() ->[String: Any]!{
//    return ["initialCount":0];
//  }
}
