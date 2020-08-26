// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
const fs = require('fs');
const isDev = process.env.NODE_ENV == 'development';

const reactCrud2aFolder = './docs/crud2a-react-react-router/';
let crud2aReactReactRouterFiles = [];

fs.readdirSync(reactCrud2aFolder).forEach((file) => {
  const filePath = `crud2a-react-react-router/${file.split('.')[0]}`;
  crud2aReactReactRouterFiles.push(filePath);
});

const flutterCrud2aFolder = './docs/flutter-crud2a/';
let futterCrud2aFiles = [];

fs.readdirSync(flutterCrud2aFolder).forEach((file) => {
  if (file == 'manuscript') return;
  const filePath = `flutter-crud2a/${file.split('.')[0]}`;
  futterCrud2aFiles.push(filePath);
});

module.exports = {
  crud2aReactReactRouter: crud2aReactReactRouterFiles,
  flutterCrud2a: [
    'flutter-crud2a/introduction',
    'flutter-crud2a/install-flutter-sdk',
    'flutter-crud2a/setup-vscode-editor',
    'flutter-crud2a/create-flutter-app',
    'flutter-crud2a/write-initial-counter-app-from-scratch',
    {
      'Step5 Folder Structure': [
        'flutter-crud2a/prepare-files',
        'flutter-crud2a/note-about-import',
      ],
    },
    {
      'Step6 Add Drawer and Routing': [
        'flutter-crud2a/add-drawer',
        'flutter-crud2a/add-routing',
      ],
    },
    'flutter-crud2a/setup-firebase',
    {
      'Step8 Edit Register Page': [
        'flutter-crud2a/edit-register-page/overview',
        'flutter-crud2a/edit-register-page/build-a-form-with-validation',
        'flutter-crud2a/edit-register-page/styling-text-form-field',
        'flutter-crud2a/edit-register-page/fix-render-flex-error',
        'flutter-crud2a/edit-register-page/retrieve-value-from-text-form-field',
        'flutter-crud2a/edit-register-page/improve-validation',
        'flutter-crud2a/edit-register-page/add-firebase-auth',
      ],
    },
    'flutter-crud2a/login-page',
    'flutter-crud2a/change-content-by-user-state',
    'flutter-crud2a/provider-basics',
    'flutter-crud2a/multi-provider',
    'flutter-crud2a/change-notifier-provider',
    'flutter-crud2a/stream-provider',
    'flutter-crud2a/recap-the-flow-of-state-management',
    'flutter-crud2a/create-user-in-firestore',
    'flutter-crud2a/create-post',
    'flutter-crud2a/list-posts',
    'flutter-crud2a/show-post-page',
    'flutter-crud2a/my-posts-page',
    'flutter-crud2a/delete-post',
    'flutter-crud2a/edit-post-page',
    'flutter-crud2a/firestore-security-rules',
    'flutter-crud2a/firestore-security-rules-test',
  ],
  frontendQuickLearning: [
    'frontend-quick-learning/introduction',
    'frontend-quick-learning/install-chrome-browser',
    'frontend-quick-learning/install-editor',
    'frontend-quick-learning/terminal',
    {
      HTML: [
        'frontend-quick-learning/html-guide/html-intro',
        'frontend-quick-learning/html-guide/understand-basic-html',
        'frontend-quick-learning/html-guide/play-with-html',
        'frontend-quick-learning/html-guide/img-tag',
        'frontend-quick-learning/html-guide/a-tag',
        'frontend-quick-learning/html-guide/check-web-flow',
        'frontend-quick-learning/html-guide/div-and-span',
      ],
    },
    {
      CSS: [
        'frontend-quick-learning/css-guide/css-intro',
        'frontend-quick-learning/css-guide/chrome-dev-tools',
        'frontend-quick-learning/css-guide/css-colors',
        'frontend-quick-learning/css-guide/3-writing-ways-of-css',
        'frontend-quick-learning/css-guide/class-and-id',
        'frontend-quick-learning/css-guide/margin-and-padding',
        'frontend-quick-learning/css-guide/play-with-padding',
        'frontend-quick-learning/css-guide/play-with-margin',
        'frontend-quick-learning/css-guide/media-query',
        'frontend-quick-learning/css-guide/flexbox',
        'frontend-quick-learning/css-guide/flexbox-usecase-navbar',
        'frontend-quick-learning/css-guide/complex-css',
      ],
    },
    {
      'Bootstrap CSS': [
        'frontend-quick-learning/bootstrap-css-guide/bootstrap-css-intro',
        'frontend-quick-learning/bootstrap-css-guide/play-with-bootstrap',
        'frontend-quick-learning/bootstrap-css-guide/components',
        'frontend-quick-learning/bootstrap-css-guide/grid-layout',
        'frontend-quick-learning/bootstrap-css-guide/col-requirements',
        'frontend-quick-learning/bootstrap-css-guide/col-mobile',
        'frontend-quick-learning/bootstrap-css-guide/col-tablet',
        'frontend-quick-learning/bootstrap-css-guide/col-desktop',
        'frontend-quick-learning/bootstrap-css-guide/bootstrap-margin-padding',
        'frontend-quick-learning/bootstrap-css-guide/bootstrap-flexbox',
        'frontend-quick-learning/bootstrap-css-guide/px-em-rem',
      ],
    },
    {
      JavaScript: [
        'frontend-quick-learning/javascript-guide/javascript-intro',
        'frontend-quick-learning/javascript-guide/where-to-write-script',
        'frontend-quick-learning/javascript-guide/dom-document',
        'frontend-quick-learning/javascript-guide/element-events',
        'frontend-quick-learning/javascript-guide/element-properties',
        'frontend-quick-learning/javascript-guide/various-writing-ways',
      ],
    },
    {
      jQuery: [
        'frontend-quick-learning/jquery-guide/jquery-intro',
        'frontend-quick-learning/jquery-guide/play-with-jquery',
      ],
    },
    {
      'JavaScript for Bootstrap': [
        'frontend-quick-learning/bootstrap-js-guide/bootstrap-js-intro',
        'frontend-quick-learning/bootstrap-js-guide/combine-custom-js-with-bootstrap',
      ],
    },
    {
      '🔥 Combine all front end': [
        'frontend-quick-learning/combine-front-end-guide/section-overview',
        'frontend-quick-learning/combine-front-end-guide/change-font',
        'frontend-quick-learning/combine-front-end-guide/navbar',
        'frontend-quick-learning/combine-front-end-guide/jumbotron',
        'frontend-quick-learning/combine-front-end-guide/font-awesome',
        'frontend-quick-learning/combine-front-end-guide/about-us',
        'frontend-quick-learning/combine-front-end-guide/how-it-works',
        'frontend-quick-learning/combine-front-end-guide/customers-voice',
        'frontend-quick-learning/combine-front-end-guide/footer',
        'frontend-quick-learning/combine-front-end-guide/javascript-plugin',
        'frontend-quick-learning/combine-front-end-guide/favicon',
        'frontend-quick-learning/combine-front-end-guide/deploy',
        'frontend-quick-learning/combine-front-end-guide/useful-resources',
      ],
    },
    'frontend-quick-learning/recap-course',
  ],
};
