import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"

describe('Service: getCityByNameService', () => {
  it('should return city details', async () => {
    const data = mockCityAPIResponse

    jest.spyOn(api, 'get').mockResolvedValue({ data })
    const response = await getCityByNameService("São Paulo")
    
    expect(response.length).toBeGreaterThan(0)
  })
})