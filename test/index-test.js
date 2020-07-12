const chai = require("chai");

const getLocationReport = require("../src/getReport");
const locationReport = require("../utils/index");
const expect = chai.expect;

describe("getweatherReport", () => {
  it("Given an array of inputs,it should give weather report for the locations", async () => {
    const res = await getLocationReport(["10005", "london", "lagos"]);
    expect(res).to.be.a("array");
    expect(res.length).to.be.equals(4);
  });
});

describe("getweatherReport", () => {
  it("it should give weather report for the locations", async () => {
    const res = await getLocationReport(["xs"]);
    expect(res).to.be.a("array");
    expect(res.length).to.be.equals(2);
    expect(res[1][1]).to.be.equals("location not found");
  });
});

describe("getweatherReport", () => {
  let response;
  it("it should get weather report", async () => {
    await locationReport("lagos")
      .then((res) => res.json())
      .then((data) => {
        response = data;
      });
    expect(response).to.be.a("object");
    expect(response).to.haveOwnProperty("current");
  });
});
