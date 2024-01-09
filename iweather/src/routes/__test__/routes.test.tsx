import { Routes } from "../index"
import { render } from "@testing-library/react-native"

describe("Routes", () => {
  it("should be render Search screen when not city selected.", () => {
    const { debug } = render(<Routes />)

    debug()
  })
})