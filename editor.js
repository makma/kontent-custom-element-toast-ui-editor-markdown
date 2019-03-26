import Editor from 'tui-editor';

import 'tui-editor/dist/tui-editor-extChart';
import 'tui-editor/dist/tui-editor-extUML';
import 'tui-editor/dist/tui-editor-extTable';
import 'tui-editor/dist/tui-editor-extColorSyntax';
import 'tui-editor/dist/tui-editor-extScrollSync';
import 'tui-editor/dist/tui-editor-Viewer-all';

import 'tui-editor/dist/tui-editor-contents.min.css';
import 'codemirror/lib/codemirror.css';
import 'tui-chart/dist/tui-chart.min.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-color-picker/dist/tui-color-picker.min.css';

import './editor.css';

import '../../shared/custom-module.css';

import { tryParseJSON } from '../../../common/utils/utils';

let height = 400;
let value = '';
let editor;

function storeValue() {
  value = editor.getValue();
  CustomElement.setValue(value);
}

function updateDisabled(disabled) {
  document.querySelector('#reactapp').innerHTML = '';
  if (disabled) {
    editor = Editor.factory({
      el: document.querySelector('#reactapp'),
      height: `${height}px`,
      initialValue: value,
      viewer: true
    });
  }
  else {
    editor = Editor.factory({
      el: document.querySelector('#reactapp'),
      height: `${height}px`,
      initialValue: value,
      viewer: false,
      events: {
        change: storeValue
      },
      exts: [
        'chart',
        'scrollSync',
        'colorSyntax',
        'uml',
        'mark',
        'table'
      ]
    });
  }
};


CustomElement.init((element, _context) => {
  height = (element.config || {}).height || 400;
  value = element.value;
  CustomElement.setHeight(height);
  updateDisabled(element.disabled);
  CustomElement.onDisabledChanged(updateDisabled);

});
