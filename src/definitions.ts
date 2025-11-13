export interface AppleMusicAuthPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
