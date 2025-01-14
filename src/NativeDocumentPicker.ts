/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export type DocumentPickerResponse = {
  uri: string
  name: string
  copyError?: string
  fileCopyUri: string | null
  type: string | null
  size: number | null
}

export type DirectoryPickerResponse = {
  uri: string
}

export interface Spec extends TurboModule {
  readonly getConstants: () => {}

  // we use "Object" to still have backwards compability with already
  // present methods on iOS, which use NSDictionary
  pick(options: Object): Promise<DocumentPickerResponse[]>
  releaseSecureAccess(uris: string[]): Promise<void>
  pickDirectory(): Promise<DirectoryPickerResponse>
}

export const NativeDocumentPicker = TurboModuleRegistry.getEnforcing<Spec>('RNDocumentPicker')
