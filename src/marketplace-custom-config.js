/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */
export const VenueType =[
  {key:'food_and_drinks',label:'Food & Drink'},
  {key:'kids_party',label:'Kids Party & Social Events'},
  {key:'food',label:'Lunch Dinner Party'},
  {key:'meetings',label:'Meeting & Conference'},
  {key:'storage',label:'Storage Unit Fot Rental'},
  {key:'wedding',label:'Wedding'},
  {key:'cinema',label:'Cinema'},
];
export const minimumBooking =[
  {key:'',label:'-'},
  {key:'1',label:'1 hours'},
  {key:'2',label:'2 hours'},
  {key:'3',label:'3 hours'},
  {key:'4',label:'4 hours'},
  {key:'5',label:'5 hours'},
  {key:'6',label:'6 hours'},
  {key:'7',label:'7 hours'},
  {key:'8',label:'8 hours'},
  {key:'9',label:'9 hours'},
  {key:'10',label:'10 hours'},
  {key:'11',label:'11 hours'},
  {key:'12',label:'12 hours'}
];
export const maximumOccupancyNumber = [
  {key:'',label:'-'},
  {key:'0-10',label:'0-10 people'},
  {key:'11-20',label:'11-20 people'},
  {key:'21-50',label:'21-50 people'},
  {key:'51-100',label:'51-100 people'},
  {key:'101-200',label:'101-200 people'},
  {key:'201-300',label:'201-300 people'},
  {key:'301-400',label:'301-400 people'},
  {key:'401-500',label:'401-500 people'},
  {key:'500',label:'500+ people'},
  
];
export const minimumNoticeToBook =[
  {key:'',label:'-'},
  {key:'At least one week out',label:'At least one week out'},
  {key:'5 days out',label:'5 days out'},
  {key:'Same day accepted',label:'Same day accepted'},
  {key:'Within hours accepted',label:'Within hours accepted'}
];
export const certificate = [
  { key: 'none', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
  { key: '200h', label: 'Registered yoga teacher 200h' },
  { key: '500h', label: 'Registered yoga teacher 500h' },
];

export const amenities=[
  {key:'food',label:'Food'},
  {key:'drinks',label:'Drinks'},
  {key:'finger_foods',label:'Finger Food'},
  {key:'swiming_pool',label:'Swimming Pool'}
];

export const hourStart =[
  {kye:'00.00',label:'12.00 am'},
  {kye:'00.30',label:'12.30 am'},
  {kye:'01.00',label:'01.00 am'},
  {kye:'01.30',label:'01.30 am'},
  {kye:'02.00',label:'02.00 am'},
  {kye:'02.30',label:'02.30 am'},
  {kye:'03.00',label:'03.00 am'},
  {kye:'03.30',label:'03.30 am'},
  {kye:'04.00',label:'04.00 am'},
  {kye:'04.30',label:'04.30 am'},
  {kye:'05.00',label:'05.00 am'},
  {kye:'05.30',label:'05.30 am'},
  {kye:'06.00',label:'06.00 am'},
  {kye:'06.30',label:'06.30 am'},
  {kye:'07.00',label:'07.00 am'},
  {kye:'07.30',label:'07.30 am'},
  {kye:'08.00',label:'08.00 am'},
  {kye:'08.30',label:'08.30 am'},
  {kye:'09.00',label:'09.00 am'},
  {kye:'09.30',label:'09.30 am'},
  {kye:'10.00',label:'10.00 am'},
  {kye:'10.30',label:'10.30 am'},
  {kye:'11.00',label:'11.00 am'},
  {kye:'11.30',label:'11.30 am'},
  {kye:'12.00',label:'12.00 pm'},
  {kye:'12.30',label:'12.30 pm'},
  {kye:'13.00',label:'01.00 pm'},
  {kye:'13.30',label:'01.30 pm'},
  {kye:'14.00',label:'02.00 pm'},
  {kye:'14.30',label:'02.30 pm'},
  {kye:'15.00',label:'03.00 pm'},
  {kye:'15.30',label:'03.30 pm'},
  {kye:'16.00',label:'04.00 pm'},
  {kye:'16.30',label:'04.30 pm'},
  {kye:'17.00',label:'05.00 pm'},
  {kye:'17.30',label:'05.30 pm'},
  {kye:'18.00',label:'06.00 pm'},
  {kye:'18.30',label:'06.30 pm'},
  {kye:'19.00',label:'07.00 pm'},
  {kye:'19.30',label:'07.30 pm'},
  {kye:'20.00',label:'08.00 pm'},
  {kye:'20.30',label:'08.30 pm'},
  {kye:'21.00',label:'09.00 pm'},
  {kye:'21.30',label:'09.30 pm'},
  {kye:'22.00',label:'10.00 pm'},
  {kye:'22.30',label:'10.30 pm'},
  {kye:'23.00',label:'11.00 pm'},
  {kye:'23.30',label:'11.30 pm'},
];
export const hourEnd =[
  {kye:'00.00',label:'12.00 am'},
  {kye:'00.30',label:'12.30 am'},
  {kye:'01.00',label:'01.00 am'},
  {kye:'01.30',label:'01.30 am'},
  {kye:'02.00',label:'02.00 am'},
  {kye:'02.30',label:'02.30 am'},
  {kye:'03.00',label:'03.00 am'},
  {kye:'03.30',label:'03.30 am'},
  {kye:'04.00',label:'04.00 am'},
  {kye:'04.30',label:'04.30 am'},
  {kye:'05.00',label:'05.00 am'},
  {kye:'05.30',label:'05.30 am'},
  {kye:'06.00',label:'06.00 am'},
  {kye:'06.30',label:'06.30 am'},
  {kye:'07.00',label:'07.00 am'},
  {kye:'07.30',label:'07.30 am'},
  {kye:'08.00',label:'08.00 am'},
  {kye:'08.30',label:'08.30 am'},
  {kye:'09.00',label:'09.00 am'},
  {kye:'09.30',label:'09.30 am'},
  {kye:'10.00',label:'10.00 am'},
  {kye:'10.30',label:'10.30 am'},
  {kye:'11.00',label:'11.00 am'},
  {kye:'11.30',label:'11.30 am'},
  {kye:'12.00',label:'12.00 pm'},
  {kye:'12.30',label:'12.30 pm'},
  {kye:'13.00',label:'01.00 pm'},
  {kye:'13.30',label:'01.30 pm'},
  {kye:'14.00',label:'02.00 pm'},
  {kye:'14.30',label:'02.30 pm'},
  {kye:'15.00',label:'03.00 pm'},
  {kye:'15.30',label:'03.30 pm'},
  {kye:'16.00',label:'04.00 pm'},
  {kye:'16.30',label:'04.30 pm'},
  {kye:'17.00',label:'05.00 pm'},
  {kye:'17.30',label:'05.30 pm'},
  {kye:'18.00',label:'06.00 pm'},
  {kye:'18.30',label:'06.30 pm'},
  {kye:'19.00',label:'07.00 pm'},
  {kye:'19.30',label:'07.30 pm'},
  {kye:'20.00',label:'08.00 pm'},
  {kye:'20.30',label:'08.30 pm'},
  {kye:'21.00',label:'09.00 pm'},
  {kye:'21.30',label:'09.30 pm'},
  {kye:'22.00',label:'10.00 pm'},
  {kye:'22.30',label:'10.30 pm'},
  {kye:'23.00',label:'11.00 pm'},
  {kye:'23.30',label:'11.30 pm'},
];
export const filters = [
  {
    id: 'dates-length',
    label: 'Dates',
    type: 'BookingDateRangeLengthFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates', 'minDuration'],
    config: {
      // A global time zone to use in availability searches. As listings
      // can be in various time zones, we must decide what time zone we
      // use in search when looking for available listings within a
      // certain time interval.
      //
      // If you have all/most listings in a certain time zone, change this
      // config value to that.
      //
      // See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      searchTimeZone: 'Etc/UTC',

      // Options for the minimum duration of the booking
      options: [
        { key: '0', label: 'Any length' },
        { key: '60', label: '1 hour', shortLabel: '1h' },
        { key: '120', label: '2 hours', shortLabel: '2h' },
      ],
    },
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  // {
  //   id: 'yogaStyles',
  //   label: 'Yoga styles',
  //   type: 'SelectMultipleFilter',
  //   group: 'secondary',
  //   queryParamNames: ['pub_yogaStyles'],
  //   config: {
  //     // Optional modes: 'has_all', 'has_any'
  //     // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
  //     searchMode: 'has_all',

  //     // "key" is the option you see in Flex Console.
  //     // "label" is set here for this web app's UI only.
  //     // Note: label is not added through the translation files
  //     // to make filter customizations a bit easier.
  //     options: [
  //       { key: 'ashtanga', label: 'Ashtanga' },
  //       { key: 'hatha', label: 'Hatha' },
  //       { key: 'kundalini', label: 'Kundalini' },
  //       { key: 'restorative', label: 'Restorative' },
  //       { key: 'vinyasa', label: 'Vinyasa' },
  //       { key: 'yin', label: 'Yin' },
  //     ],
  //   },
  // },
  {
    id: 'aminites',
    label: 'Aminites',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_aminites'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {key:'food',label:'Food'},
        {key:'drinks',label:'Drinks'},
        {key:'finger_foods',label:'Finger Food'},
        {key:'swiming_pool',label:'Swimming Pool'}
      ],
    },
  },
  {
    id: 'venueType',
    label: 'Venue Types',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_venueType'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {key:'food_and_drinks',label:'Food & Drink'},
        {key:'kids_party',label:'Kids Party & Social Events'},
        {key:'food',label:'Lunch Dinner Party'},
        {key:'meetings',label:'Meeting & Conference'},
        {key:'storage',label:'Storage Unit Fot Rental'},
        {key:'wedding',label:'Wedding'},
        {key:'cinema',label:'Cinema'},
      ],
    },
  },
  // {
  //   id: 'certificate',
  //   label: 'Certificate',
  //   type: 'SelectSingleFilter',
  //   group: 'secondary',
  //   queryParamNames: ['pub_certificate'],
  //   config: {
  //     // "key" is the option you see in Flex Console.
  //     // "label" is set here for the UI only.
  //     // Note: label is not added through the translation files
  //     // to make filter customizations a bit easier.
  //     options: [
  //       { key: 'none', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
  //       { key: '200h', label: 'Registered yoga teacher 200h' },
  //       { key: '500h', label: 'Registered yoga teacher 500h' },
  //     ],
  //   },
  // },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
