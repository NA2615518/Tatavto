//абстрактно описываем обьект title
//создаем обьекты, которые будут описывать другие блоки в index.html
const model = [
    {type: 'title', value: 'ООО ТАВ'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [ '111111111', '222222222', '333333333'
        ]},
    {type: 'image', value: './assets/image.png' }
]
// получаем доступ до блока, генереруем html циклом
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