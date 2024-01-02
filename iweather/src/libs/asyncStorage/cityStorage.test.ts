import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

const newCity: CityProps = {
  id: '1',
  name: 'Salvador',
  latitude: 123,
  longitude: 456
}

describe('Storage: cityStorage', () => {
  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it("should return city storage", async () => {
    await saveStorageCity(newCity)
    const city = await getStorageCity()

    expect(city).toEqual(newCity)
  })

  it("should remove city from storage", async () => {
    await saveStorageCity(newCity)
    await removeStorageCity()
 
    const city = await getStorageCity()
    expect(city).toBeNull()
  })
})