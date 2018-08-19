import { TODOS_FETCH_ALL, TODOS_NEW } from '@actions/actionTypes'

const INITIAL_STATE = {
  isFetching: false,
  loading: false,
  error: false,
  data: [] //[{id, text, created_at}, {}, {}]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {    
    case TODOS_FETCH_ALL.REQUESTED:
      return {
        ...state,
        loading: true
      }

    case TODOS_FETCH_ALL.SUCCESS:
      return {
        data: action.payload,
        loading: false
      }
    
    case TODOS_FETCH_ALL.ERROR:
      return {
        ...state.data,
        loading: false
      }
    
    case TODOS_NEW.REQUESTED:
      return {
        ...state,
        isFetching: true
      }
    
    case TODOS_NEW.SUCCESS:
      return {
        data: [{...action.payload} , ...state.data],
        isFetching: false
      }
    
    case TODOS_NEW.ERROR:
      return { ...state, isFetching: false, error: true }

    default:
      return state
  }
}