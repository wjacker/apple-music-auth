import Foundation

@objc public class AppleMusicAuthPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
