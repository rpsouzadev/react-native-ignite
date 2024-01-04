import { useCity } from "@hooks/useCity"
import { renderHook } from "@testing-library/react-native"

describe("Context: CityContext", () => {
  it("should be change selected city", () => {
    const {result} = renderHook(() => useCity())
    console.log('result => ', result.current.city)
  })
})