import { expect, test } from "@playwright/test";

let id = 9999;

const data = {
  id,
  name: "Hellen Moore",
  email: "hellen@mail.ru",
  age: 30,
  position: "Developer",
  department: "Development",
};

test.describe("API testing basics", () => {
  test("should create a new employee", async ({ request }) => {
    const response = await request.post("/employees", { data });

    expect(response.status()).toEqual(201);
    expect(response.statusText()).toEqual("Created");

    const body = await response.json();
    expect(body).toEqual(data);
  });

  test("should get employees", async ({ request }) => {
    const response = await request.get("/employees/" + id);
    const body = await response.json();
    expect(body).toEqual(data);
  });

  test("should update a employee", async ({ request }) => {
    const response = await request.patch("/employees/" + id, {
      data: {
        name: "emilov",
      },
    });

    const body = await response.json();
    expect(body.name).toEqual("emilov");
  });

  test("should delete an existing employee", async ({ request }) => {
    const response = await request.delete("/employees/" + id);
    expect(response.status()).toEqual(200);
  });
});
