import { ICartItem } from "@/@types/Cart";
import { addToCart } from "@/store/CartSlice";
import { store } from "@/store/store";

describe("Testing CartSliceReducer actions ", () => {
  it("Should initially check if the cart is an empty object", () => {
    const initialStore = store.getState().cart;
    expect(initialStore.cartItems).toEqual([]);
  });

  describe("Testing addToCart feature", () => {
    it("Should add a item to the cart state an verifies if informations are right", () => {
      const MockItem = {
        id: 1,
        name: "Iphone 11 128 GB",
        brand: "Apple",
        description:
          "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: "5000.00",
      } as ICartItem;

      store.dispatch(addToCart(MockItem));
      const state = store.getState().cart;
      expect(state.cartItems[0].id).toEqual(1);
      expect(state.cartItems[0].name).toEqual("Iphone 11 128 GB");
      expect(state.cartItems[0].price).toEqual("5000.00");
    });
    it("Should increase a item to the cart state and verifies if the cartQuantity has increased", () => {
      const MockItem = {
        id: 1,
        name: "Iphone 11 128 GB",
        brand: "Apple",
        description:
          "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: "5000.00",
      } as ICartItem;

      store.dispatch(addToCart(MockItem));
      const state = store.getState().cart;
      expect(state.cartItems[0].cartQuantity).toEqual(2);
    });
  });
});
