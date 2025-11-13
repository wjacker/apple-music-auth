import { registerPlugin } from '@capacitor/core';

import type { AppleMusicAuthPlugin } from './definitions';

const AppleMusicAuth = registerPlugin<AppleMusicAuthPlugin>('AppleMusicAuth');

export * from './definitions';
export { AppleMusicAuth };
