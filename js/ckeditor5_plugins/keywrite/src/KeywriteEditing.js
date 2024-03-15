/* eslint-disable import/no-extraneous-dependencies */
import { Plugin } from 'ckeditor5/src/core';
import { Input } from 'ckeditor5/src/typing';
import InsertKeywriteCommand from './insertkeywrite.js';


/**
 * Uses Keywrite to transliterate to configured language.
 *
 * @private
 */
class KeywriteEditing extends Input {
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
    this.editor.commands.add(
      'keywriteInsert',
      new InsertKeywriteCommand(this.editor),
    );

    }
  }

export default KeywriteEditing;
