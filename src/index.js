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

import './css/editor.css';

import './css/custom-element.css';

let height = 400;
let value = '';
let editor;

function storeValue() {
  value = editor.getValue();
  CustomElement.setValue(value);
}

function updateDisabled(disabled) {
  document.querySelector('#editor').innerHTML = '';
  if (disabled) {
    editor = Editor.factory({
      el: document.querySelector('#editor'),
      height: `${height}px`,
      initialValue: value,
      viewer: true
    });
  }
  else {
    editor = Editor.factory({
      el: document.querySelector('#editor'),
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
