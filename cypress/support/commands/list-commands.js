let envVar = Cypress.env("API")
let credentials = `?key=${envVar.KEY}&token=${envVar.TOKEN}`

Cypress.Commands.add('createList', function (listName, idBoard) {
  cy.api('POST', `${envVar.ENDPOINT_LISTS}${credentials}`, {name:listName, idBoard:idBoard}).then((res) => {
    expect(res.body.name).to.eql(listName)
    expect(res.body.idBoard).to.eql(idBoard)
    expect(res.status).to.eql(200)
    console.log(res)
    return res.body.id
  })
})

Cypress.Commands.add('getListOnBoard', function (idBoard) {
  cy.api('GET', `${envVar.ENDPOINT_BOARDS}${idBoard}/lists${credentials}`).then((res) => {    
    expect(res.status).to.eql(200)
    expect(res.body[0].name).to.eql("A fazer")
    return res.body[0].id
  })
})