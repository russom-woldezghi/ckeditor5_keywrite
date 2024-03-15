/* eslint-disable import/no-extraneous-dependencies */
// cspell:ignore insertkeywritecommand
import { Command } from 'ckeditor5/src/core';

/**
 * @module keywrite/insertkeywritecommand
 */

/**
 * The insert keywrite command.
 */
export default class InsertKeywriteCommand extends Command {
  execute() {
    console.log('execute() in InsertKeywriteCommand extemded plugin')
    const { model } = this.editor;

    model.change((writer) => {
      console.log(writer);
    });
  }

  refresh() {
    this.isEnabled = true;
    console.log('refresh() in InsertKeywriteCommand extemded plugin')
  }
}
