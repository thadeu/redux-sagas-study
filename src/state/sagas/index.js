import { takeLatest, takeEvery, put, call, select } from 'redux-saga/effects'
import * as types from '@actions/actionTypes'
import TodoService from '@api/todos'

function* watchFetchAll(){
  try {
    const response = yield call(TodoService.fetchAll)
    yield put({type: types.TODOS_FETCH_ALL.SUCCESS, payload: response })

  } catch (err) {
    yield put({type: types.TODOS_FETCH_ALL.ERROR })
    console.error({ error: err })
  }
}

function* asyncAddTodo(action){
  try {
    const totalTodos = yield select(state => state.todos.data.length)
    const response = yield call(TodoService.create, action.payload.text, totalTodos)
    yield put({type: types.TODOS_NEW.SUCCESS, payload: response})

  } catch (err) {
    yield put({type: types.TODOS_NEW.ERROR })
    console.error({ error: err })
  }
}

function* rootSaga() {
  yield [
    takeEvery(types.TODOS_FETCH_ALL.REQUESTED, watchFetchAll),
    takeLatest(types.TODOS_NEW.REQUESTED, asyncAddTodo)
  ]
}

export default rootSaga