import html from './html.svg';
import css from './css.svg';
import javascript from './javascript.svg';
import react from './react.svg';
import materialui from './material-ui.svg';
import github from './github.svg';
import firebase from './firebase.svg';
import jquery from './jquery.svg';
import linux from './linux.svg';
import subversion from './svn.svg';
import nextjs from './nextjs.svg';
import typescript from './typescript.svg';

export const getSelectedImage = selectedKey => {
  let retImage;
  switch (selectedKey) {
    case 'html':
      retImage = html;
      break;
    case 'css':
      retImage = css;
      break;
    case 'javascript':
      retImage = javascript;
      break;
    case 'typescript':
      retImage = typescript;
      break;
    case 'react':
      retImage = react;
      break;
    case 'materialui':
      retImage = materialui;
      break;
    case 'nextjs':
      retImage = nextjs;
      break;
    case 'git':
      retImage = github;
      break;
    case 'firebase':
      retImage = firebase;
      break;
    case 'jquery':
      retImage = jquery;
      break;
    case 'linux':
      retImage = linux;
      break;
    case 'subversion':
      retImage = subversion;
      break;
    default:
      break;
  }
  return retImage;
}