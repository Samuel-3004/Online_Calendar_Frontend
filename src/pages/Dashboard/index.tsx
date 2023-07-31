import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardsContactsDashboard from "../../components/CardsContactsDashboard";
import ModalEditcontacts from "../../components/ModalEditContact";
import ModalRegister from "../../components/ModalRegisterContact";


import { StyledDashboard } from "./dashboard";
import { UserListContext } from "../../providers/clients/userContext";

function DashboardPage() {
  const { user, userLogout } = useContext(UserListContext);

  return (
    <StyledDashboard>
      <header>
        <div className="container-header">
          <h1>
            <b>Agenda Virtual</b>
          </h1>
          <Link to="/">
            <p onClick={() => userLogout()}>Sair</p>
          </Link>
        </div>
      </header>
      <main>
        <section className="information-dashboard">
          <div className="container-main">
            <h2>Olá, {user?.name}</h2>
            <p>Cadastrado em {user?.createdAt}</p>
          </div>
        </section>

        <CardsContactsDashboard />
      </main>
      <ModalRegister />
      <ModalEditcontacts />
    </StyledDashboard>
  );
}

export default DashboardPage;
