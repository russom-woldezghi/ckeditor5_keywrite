import { Plugin } from 'ckeditor5/src/core';
import KeywriteEditing from './KeywriteEditing';
import KeywriteButtonUI from './KeywriteButtonUI';

export default class Keywrite extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'Keywrite';
  }
  
  /**
   * @inheritdoc
   */
  static get requires() {
    return [KeywriteEditing, KeywriteButtonUI];
  }
}
