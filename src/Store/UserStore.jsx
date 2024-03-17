import { create } from "zustand";

export const store = create((set)=> ({
    count : 0,
    items : {},
    quantity : 1,
    increaseQuantity : (id) => set((state) => ({
      items: {
        ...state.items,
        [id]: {
          ...state.items[id],
          quantity: (state.items[id]?.quantity || 0) + 1,
        },
      },
    })),
    decreaseQuantity : (id) => set((state) => ({
        quantity : state.quantity - 1
    })),

    remove : () => set((state) => ({
        quantity : 0
    }))
})) 
// import { create } from "zustand";

// export const store = create((set) => ({
//   count: 0,
//   items: {}, // Initialize items as an empty object

//   increaseQuantity: (id) =>
//     set((state) => ({
//       count: state.count + 1,
//       items: {
//         ...state.items,
//         [id]: {
//           ...state.items[id],
//           quantity: (state.items[id]?.quantity || 0) + 1,
//         },
//       },
//     })),

//   decreaseQuantity: (id) =>
//     set((state) => ({
//       count: Math.max(state.count - 1, 0),
//       items: {
//         ...state.items,
//         [id]: {
//           ...state.items[id],
//           quantity: Math.max((state.items[id]?.quantity || 0) - 1, 0),
//         },
//       },
//     })),

//   remove: (id) =>
//     set((state) => ({
//       count: Math.max(state.count - (state.items[id]?.quantity || 0), 0),
//       items: {
//         ...state.items,
//         [id]: {
//           ...state.items[id],
//           quantity: 0,
//         },
//       },
//     })),
// }))

