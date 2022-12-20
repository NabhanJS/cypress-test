describe("testing the dev.reky.se hemsida", () => {
  beforeEach(() => {
    cy.visit("https://dev.reky.se/");
  });

  it("should show specialområde val", () => {
    cy.getByTestId("yrke-systemutvecklare").click();
    cy.getByTestId("java").click();
    // cy.get("[data-test-id='yrke-systemutvecklare']").click();
    // cy.get("[data-test-id='expertise-next-button']").click();
  });
});
