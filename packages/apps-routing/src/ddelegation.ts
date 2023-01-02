// Copyright 2017-2022 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0
// This file has been edited

import type { TFunction } from 'i18next';
import type { Route } from './types';

import Component, { useCounter } from '@polkadot/app-ddelegation';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: []
    },
    group: 'governance',
    icon: 'vote-yea',
    name: 'delegation',
    text: t('nav.ddelegation', 'Delegation', { ns: 'apps-routing' }),
    useCounter
  };
}
