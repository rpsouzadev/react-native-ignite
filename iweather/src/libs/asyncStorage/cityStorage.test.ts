import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

describe('Storage: cityStorage', () => {
  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it("should return city storage", async () => {
    const newCity: CityProps = {
      id: '1',
      name: 'Salvador',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(newCity)
    const city = await getStorageCity()

    expect(city).toEqual(newCity)
  })
})