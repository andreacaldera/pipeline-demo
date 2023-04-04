describe("flaky test", () => {
  it("fails about 30% of the time", async () => {
    const random = Math.floor(Math.random() * 10);

    expect(random).toBeGreaterThan(3);
  });
  it("fails about 50% of the time", async () => {
    const random = Math.floor(Math.random() * 10);

    expect(random).toBeGreaterThan(6);
  });
});
