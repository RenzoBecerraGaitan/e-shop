import { Routes, Route } from "react-router-dom";
import Navigator from "./routes/navigation/navigation.component";
import Singin from "./routes/sing-in/sing-in.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="sing-in" element={<Singin />} />
      </Route>
    </Routes>
  );
};

export default App;
