import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector