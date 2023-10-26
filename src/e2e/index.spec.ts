import { createClient } from '../config'

describe("client initialization", () => {
  test("should generate a valid client instance when config is executed as singleton", () => {
    const client = createClient()
    expect(client).not.toBeNull()
  });
});