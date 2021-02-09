import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  getAllTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      "http://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("addNewTodo", response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },

  async filterTodos({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", response.data);
  },

  async editTodo({ commit }, data) {
    const response = await axios.put(
      `http://jsonplaceholder.typicode.com/todos/${data.id}`, data
	);
    commit("updateTodo", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),

  addNewTodo: (state, todo) => state.todos.unshift(todo),

  removeTodo: (state, id) =>
	(state.todos = state.todos.filter((todo) => todo.id !== id)),
	
  updateTodo: (state, data) => {
    const index = state.todos.findIndex((todo) => todo.id === data.id);
    if (index !== -1) {
      state.todos.splice(index, 1, data);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
