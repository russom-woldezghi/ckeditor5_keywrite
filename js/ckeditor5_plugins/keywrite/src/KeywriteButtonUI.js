import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/keywrite.svg';

export default class KeywriteButtonUI extends Plugin {
    /**
     * @inheritdoc
     */
    init() {
      this._createKeywriteButton();
    }
    
    _createKeywriteButton() {
      const editor = this.editor;
  
      editor.ui.componentFactory.add('keywrite', (locale) => {
        const command = editor.commands.get('keywriteInsert');
        const view = new ButtonView(locale);
  
        view.set({
          label: Drupal.t('Keywrite'),
          icon: icon,
          tooltip: true,
        });

        view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
        
        this.listenTo(view, 'execute', () => {
          editor.execute('keywriteInsert');
        });

        return view;
      });
    }
}