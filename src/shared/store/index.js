import { createStore as create } from "zustand"
import { persist, subscribeWithSelector } from "zustand/middleware"
import { categories, products } from "../config/data";

/* Функция для создания стора с уникальным именем
  @params {string} storageName
*/
export const createStore = (storageName) => {
  return create(
    subscribeWithSelector(
      persist(
        (set) => ({
          productsList: [],
          categoriesList: [],
          usersList: [],

          setProducts: (products) => set({ products }),
          addProduct: (product) => {
            set((state) => {
              const updatedProducts = state.products.map((p) => 
                p.id === product.id ? { ...p, product } : p
              );

              if (updatedProducts.every((p) => p.id !== product.id)) {
                updatedProducts.push(product);
              }

              return { productsList: updatedProducts }
            })
          },
          removeProduct: (productId) => {
            set((state) => ({
              productsList: state.productsList.filter((product) => product?.id !== productId)
            }))
          },
          setCategories: (categories) => set({ categories }),
          addCategory: (category) => {
            set((state) => {
              const updatedCategories = state.products.map((p) => 
                p.id === category.id ? { ...p, category } : p
              );

              if (updatedCategories.every((p) => p.id !== category.id)) {
                updatedCategories.push(category);
              }

              return { productsList: updatedCategories }
            })
          },
          removeCategory: (categoryId) => {
            set((state) => ({
              categoriesList: state.categoriesList.filter((category) => category?.id !== categoryId),
            }))
          },
          setUsers: (users) => set({ users }),
          addUser: (user) => {
            set((state) => {
              const updatedUsers = state.products.map((p) => 
                p.id === user.id ? { ...p, user } : p
              );

              if (updatedUsers.every((p) => p.id !== user.id)) {
                updatedUsers.push(user);
              }

              return { productsList: updatedUsers }
            })
          },
          removeUser: (userId) => {
            set((state) => ({
              usersList: state.usersList.filter((user) => user?.id !== userId),
            }))
          }
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
