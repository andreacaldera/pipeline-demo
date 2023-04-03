jest.setTimeout(10000);

describe("slow test", () => {
  it("runs slowly", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(true).toBeTruthy();
  });

  it("runs very slowly", async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    expect(true).toBeTruthy();
  });
});
