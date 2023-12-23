import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from '@components/SelectList'

describe('Component: SelectList', () => {
  it('should be return city details selected', () => {
    const data = [
      {id: '1', name: 'Salvador', latitude: 153, longitude: 532},
      {id: '2', name: 'Campo Grande', latitude: 477, longitude: 977},
    ]

    const onPress = jest.fn();

    render(
      <SelectList
      data={data}
      onChange={() => {}}
      onPress={onPress}
    />)
    
    const selectedCity = screen.getByText(/Grande/i)
    
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[1])
  })

  it('not should be show options when data props is empty.', () => {
    render(
      <SelectList 
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    )

    const options = screen.getByTestId('options')
    expect(options.children).toHaveLength(0)
  })
})