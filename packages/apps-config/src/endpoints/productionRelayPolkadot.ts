// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { POLKADOT_GENESIS } from '../api/constants';
import { getTeleports } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasPolkadot: EndpointOption[] = [
  {
    dnslink: 'edgeware',
    // genesisHash: POLKADOT_GENESIS,
    info: 'edgeware',
    text: 'Edgeware',
    providers: {
      JelliedOwl: 'wss://edgeware.jelliedowl.net',
      'Commonwealth Labs': 'wss://mainnet3.edgewa.re',
      OnFinality: 'wss://edgeware.api.onfinality.io/public-ws',
      Dwellir: 'wss://edgeware-rpc.dwellir.com'
    }
  }
];

export const prodParasPolkadotCommon: EndpointOption[] = [

];

export const prodRelayPolkadot: EndpointOption = {
  dnslink: 'edgeware',
  // genesisHash: POLKADOT_GENESIS,
  info: 'edgeware',
  text: 'Edgeware',
  providers: {
    JelliedOwl: 'wss://edgeware.jelliedowl.net',
    'Commonwealth Labs': 'wss://mainnet3.edgewa.re',
    OnFinality: 'wss://edgeware.api.onfinality.io/public-ws',
    Dwellir: 'wss://edgeware-rpc.dwellir.com'
  },
  teleport: getTeleports(prodParasPolkadotCommon),
  linked: [
    ...prodParasPolkadotCommon,
    ...prodParasPolkadot
  ]
};
