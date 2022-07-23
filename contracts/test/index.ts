import { expect } from "chai";
import { ethers, deployments } from "hardhat";
import { Treasury, VotesTokenWithSupply } from "../typechain";

describe("Treasury", function () {
  let treasury: Treasury;
  let token: VotesTokenWithSupply;

  beforeEach(async function () {
    deployments.fixture();
    treasury = await ethers.getContract("Treasury");
    token = await ethers.getContract("VotesTokenWithSupply");
  });

  it("Should deploy Treasury", async function () {
    expect(treasury.address).to.be.properAddress;
    expect(token.address).to.be.properAddress;
  });
});
