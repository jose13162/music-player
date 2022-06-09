import { Dispatch, SetStateAction } from "react";

export type StateTypings<Type> = [Type, Dispatch<SetStateAction<Type>>];
