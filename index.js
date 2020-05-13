const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
]

function createCard(options) {
    const $card = document.createElement('div')
    $card.classList.add('col-4')
    $card.insertAdjacentHTML('afterbegin', `
        <div class="card" id="${options.id}">
            <img src="${options.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${options.title}</h5>
                <a href="#" class="btn btn-primary">Price show</a>
                <a href="#" class="btn btn-danger">Remove</a>
            </div>
        </div>`)

    document.querySelector('[data-card-list]').appendChild($card)
}

fruits.forEach(card => createCard(card));

const modal = $.modal({
    closable: true,
    content: `
    <h2>Lorem ipsum.</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil.</p>
    `,
    footerButtons: [
        {
            text: 'Ok',
            css: 'btn btn-primary',
            handler() {
                console.log('Primary click')
            }
        },
        {
            text: 'Cancel',
            css: 'btn btn-danger',
            handler() {
                console.log('Danger click')
            }
        }
    ]
})