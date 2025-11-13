import { WebPlugin } from '@capacitor/core';

import type { AppleMusicAuthPlugin } from './definitions';

export class AppleMusicAuthWeb extends WebPlugin implements AppleMusicAuthPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
