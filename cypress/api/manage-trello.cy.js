describe('Gerenciar Trello', () => {
    
  context('Gerenciar Board', () => {
    it('Cadastrar um board - [POST]', () => {
      cy.createBoard("New Board - Tinnova")
    });

    it('Excluir um board - [DELETE]', () => {
      cy.createBoard("Delete Board").then((idBoard) => {
        cy.deleteBoard(idBoard)
      })
    });
  });

  context('Gerenciar Cards', () => {
    it('Cadastrar um card - [POST]', () => {
      cy.createBoard("Board: Atack on Tasks").then((idBoard) => {
        cy.getListOnBoard(idBoard).then((idList) => {
          cy.createCard(idList)
        })
      })
    });
  
    it('Excluir um card - [DELETE]', () => {
      cy.createBoard("Board: Atack on Tasks").then((idBoard) => {
        cy.getListOnBoard(idBoard).then((idList) => {
          cy.createCard(idList).then((idCard) => {
            cy.deleteCard(idCard)
          })
        })
      })
    });
  });
});
