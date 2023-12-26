import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe('Service: getWeatherByCityService', () => {
  it('should be return weather api data formatted', async () => {
    const data = mockWeatherAPIResponse

    jest.spyOn(api, 'get').mockResolvedValue({ data })
    const response = await getWeatherByCityService({ latitude: 123, longitude:456})
    expect(response).toHaveProperty('today')
  })
})