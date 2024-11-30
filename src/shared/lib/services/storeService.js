import { createStore } from "../../store";
import { storage } from "../../store";

export class StoreService {
  constructor() {
    this.store = storage;

    this.actionMap = {
      // setActivePanel: (payload) => this.store.getState().setActivePanel(payload),
      setProducts: (payload) => this.store.getState().setProducts(payload),
      addProduct: (payload) => this.store.getState().addProduct(payload),
      removeProduct: (payload) => this.store.getState().removeProduct(payload),
      setCategories: (payload) => this.store.getState().setCategories(payload),
      addCategory: (payload) => this.store.getState().addCategory(payload),
      removeCategory: (payload) => this.store.getState().removeCategory(payload),
      setUsers: (payload) => this.store.getState().setUsers(payload),
      addUser: (payload) => this.store.getState().addUser(payload),
      removeUser: (payload) => this.store.getState().removeUser(payload),
    }
  }

  getActivePanel() {
    return this.store.getState().activePanel;
  }

  getProducts() {
    return this.store.getState().productsList;
  }

  getCategories() {
    return this.store.getState().categoriesList;
  }

  getUsers() {
    return this.store.getState().usersList;
  }

  subscribeToActivePanel(callback) {
    return this.store.subscribe((state) => state.activePanel, callback);
  }

  subscribeToProducts(callback) {
    return this.store.subscribe((state) => state.productsList, callback);
  }

  subscribeToCategories(callback) {
    return this.store.subscribe((state) => state.categoriesList, callback);
  }

  subscribeToUsers(callback) {
    return this.store.subscribe((state) => state.usersList, callback);
  }

  updateStore(action, payload) {
    const actionFunction = this.actionMap[action];

    if (actionFunction) {
      actionFunction(payload);
    } else {
      console.warn(`Action ${action} is not defined`)
    }
  }
}