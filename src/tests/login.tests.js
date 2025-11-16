import { faker } from "@faker-js/faker";
import { LoginPage } from "./../po/pages/login.page";
import { InventoryPage } from "./../po/pages/inventory.page";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Login tests", () => {
  let username, password;
  beforeEach(async () => {
    await loginPage.open();
    username = faker.internet.username({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    });
    password = faker.internet.password();
  });

  it("UC-1: Login form with empty credentials", async () => {
    await loginPage.usernameInput().setValue(username);
    await loginPage.passwordInput().setValue(password);

    await loginPage.usernameInput().click();
    await loginPage.selectInput();
    await loginPage.clearInput();
    await loginPage.passwordInput().click();
    await loginPage.selectInput();
    await loginPage.clearInput();

    await loginPage.loginBtn().click();

    await expect(await loginPage.errorMsgText()).toContain(
      "Username is required"
    );
  });

  it("UC-2: Test Login form with credentials by passing Username", async () => {
    await loginPage.usernameInput().setValue(username);
    await loginPage.passwordInput().setValue(password);

    await loginPage.passwordInput().click();
    await loginPage.selectInput();
    await loginPage.clearInput();

    await loginPage.loginBtn().click();

    await expect(await loginPage.errorMsgText()).toContain(
      "Password is required"
    );
  });

  it("UC-3:  Test Login form with credentials by passing Username & Password", async () => {
    const acceptedUsernames = [
      "standard_user",
      // "locked_out_user", potential mistake in the Test case (User has been locked out)
      "problem_user",
      "performance_glitch_user",
      "error_user",
      "visual_user",
    ];
    username =
      acceptedUsernames[Math.floor(Math.random() * acceptedUsernames.length)];
    password = "secret_sauce";
    await loginPage.usernameInput().setValue(username);
    await loginPage.passwordInput().setValue(password);

    await loginPage.loginBtn().click();
    await expect(inventoryPage.headerTitle()).toHaveText("Swag Labs");
  });
});
