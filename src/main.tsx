import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import "./index.css";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(<Home />);
