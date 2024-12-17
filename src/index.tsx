/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { Platform } from 'react-native';
import docPicker from 'react-native-document-picker';
import docPickerHarmony from './index.harmony';
import type { DocPickerModuleType } from './index.harmony';

const isOtherPlatform = (() => {
  return Platform.OS === 'android' || Platform.OS === 'ios' || Platform.OS === 'web'
    || Platform.OS === 'macos' || Platform.OS === 'windows';
})();

const exportDocPicker: DocPickerModuleType = isOtherPlatform ? docPicker : docPickerHarmony;

export default exportDocPicker;
