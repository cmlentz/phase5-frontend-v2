import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Support from "./pages/Support";
import Home from "./pages/Home";
import CustomerList from "./pages/CustomerList";
import Customer from "./pages/Customer";
import NewCustomer from "./pages/NewCustomer";
import Activities from "./pages/Activities";

function App() {
return (
	<Router>
		<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/customers" element={<CustomerList />} />
				<Route path="/newcustomer" element={<NewCustomer />} />
				<Route path="/activities" element={<Activities />} />
				<Route path="/support" element={<Support />} />
				<Route exact path="/customers/:id" element={<Customer />} />
			</Routes>
	</Router>
);
}

export default App;