import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-addis-ababa',
    predictionPlace: {
      address: 'Addis Ababa, Ethiopia',
      bounds: new LatLngBounds(
        new LatLng(9.15688978,38.87226187),
        new LatLng(8.86191616,38.62863248)
      ),
    },
  },
  {
    id: 'default-adama',
    predictionPlace: {
      address: 'Adama, Ethiopia',
      bounds: new LatLngBounds(
        new LatLng(8.57098744,39.30133859),
        new LatLng(8.50153858,39.24405138)
      ),
    },
  },
  {
    id: 'default-bahir-dhar',
    predictionPlace: {
      address: 'Bahir Dhar, Ethiopia',
      bounds: new LatLngBounds(
        new LatLng(11.62130469,37.4180528),
        new LatLng(11.54850682,37.35743334)
      ),
    },
  },
  {
    id: 'default-harar',
    predictionPlace: {
      address: 'Harar, Ethiopia',
      bounds: new LatLngBounds(
        new LatLng(9.33170695, 42.14196836),
        new LatLng(9.29504052, 42.11165834)
      ),
    },
  },
  {
    id: 'default-gondar',
    predictionPlace: {
      address: 'Gondar, Ethiopia',
      bounds: new LatLngBounds(
        new LatLng(12.62825053, 37.48203309),
        new LatLng(12.59199092, 37.45172336)
      ),
    },
  },
  {
    id: 'default-jimma',
    predictionPlace: {
      address: 'Jimma, Ethiopia',
      bounds: new LatLngBounds(
        new LatLng(7.69517884, 36.85916678),
        new LatLng(7.649444, 36.82166678)
      ),
    },
  },
];
