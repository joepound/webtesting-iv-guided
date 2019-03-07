const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");

describe("Hobbits model", () => {
  afterEach(async () => {
    await db("hobbits").truncate();
  });

  describe("insert()", () => {
    it("should insert the provided hobbits into the db", done => {
      Hobbits.insert({ name: "Gaffer" })
        .then(() => {
          Hobbits.insert({ name: "Sam" });
        })
        .then(() => {
          Hobbits.getAll().then(hobbits => {
            expect(hobbits.length).toBe(2);
            done();
          });
        });
    });

    it("should insert the provided hobbit into the db", done => {
      Hobbits.insert({ name: "Sam" }).then(hobbit => {
        expect(hobbit.name).toBe("Sam");
        done();
      });
    });
  });
});
