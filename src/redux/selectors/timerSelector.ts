'use client'

import { RootState } from "../store";

export const selectTimer = (state: RootState) => state.timer.timer
