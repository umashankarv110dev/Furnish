import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderItem {
  id: string;
  totalAmount: number;
  totalItems: number;
  status: string;
  orderDate: string;
}

interface OrderState {
  orders: OrderItem[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    addOrder: (
      state,
      action: PayloadAction<OrderItem>
    ) => {
      state.orders.unshift(
        action.payload
      );
    },

    updateOrderStatus: (
      state,
      action
    ) => {
      const order =
        state.orders.find(
          item =>
            item.id ===
            action.payload.id
        );

      if (order) {
        order.status =
          action.payload.status;
      }
    },
  },
});

export const {
  addOrder,
  updateOrderStatus,
} = orderSlice.actions;

export default orderSlice.reducer;