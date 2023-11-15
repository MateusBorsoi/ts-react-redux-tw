"use client";

import { Timer, TimerState } from "@/types/TimerTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TimerState = {
  timer: {
    tempoInicial: 0,
    timeStamp: 0,
    tempoAtual: 0,
  },
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<Timer>) => {
      const { tempoInicial, timeStamp }: Timer = action.payload;
      state.timer.tempoInicial = tempoInicial;
      state.timer.timeStamp = timeStamp;
      state.timer.tempoAtual = Date.now() - timeStamp;
    },
  },
});

export const { setTimer } = timerSlice.actions;
export default timerSlice.reducer;
