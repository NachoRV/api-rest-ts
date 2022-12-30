import request from "supertest";
import app from "../../src/app";
import db, { dbDisconnect } from "../../src/config/mongo";

beforeAll(async ()=> {
  
})

afterAll( async () => {
  await dbDisconnect()
}) 

describe("Test items.routes.ts", () => {
  test("Catch get(/)", async () => {
    const res = await request(app).get("/items");
    expect(res.body).toEqual([]);
  });
});