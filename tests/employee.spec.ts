import { expect, test } from "@playwright/test";
import uuid from "uuid-int";
const generator = uuid(0);

const data = {
  id: generator.uuid(),
  name: "Hellen Moore",
  email: "hellen@mail.ru",
  age: 30,
  position: "Developer",
  department: "Development",
};

test.describe("API testing basics", () => {
  test("should create a new employee", async ({ request }) => {
    const newEmployee = await request.post("/employees", { data });
    expect(newEmployee.status()).toEqual(201);
    expect(newEmployee.statusText()).toEqual("Created");
    expect(await newEmployee.json()).toEqual(data);
  });
});
