export interface AppleMusicAuthPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
