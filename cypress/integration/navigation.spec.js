describe("Navigation", () => {
  xit("should navigate to the register page", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Don't have an account? Sign Up")
      .click();

    cy.contains("Username")
      .should("exist");

    cy.contains("Already have an account? Sign in")
      .should("exist");
  });
  
  xit("should navigate to the userpage after signing in", () => {
    cy.visit("/");
  
    cy.get('form')
      .contains("Sign in")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");
  });

  it("should navigate to the user page using the navigation bar", () => {
    cy.visit("/");
  
    cy.contains("User Page")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");
  });

  it("should navigate to the Forest page from the user page", () => {
    cy.visit("/");
  
    cy.contains("User Page")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.contains('Forest')
      // .click({force: true});
      .click();

    cy.contains("The Forest")
      .should("exist");
  });

  xit("should navigate to the landing page after signing out", () => {
    cy.visit("/");
  
    cy.contains("User Page")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.contains("Sign out")
      .click();

    cy.contains("Welcome to ReForest")
      .should("exist");
  });

  it("should navigate to the landing page after clicking on the title", () => {
    cy.visit("/");
  
    cy.contains("User Page")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.get('header')
      .contains("ReForest")
      .click();

    cy.contains("Welcome to ReForest")
      .should("exist");
  });

  xit("should navigate to the capture a new photo page using the drawer on mobile", () => {
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

  it("should upload a file on the Check Waste page", () => {
    cy.visit("/");
  
    cy.contains("User Page")
      .click();

    cy.contains("Your waste in numbers")
      .should("exist");

    cy.contains('Add item')
      .click();

    cy.contains("Upload a photo")
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