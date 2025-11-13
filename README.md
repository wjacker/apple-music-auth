# apple-music-auth

Capacitor plugin for Apple Music authorization

## Install

```bash
npm install apple-music-auth
npx cap sync
```

## iOS Setup

### Manually Adding Permissions (Recommended)

To enable Apple Music authorization, you need to add the required permission to your iOS project:

1. Open the plugin’s Xcode workspace:  
ios/AppleMusicAuth/Plugin.xcworkspace
2. Select your **Target → Info → +** to add a new key.  
3. Add the following key and description:  

| Key | Description |
|-----|-------------|
| `NSAppleMusicUsageDescription` | `We need access to Apple Music to authorize user accounts` |

> ⚠️ This method is simple and reliable. In Capacitor 7, it is no longer necessary to modify `Info.plist` via `plugin.xml`.

## API

<docgen-index>

* [`requestUserToken(options: { developerToken: string }): Promise<{ token: string }>`](#requestUserToken)

</docgen-index>

<docgen-api>
Request an Apple Music user token using a developer token. 


### requestUserToken(options: { developerToken: string })

```typescript
requestUserToken(options: { developerToken: string; }) => Promise<{ token: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ developerToken: string; }</code> |

**Returns:** <code>Promise&lt;{ token: string; }&gt;</code>

--------------------

</docgen-api>
