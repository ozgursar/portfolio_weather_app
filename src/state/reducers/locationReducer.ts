import { ActionType } from '../action-types'
import { Action, LocationData } from '../actions'

interface LocationState {
  loading: boolean
  error: string | null
  data: LocationData | Record<string, never>
}

const initialState = {
  loading: false,
  error: null,
  data: {}
}

const reducer = (state: LocationState = initialState, action: Action): LocationState => {
  switch (action.type) {
    case ActionType.FETCH_LOCATION:
      return { loading: true, error: null, data: {} }
    case ActionType.FETCH_LOCATION_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.FETCH_LOCATION_ERROR:
      return { loading: false, error: action.payload, data: {} }
    default:
      return state
  }
}

export default reducer
