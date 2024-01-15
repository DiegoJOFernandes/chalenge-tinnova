let envVar = Cypress.env("API")
let credentials = `?key=${envVar.KEY}&token=${envVar.TOKEN}`

Cypress.Commands.add('createCard', (idList) => {
  cy.api('POST', `${envVar.ENDPOINT_CARDS}${credentials}`, {idList: idList}).then((res) => {
    expect(res.status).to.eql(200)
    return res.body.id
  })
})

Cypress.Commands.add('deleteCard', (idCard) => {
  cy.api('DELETE', `${envVar.ENDPOINT_CARDS}${idCard}${credentials}`).then((res) => {
    expect(res.status).to.eql(200)
  })
})