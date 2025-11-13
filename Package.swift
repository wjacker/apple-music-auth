// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ChrpAppleMusicAuth",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "ChrpAppleMusicAuth",
            targets: ["AppleMusicAuthPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "AppleMusicAuthPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppleMusicAuthPluginPlugin"),
        .testTarget(
            name: "AppleMusicAuthPluginPluginTests",
            dependencies: ["AppleMusicAuthPluginPlugin"],
            path: "ios/Tests/AppleMusicAuthPluginPluginTests")
    ]
)