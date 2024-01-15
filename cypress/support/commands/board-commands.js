let envVar = Cypress.env("API")
let credentials = `?key=${envVar.KEY}&token=${envVar.TOKEN}`

Cypress.Commands.add('createBoard', function (boardName) {
  cy.api('POST', `${envVar.ENDPOINT_BOARDS}${credentials}`, {name: boardName}).then((res) => {
    expect(res.status).to.eql(200)
    expect(res.body.name).to.eql(boardName)
    return res.body.id
  })
})

Cypress.Commands.add('deleteBoard', (idBoard) => {
  cy.api('DELETE', `${envVar.ENDPOINT_BOARDS}${idBoard}${credentials}`).then((res) => {
    expect(res.status).to.eql(200)
  })
})
