# Kentico Cloud Toast UI editor custom element

Toast UI editor is based on [Toast UI Editor](https://ui.toast.com/tui-editor). It is a Markdown WYSIWYG Editor including GFM Standard + Chart & UML Extensible.
All of the editor [extensions]()https://github.com/nhnent/tui.editor/blob/master/docs/using-extensions.md) are enabled in this custom element.

![Toast UI editor](ToastUIEditor.gif)

## Usage

If you want to use the Toast UI editor in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open Content types tab
* Open / create a content model to which you want to add the Toast UI Editor
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://Simply007.github.io/kc-tui-editor-custom-element/dist/index.html

## Installation

Toast UI editor is in repository: https://github.com/Simply007/kc-tui-editor-custom-element.

If you want to adjust the implementation, first download [Kentico Cloud Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). This repository should be positioned within `/client/custom-elements` folder. For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).

### Get started

You could use following commands to set up the development environment

Prerequisites:

* Node.js
* git

```plain
git clone https://github.com/Kentico/custom-element-devkit.git
cd custom-element-devkit
git clone https://github.com/Simply007/kc-tui-editor-custom-element.git ./client/custom-elements/KCTuiEditor
npm install --save tui-editor
npm start -- -hw
```

Browse: https://localhost:3000/custom-elements/KCTuiEditor/wrap
