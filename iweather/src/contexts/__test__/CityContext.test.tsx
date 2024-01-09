import { useCity } from "@hooks/useCity"
import { CityProvider } from "@contexts/CityContext"
import { CityProps } from "@services/getCityByNameService"
import { renderHook, waitFor, act } from "@testing-library/react-native"

const newCity: CityProps = {
  id: '1',
  name: 'Salvador',
  latitude: 123,
  longitude: 456
}

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    const {result} = renderHook(() => useCity(), { wrapper: CityProvider })

    await waitFor(() => act(() => result.current.handleChanceCity(newCity)))

    expect(result.current.city?.name).toBe(newCity.name)
  })
})