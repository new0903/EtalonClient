import { createStore as create } from "zustand"
import { persist, subscribeWithSelector } from "zustand/middleware"

/* Функция для создания стора с уникальным именем
  @params {string} storageName
*/
export const createStore = (storageName) => {
  return create(
    subscribeWithSelector(
      persist(
        (set) => ({
          activePanel: "",
          setActivePanel: (panelName) => set({ activePanel: panelName }),
        })
      ),
      {
        name: storageName,
        getStorage: () => localStorage,
      }
    )
  )
}
