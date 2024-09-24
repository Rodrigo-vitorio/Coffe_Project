import { Routes, Route } from "react-router-dom";

import { Details } from "../Pages/Details";
import { Carrinho } from "../Pages/Carrinho";
import { History } from "../Pages/History";
import { Profile } from "../Pages/Profile";
import { Security } from "../Pages/Security";
import { ShowProduct } from "../Pages/ShowProduct";
import { User } from "../Pages/User";
import { Register } from "../Pages/Register";
import { SignIn } from "../Pages/SignIn";
import { Privacy } from "../Pages/Privacy";
import { Search } from "../Pages/Search";
import { ShowMachine } from "../Pages/ShowMachine";
import { Vendas } from "../Pages/Dashboard/Vendas";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Details />} />
      <Route path="/Carrinho" element={<Carrinho />} />
      <Route path="/History" element={<History />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Security" element={<Security />} />
      <Route path="/ShowProduct" element={<ShowProduct />} />
      <Route path="/User" element={<User />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/ShowMachine" element={<ShowMachine />} />
      <Route path="/Vendas" element={<Vendas />} />

    </Routes>
  );
}
