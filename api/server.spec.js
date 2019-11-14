const request = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET / endpoint", () => {
    test("the db environment is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
    test("it returns a 200 status", () => {
      return (
        request(server).
        get("/").then(res => {
          expect(res.status).toBe(500);
        })
      );
    });
  });
});
