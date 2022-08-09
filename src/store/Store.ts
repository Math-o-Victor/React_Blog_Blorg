import { createStore } from "redux";
import { tokenReducer } from "./Tokens/tokensReducer";

const Store = createStore(tokenReducer)

export default Store;