/* eslint-disable import/no-extraneous-dependencies */
import { Plugin } from 'ckeditor5/src/core';

/**
 * Uses Keywrite to transliterate to configured language.
 *
 * @private
 */
class KeywriteEditing extends Plugin {
  /**
   * @inheritdoc
   */
  static get pluginName() {
    return 'KeywriteEditing';
  }

  /**
   * @inheritdoc
   */
  init() {
      console.log('init in KeywriteEditing')
    }
  }

export default KeywriteEditing;
