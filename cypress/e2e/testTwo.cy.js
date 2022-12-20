describe("testing the dev.reky.se hemsida", () => {
  beforeEach(() => {
    cy.visit("https://dev.reky.se/");
    cy.get("#rcc-confirm-button").click();
    cy.intercept("POST", "https://reky.azurewebsites.net/api/apply-test");
  });

  // testfall 1
  it("should show specialområde val", () => {
    cy.getByTestId("yrke-systemutvecklare").click();

    cy.getByTestId("java").click();
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("place-textbox-textbox").type("Stockholm");
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("contact-name-textbox").type("Mohona");
    cy.getByTestId("contact-email-textbox").type("mohona@chef.com");
    cy.getByTestId("contact-tel-textbox").type("123");
    cy.getByTestId("send-form-button").click();
    // cy.getByTestId("klart-text").contains('KLART');
  });

  // testfall 2
  it("should show specialområde val", () => {
    cy.getByTestId("yrke-redovisningsekonom").click();
    cy.getByTestId("skatt").click();
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("place-textbox-textbox").type("Stockholm");
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("contact-name-textbox").type("Omar");
    cy.getByTestId("contact-email-textbox").type("omar@yahoo.com");
    cy.getByTestId("contact-tel-textbox").type("123");
    cy.getByTestId("send-form-button").click();
    // cy.getByTestId("klart-text").contains('KLART');
  });

  // testfall 3
  it("should show specialområde val", () => {
    cy.getByTestId("yrke-annat").click();
    cy.getByTestId("yrke-fritext").type("JS developer");
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("place-textbox-textbox").type("Stockholm");
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("contact-name-textbox").type("Omar");
    cy.getByTestId("contact-email-textbox").type("omar@yahoo.com");
    cy.getByTestId("contact-tel-textbox").type("123");
    cy.getByTestId("send-form-button").click();
    // cy.getByTestId("klart-text").contains('KLART');
  });

  // testfall 4
  it("should show specialområde val", () => {
    cy.getByTestId("yrke-systemutvecklare").click();
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("expertis-validering").contains("Du måste välja minst en!");
    cy.getByTestId("java").click();
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("place-textbox-textbox").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("place-textbox-textbox").type("Stockholm");
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("send-form-button").click();
    cy.getByTestId("contact-name-validation").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("contact-email-validation").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("contact-tel-validation").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("contact-name-textbox").type("Mohona");
    cy.getByTestId("contact-email-textbox").type("mohona@chef.com");
    cy.getByTestId("contact-tel-textbox").type("123");
    cy.getByTestId("send-form-button").click();
    //  cy.getByTestId("klart-text").contains('KLART');
  });

  // testfall 5
  it("should show specialområde val", () => {
    cy.getByTestId("yrke-annat").click();
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("yrke-fritext").type("JS developer");
    cy.getByTestId("expertise-next-button").click();
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("place-textbox-textbox").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("place-textbox-textbox").type("Stockholm");
    cy.getByTestId("location-step-next-button").click();
    cy.getByTestId("send-form-button").click();
    cy.getByTestId("contact-name-validation").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("contact-email-validation").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("contact-tel-validation").contains(
      "Du måste fylla i detta fält."
    );
    cy.getByTestId("contact-name-textbox").type("Mohona");
    cy.getByTestId("contact-email-textbox").type("mohona@chef.com");
    cy.getByTestId("contact-tel-textbox").type("123");
    cy.getByTestId("send-form-button").click();
    //   cy.getByTestId("klart-text").contains('KLART');
  });
});
