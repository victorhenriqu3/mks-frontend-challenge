import { store } from "@/store/store";

describe("Testing CartSliceReducer actions ", () => {
  it("Should initially check if the cart is an empty object", () => {
    const initialStore = store.getState().cart;
    expect(initialStore.cartItems).toEqual([]);
  });
});
