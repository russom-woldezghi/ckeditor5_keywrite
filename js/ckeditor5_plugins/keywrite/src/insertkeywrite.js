/* eslint-disable import/no-extraneous-dependencies */
// cspell:ignore insertkeywritecommand
import { Command } from 'ckeditor5/src/core';
import KeywriteWeb from "@keywrite/web";
import EthiopicInputMethods from "@keywrite/ethiopic-input-methods";


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

    // const inputInstance = new KeywriteWeb(inputElem, EthiopicInputMethods);
    // const textareaInstance = new KeywriteWeb(
    //   textareaElem,
    //   EthiopicInputMethods
    // );

    this.isEnabled = true;
    console.log('refresh() in InsertKeywriteCommand extemded plugin')
  }
}
