import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppleMusicAuthPlugin)
public class AppleMusicAuthPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "AppleMusicAuthPlugin"
    public let jsName = "AppleMusicAuth"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]

    @objc public func requestUserToken(_ call: CAPPluginCall) {
        let devToken = call.getString("developerToken") ?? ""
        let controller = SKCloudServiceController()
        if SKCloudServiceController.authorizationStatus() != .denied {
            SKCloudServiceController.requestAuthorization { status in
                guard status == .authorized else {
                    call.reject("not authorized")
                    return
                }

                controller.requestUserToken(forDeveloperToken: devToken) {
                    token,
                    err in
                    if let token = token {
                        call.resolve(["token": token])
                    } else {
                        call.reject("failed")
                    }
                }
            }
        }
    }
}
