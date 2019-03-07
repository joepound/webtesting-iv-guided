const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should run tests", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => expect(res.status).toBe(200));
    });

    it("should return json", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return { api: up }", done => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
          done();
        });
    });
  });
});
