import { useCity } from "@hooks/useCity"
import { CityProvider } from "@contexts/CityContext"
import { renderHook, waitFor, act } from "@testing-library/react-native"

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    const {result} = renderHook(() => useCity(), { wrapper: CityProvider })

    await waitFor(() => act(() => console.log('result => ', result.current)))
  })
})