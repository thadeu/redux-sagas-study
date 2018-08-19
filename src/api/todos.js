class TodoService {

  async fetchAll(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {id: Math.random(), text: 'TODO#5', created_at: new Date(), concluded: false},
          {id: Math.random(), text: 'TODO#4', created_at: new Date(), concluded: false},
          {id: Math.random(), text: 'TODO#3', created_at: new Date(), concluded: true},
          {id: Math.random(), text: 'TODO#2', created_at: new Date(), concluded: true},
          {id: Math.random(), text: 'TODO#1', created_at: new Date(), concluded: false},
          {id: Math.random(), text: 'TODO#0', created_at: new Date(), concluded: true},
        ])
      }, 2000)
    })
  }

  async create(text, totalTodos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: Math.random(),
          text: `TODO#${totalTodos} ${text}`,
          created_at: new Date()
        })
      }, 2000)
    })
  }

}

export default new TodoService()