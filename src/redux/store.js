import { createStore } from "redux";
import { data } from "./reducer1";
import { Provider ,connect} from "react-redux";

export var store = createStore(data);
