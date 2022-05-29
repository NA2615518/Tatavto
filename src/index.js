/*абстрактно описываем обьект title
  создаем обьекты, которые будут описывать другие блоки в index.html
  получаем доступ до блока, генереруем html циклом*/

import {model} from ' ./model' // импортируем в model.js //
import { templates } from './templates'
import ' ./styles /main.css'

const $site = document.querySelector( '#site')





model.forEach(block  => {

 
    /*  let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if  (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns' ) {
        html = columns(block)
    } else if (block.type === 'image') {
        html = image(block)
    }
*/

const toHTML = templates[block.type]
if (toHTML) {

    $site.insertAdjacentHTML(where, 'beforeend', toHTML(block))
}
})

// Функции title, text, columns, image вынесены в файл templates.js дабы код был чистым //

