describe('App boot', () => {
  it('boots the app', () => {
    // This test is a placeholder to ensure the app can boot without errors.
    // The app have to be running in the background for this test to pass:
    // ```bash
    // NEXT_PUBLIC_PHASE=test pnpm dev
    // ```
    cy.visit('/');

    cy.get('img[alt="Aero Logic"]').should('be.visible');
  });
});