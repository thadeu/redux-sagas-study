const createAsyngActionType = type => {
  return {
    REQUESTED: `${type}_REQUESTED`, 
    SUCCESS: `${type}_SUCCESS`, 
    ERROR: `${type}_ERROR`
  }
}

export const TODOS_FETCH_ALL = createAsyngActionType('TODOS_FETCH_ALL')
export const TODOS_NEW = createAsyngActionType('TODOS_NEW')