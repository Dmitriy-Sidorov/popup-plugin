function _createModal(options = {}) {
    const modal = document.createElement('div')
    modal.classList.add('custom-modal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close-event="true">
        <div class="modal-window" style="width: ${options.width || '600px'}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'Окно'}</span>
                ${options.closable ? `<span data-close-event="true" class="modal-close">&times;</span>` : ``}
            </div>
            <div class="modal-body">
                ${options.content || ''}
            </div>
            <div class="modal-footer">
                <button class="btn">Ok</button>
                <button class="btn">Cancel</button>
            </div>
        </div>
    </div>`)

    return modal
}

$.modal = function (options) {
    const animationSpeed = 200
    const $modal = _createModal(options)
    let closing = false
    const listener = event => {
        if (event.target.dataset.closeEvent) {
            modal.close()
        }
    }
    const modal = {
        open() {
            document.body.appendChild($modal)
            $modal.addEventListener('click', listener);
            setTimeout(() => {
                !closing && $modal.classList.add('open')
            }, animationSpeed)
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            $modal.removeEventListener('click', listener);
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
                $modal.remove()
            }, animationSpeed)
        }
    }

    return Object.assign(modal, {
        setContent(html) {

        }
    })
}