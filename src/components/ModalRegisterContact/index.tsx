import { useContext } from "react";
import { StyledModalRegister } from "./modalRegisterStyled";
import { useForm } from "react-hook-form";
import { UserListContext } from "../../providers/clients/userContext";
import { userContext } from "../../providers/contacts/contactContext";

function ModalRegister() {
  const { open, setOpen } = useContext(UserListContext);

  const { registerContact } = useContext(userContext);

  const handleToClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data: any) => {
    registerContact(data);

    reset();
    handleToClose();
  };

  return (
    <StyledModalRegister open={open} onClose={handleToClose}>
      <div className="header-register">
        <h3>Cadastrar Contato</h3>
        <p onClick={handleToClose}>X</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <section className="name-contact">
          <label htmlFor="name">Nome</label>
          <input {...register("name")} type="name" id="name" />
        </section>
        <section className="name-contact">
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </section>
        <section className="name-contact">
          <label htmlFor="telefone">Telefone</label>
          <input {...register("telefone")} type="telefone" id="telefone" />
        </section>

        <button type="submit" className="btn-register" onClick={handleToClose}>
          Criar contato
        </button>
      </form>
    </StyledModalRegister>
  );
}

export default ModalRegister;
