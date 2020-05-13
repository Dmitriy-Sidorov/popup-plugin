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

modal.open()