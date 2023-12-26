import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse"

describe('API: getCityByNameService', () => {
  it('should return city datails', async () => {
    const data = mockCityAPIResponse

    jest.spyOn(api, 'get').mockResolvedValue({ data })
    const response = await getCityByNameService("São Paulo")
    
    expect(response.length).toBeGreaterThan(0)
  })
})