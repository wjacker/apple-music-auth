import { registerPlugin } from '@capacitor/core';

import type { AppleMusicAuthPluginPlugin } from './definitions';

const AppleMusicAuthPlugin = registerPlugin<AppleMusicAuthPluginPlugin>('AppleMusicAuthPlugin', {
  web: () => import('./web').then((m) => new m.AppleMusicAuthPluginWeb()),
});

export * from './definitions';
export { AppleMusicAuthPlugin };
