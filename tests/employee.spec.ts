import { APIRequestContext, expect, test } from "@playwright/test";

let apiContext: APIRequestContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: "http://localhost:9000",
  });
});

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
  test("should create a new employee", async () => {
    const response = await apiContext.post("/employees", { data });

    expect(response.status()).toEqual(201);
    expect(response.statusText()).toEqual("Created");

    const body = await response.json();
    expect(body).toEqual(data);
  });

  test("should get employees", async () => {
    const response = await apiContext.get("/employees/" + id);
    const body = await response.json();
    expect(body).toEqual(data);
  });

  test("should update a employee", async () => {
    const response = await apiContext.patch("/employees/" + id, {
      data: {
        name: "emilov",
      },
    });

    const body = await response.json();
    expect(body.name).toEqual("emilov");
  });

  test("should delete an existing employee", async ({ request }) => {
    const response = await apiContext.delete("/employees/" + id);
    expect(response.status()).toEqual(200);
  });
});

test.afterAll(async ({}) => {
  await apiContext.dispose();
});
