import { createStore } from "../../store";
import { storage } from "../../store";

export class StoreService {
  constructor() {
    this.store = storage;

    this.actionMap = {
      setActivePanel: (payload) => this.store.getState().setActivePanel(payload),
    }
  }

  getActivePanel() {
    return this.store.getState().activePanel;
  }

  subscribeToActivePanel(callback) {
    return this.store.subscribe((state) => state.activePanel, callback);
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