/*абстрактно описываем обьект title
  создаем обьекты, которые будут описывать другие блоки в index.html
  получаем доступ до блока, генереруем html циклом*/

import {model} from ' ./model' // импортируем в model.js //
import { title, text, columns, image} from './templates'
import ' ./main.css'

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

