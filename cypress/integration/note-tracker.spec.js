describe('Testing note app with full-CRUD operations', () => {
  it('should run through an end-to-end crud operation on the app', () => {
    cy.visit('/');
    cy.get('a').contains('Dashboard').click();
    cy.url().should('include', '/dashboard');

    cy.get('input[data-cy=title]')
      .clear()
      .type('Note Title');
    
    cy.get('input[data-cy=content]')
      .clear()
      .type('Note content test');
    
    cy.get('button[data-cy=note-form-submit]').click();

    cy.get('div[data-cy=note-item]').dblclick();

    // cy.get('[data-cy=modal] input[data-cy=updateTitle]')
    //   .clear()
    //   .type('updated note title');

    // cy.get('[data-cy=modal] textarea[data-cy=updateContent]')
    //   .clear()
    //   .type('updated note content')
    //   .should('have.value', 'updated note content');
    
    // cy.get('[data-cy=modal] textarea[data-cy=updateContent]')
    //   .clear()
    //   .type('This is an updated note')
    //   .should('have.value', 'This is an updated note');

    // cy.get('[data-cy=modal] form[data-cy=note-form]').submit();

    cy.get('div[data-cy=note-item] button[data-cy=note-item-delete-btn]').click();

  });

  it('should create 2 items then delete then delete those items', () => {
    cy.get('input[data-cy=title]')
    .clear()
    .type('First Test- Note Title');
  
    cy.get('textarea[data-cy=content]')
      .clear()
      .type('First Test- Note Content');
    
    cy.get('button[data-cy=note-form-submit]').click();

    cy.get('[data-cy=note-form]').contains('Create Note')
      .get('input[data-cy=title]')
      .clear()
      .type('Second Test- Note Title');

    cy.get('input[data-cy=content]')
      .clear()
      .type('Second Test- Note Content');

    cy.get('button[data-cy=note-form-submit]').contains('Create Note').click({multiple: true});

    cy.get('button[data-cy=note-item-dlt-btn]').click({multiple: true});

  })
});
