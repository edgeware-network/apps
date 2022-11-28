// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { getTeleports } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasEdgeware: EndpointOption[] = [
  {
    info: 'kabocha',
    homepage: 'https://kabocha.network',
    isKSMpara: true,
    paraId: 2113,
    text: 'Kabocha',
    providers: {
      JelliedOwl: 'wss://kabocha.jelliedowl.net'
    }
];

export const prodParasEdgewareCommon: EndpointOption[] = [

];

export const prodEdgewareNetwork: EndpointOption = {
  dnslink: 'edgeware',
  genesisHash: '0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b',
  info: 'edgeware',
  text: 'Edgeware',
  providers: {
    JelliedOwl: 'wss://edgeware.jelliedowl.net',
    'Commonwealth Labs': 'wss://mainnet2.edgewa.re',
    OnFinality: 'wss://edgeware.api.onfinality.io/public-ws',
    Dwellir: 'wss://edgeware-rpc.dwellir.com'
  },
  teleport: getTeleports(prodParasEdgewareCommon),
  linked: [
    ...prodParasEdgewareCommon,
    ...prodParasEdgeware
  ]
};
