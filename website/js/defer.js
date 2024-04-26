/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2024 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
import {sidebar} from './modules/sidebar.js';
import {rams} from './rams/rams.js';

if (meta.title === '') {
    meta.title = `<h1>Rams</h1>`;
} else {
    meta.title = `<h1 data-text="h0">${meta.title}</h1>`;
}

let nav = `
    <nav id="nav" data-navbar="top"></nav>
    `;

let header = `
        <div id="header" data-container>
            ${meta.title}
        </div>
        `;

let main = `
        <div data-container data-grid="main">
            <aside id="aside" data-column="large-3 medium-3 small-4"></aside>
            <article id="content" data-column="large-9 medium-9 small-4"></article>
        </div>
        `;

if (meta.type === 'fullPage') {
    main = `
        <div data-container data-grid="main">
            <div id="content" data-column="large-12 medium-12 small-4"></div>
        </div>
        `;
}

let footer = `
    <footer data-section="footer">
        <div id="footer" data-container>
        </div>
    </footer>
    `;

// check and set template url for localhost or for public url
let templateURL;
location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? (templateURL = window.location.origin + '/templates/a.90a1e42e.html')
    : (templateURL =
          window.location.origin + '/atkinson-hyperlegible-pro/templates/a.191129c6.html');

// create main layout
let layout = `
        ${nav}
        <header data-section="header">
            ${header}
        </header>
        <main data-section="main">
            ${main}
        </main>
        ${footer}
        `;

// parse everything together
template
    .fromString(layout, 'body')
    .setTemplate('#headerTemplate', '#header')
    .setTemplate('#contentTemplate', '#content', sidebar)
    .fetchTemplate(templateURL, '#nav')
    .fetchTemplate(templateURL, '#footer');

rams.toggle();
// .carousel()
// .addControls()
// .addIndicators()
// .addTouchControls()
// .addKeyboardControls();
