import MapView, {
  LatLng,
  MapViewProps,
  PROVIDER_GOOGLE,
} from 'react-native-maps'

type MapProps = MapViewProps & {
  coordinates: LatLng[]
}

export function Map({ coordinates, ...rest }: MapProps) {
  const lastCoordinate = coordinates[coordinates.length - 1]

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ width: '100%', height: 200 }}
      region={{
        latitude: lastCoordinate.latitude,
        longitude: lastCoordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      {...rest}
    />
  )
}
