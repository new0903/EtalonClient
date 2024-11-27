import { createStore } from "../../store";

export class StoreService {
  constructor(storageName) {
    this.store = createStore(storageName);

    this.actionMap = {
      setActivePanel: (payload) => this.store.getState().setActivePanel(payload),
    }
  }

  getActivePanel() {
    return this.store.getState().activePavel;
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