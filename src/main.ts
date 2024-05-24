// src/main.ts
import * as Plugin from './index';
import * as mdb from 'mdb-ui-kit';

import Aurelia, { Registration } from 'aurelia';

import { MyApp } from './my-app';
import { RouterConfiguration } from '@aurelia/router';
import { StoreConfiguration } from '@aurelia/store-v1';
import { initialState } from './state';

Aurelia.register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
    .register(StoreConfiguration.withInitialState(initialState))
    .register(mdb)
    .register(Plugin)
    .app(MyApp)
    .start();
