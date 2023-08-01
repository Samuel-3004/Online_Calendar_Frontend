import React, { useContext } from "react";
import { StyledModalEdit } from "./modalEditarStyled";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserListContext } from "../../providers/clients/userContext";
import { TClientRequest } from "../../providers/clients/types.clients";

function CardEditProfile() {
  const {
    user,
    userEdit,
    openEditeUser,
    userDelete,
    handleToCloseEditUser,
    setOpenEditeUser,
  } = useContext(UserListContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TClientRequest>();

  const submit: SubmitHandler<TClientRequest> = (formData) => {
    userEdit(formData);
    reset();
  };

  const btnDelete = () => {
    userDelete();
    handleToCloseEditUser();
  };

  return (
    <StyledModalEdit open={openEditeUser}>
      <div className="container-modal">
        <div className="header-register">
          <h3>Contato Detalhes</h3>
          <p onClick={handleToCloseEditUser}>X</p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <section className="name-contact">
            <label htmlFor="name">Nome</label>
            <input
              {...register("name")}
              type="text"
              id="name"
              defaultValue={user?.name}
              className="contact-title"
            />
          </section>
          <section className="name-contact">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              defaultValue={user?.email}
              className="contact-title"
            />
          </section>
          
          <section className="name-contact">
            <label htmlFor="telefone">Telefone</label>
            <input
              {...register("telefone")}
              type="text"
              id="telefone"
              defaultValue={user?.telefone}
              className="contact-title"
            />
          </section>

          <div className="btns">
            <button type="submit" className="btn-salve">
              Salvar Alterações
            </button>

            <button type="button" onClick={btnDelete} className="btn-excluir">
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledModalEdit>
  );
}

export default CardEditProfile;
