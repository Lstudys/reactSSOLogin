/**
 * store
 * created by 李永晖 on 2022/01/14
 */

import {configureStore } from '@reduxjs/toolkit';

import authState from '../reducers/index';

const store = configureStore ({
    reducer:{authState}
})

export default store;