// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import { externalLogos } from '../ui/logos';

export default {
  chains: {
    Edgeware: 'edgeware'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://edgscan.ink/#/${path}/${data.toString()}`,
  isActive: true,
  logo: externalLogos.edgscan as string,
  paths: {
    address: 'accounts',
    block: 'blocks',
    extrinsic: 'extrinsics'
  },
  url: 'https://edgscan.ink/'
};
