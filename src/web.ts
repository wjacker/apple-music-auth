import { WebPlugin } from '@capacitor/core';

import type { AppleMusicAuthPluginPlugin } from './definitions';

export class AppleMusicAuthPluginWeb extends WebPlugin implements AppleMusicAuthPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
