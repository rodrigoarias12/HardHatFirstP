const {expect} = require("chai");
const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");

describe("Token", function () {   
async function deployTokenFixture() {
const [owner, otherAccount] = await ethers.getSigners();
const Token = await ethers.getContractFactory("Token");
const token = await Token.deploy(10);
return { token, owner, otherAccount };
}




it("Should set the right totalSupply", async function () {
const { token, owner } = await loadFixture(deployTokenFixture);

expect(await token.totalSupply()).to.equal(10);
});

it("Should set the right balance for the owner", async function () {
const { token, owner } = await loadFixture(deployTokenFixture);

expect(await token.balanceOf(owner.address)).to.equal(10);
} );    
it("Should set the right balance after transfer", async function () {
    const { token, owner, otherAccount } = await loadFixture(deployTokenFixture);
    token.transfer(otherAccount.address, 5);
    expect(await token.balanceOf(owner.address)).to.equal(5);
    expect(await token.balanceOf(otherAccount.address)).to.equal(5);
} );

});