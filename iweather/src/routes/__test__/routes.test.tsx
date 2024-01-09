import { Routes } from "../index"
import { api } from "@services/api"
import { CityProps } from "@services/getCityByNameService"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { render, screen, waitFor } from "@__tests__/utils/customRender"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"

const newCity: CityProps = {
  id: '1',
  name: 'Salvador',
  latitude: 123,
  longitude: 456
}

describe("Routes", () => {
  it("should be render Search screen when not city selected.", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.findByText(/^escolha um local/i))
    expect(title).toBeTruthy()
  })

  it("should be render Dashboard screen when has city selected.", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    await saveStorageCity(newCity)
    render(<Routes />)
   
    const title = await waitFor(() => screen.getByText(newCity.name))
    expect(title).toBeTruthy()
  })
})