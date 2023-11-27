import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it('should be return the next five days', () => {
    const nextFiveDays = getNextDays()
  
    expect(nextFiveDays.length).toBe(5)
  })
})