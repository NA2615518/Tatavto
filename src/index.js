/*абстрактно описываем обьект title
  создаем обьекты, которые будут описывать другие блоки в index.html
  получаем доступ до блока, генереруем html циклом*/

import {model} from ' ./model' // импортируем в model.js //
import { title, text, columns, image} from './templates'

const $site = document.querySelector( '#site')

model.forEach(block  => {
    let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if  (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns' ) {
        html = columns(block)
    } else if (block.type === 'image') {
        html = image(block)
    }

    $site.insertAdjacentHTML(where: 'beforeend', html)
})

function title(block) {
    return `
    <div class="row">
    <div class="col-sm">
    <h1>${block.value}</h1>
    </div>
    </div>
    `
}

function text(block) {
    return `
    <div class="row">
    <div class="col-sm">
    <p>${block.value}</p>
    </div>
    </div>
    `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm">${item}</div> `)
    return `
    <div class="row">
    ${html.join ('') }
    </div>
    `
}

function  image(block) {
    return `
    <div class="row">
    <img src="${block.value}" />
    </div>
    `

    
    
}