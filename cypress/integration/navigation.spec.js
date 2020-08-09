describe("Navigation", () => {
  it("should navigate to the userpage", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");
  });

  it("should navigate to the Forest page", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.contains('The Forest')
      .click({force: true});

    cy.contains("This is the Forest")
      .should("exist");
  });

  it("should navigate to the register page", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Don't have an account? Sign Up")
      .click();

    cy.contains("Username")
      .should("exist");

    cy.contains("Already have an account? Sign in")
      .should("exist");
  });

  it("should navigate to the login page after signing out", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.contains("Sign out")
      .click();

    cy.get('form')
      .contains("Sign in")
      .should("exist");
  });

  it("should navigate to the capture a new photo page using the drawer", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.get('[aria-label="open drawer"]')
      .click();

    cy.contains("Capture a photo")
      .should("exist")
      .click();

    cy.contains("Take a photo")
      .should("exist");
  });

  it("should upload a file on the capture a new photo page", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.contains('Add item')
      .click();

    cy.contains("Or upload a file")
      .should("exist");

    cy.fixture('/images/boxes.jpg').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'boxes.jpg',
            mimeType: 'image/jpg'
        });
    });

    cy.contains("Analyzing")
      .should("exist");
  });
});