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
          activePanel: null,
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

// TODO: стор не переиспользуемый. В перспективе, переделать, чтобы можно было использовать с разными названиями.
export const storage = createStore("activePanel");
