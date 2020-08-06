describe("Navigation", () => {
  it("should navigate to the userpage", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
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

    cy.contains("Submit a photo")
      .should("exist");
  });
});