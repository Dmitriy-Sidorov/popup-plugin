$.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: options.width,
            content: options.content,
            closable: false,
            footerButtons: [
                {
                    text: 'Yes',
                    css: 'btn btn-danger',
                    handler() {
                        modal.close()
                        resolve()
                    }
                },
                {
                    text: 'No',
                    css: 'btn btn-primary',
                    handler() {
                        modal.close()
                        reject()
                    }
                }
            ]
        })
        modal.open()
    })
}