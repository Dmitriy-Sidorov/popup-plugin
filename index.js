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
            <img src="${options.img}" class="card-img-top" alt="${options.title}">
            <div class="card-body">
                <h5 class="card-title">${options.title}</h5>
                <a href="#" class="btn btn-primary" data-btn-price>Price show</a>
                <a href="#" class="btn btn-danger" data-btn-remove>Remove</a>
            </div>
        </div>`)

    const $btnPrice = $card.querySelector('[data-btn-price]')
    $btnPrice.addEventListener('click', event => {
        event.preventDefault()
        modalPrice.setContent(`
            <div class="my-3">Price of ${options.title}: <b>$${options.price}</b></div>
        `)
        modalPrice.open()
    })

    const $btnRemove = $card.querySelector('[data-btn-remove]')
    $btnRemove.addEventListener('click', event => {
        event.preventDefault()
        $card.remove()
    })

    document.querySelector('[data-card-list]').appendChild($card)
}

fruits.forEach(card => createCard(card));

const modalPrice = $.modal({
    title: 'Price product',
    closable: true,
    width: '300px',
    footerButtons: [
        {
            text: 'Close',
            css: 'btn btn-primary',
            handler() {
                modalPrice.close()
            }
        }
    ]
})