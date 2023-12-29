//
//  CustomMethods.m
//  iosBridge
//
//  Created by ChicMic on 29/12/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
//for event
//#import "React/RCTEventEmitter.h"
//@interface RCT_EXTERN_MODULE(CustomMethods, RCTEventEmitter)
@interface RCT_EXTERN_MODULE(CustomMethods, NSObject)
RCT_EXTERN_METHOD(MyMethod:(NSString*)name num:(NSInteger)num increment:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(dec:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end
