const functions = require("./functions");

test("2+2 to be equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(6)).not.toBeFalsy();
});

test("User name is Dileep Madiri", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Dileep",
    lastName: "Madiri",
  });
});

test("is Dileep in the list", () => {
  const usernames = ["Dileep", "vaishnavi", "Janardhan"];
  expect(usernames).toContain("Dileep");
});


