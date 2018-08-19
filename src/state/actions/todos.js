import { TODOS_FETCH_ALL, TODOS_NEW } from '@actions/actionTypes'

export function fetchAll() {
  return { type: TODOS_FETCH_ALL.REQUESTED }
}

export function addTodo(text) {
  return {
    type: TODOS_NEW.REQUESTED,
    payload: { id: Math.random(), text, created_at: new Date() }
  }
}