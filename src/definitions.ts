export interface AppleMusicAuthPlugin {
  requestUserToken(options: { developerToken: string }): Promise<{ token: string }>
}
