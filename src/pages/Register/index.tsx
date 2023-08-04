import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledRegister } from "./register";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserListContext } from "../../providers/clients/userContext";
import { TRegisterClient } from "../../interfaces/clients.interface";


const schema = yup
  .object({
    name: yup.string().required("O nome deve ser preenchido"),
    email: yup.string().required("O email deve ser preenchido"),
    telefone: yup.string().required("O contato deve ser preenchido"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/(\W|_)/, "Deve conter ao menos um carácter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    repeatPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha dever ser igual a senha"
      )
      .required("Confirmação de senha é obrigatória"),
  })
  .required();

function RegisterPage() {
  const { userRegister } = useContext(UserListContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (formData: TRegisterClient | any) => {
    userRegister(formData);
    
    reset();
  };

  return (
    <StyledRegister>
      <header>
        <h1>
          <b>Agenda Virtual</b>
        </h1>
        <Link to="/">
          <p>Voltar</p>
        </Link>
      </header>

      <nav>
        <h3>Crie sua conta</h3>
        <p>Serviço de Gerenciamento de Contatos</p>
        <form onSubmit={handleSubmit(submit)}>
          <section className="name">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Digite aqui seu nome"
            />
            {errors.name?.message}
          </section>

          <section className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="Digite aqui seu email"
            />
            {errors.email?.message}
          </section>

          <section className="password">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              {...register("password")}
              id="password"
              placeholder="Digite aqui sua senha"
            />
            {errors.password?.message}
          </section>

          <section className="password">
            <label htmlFor="repeatPassword">Confirmar Senha</label>
            <input
              type="password"
              {...register("repeatPassword")}
              id="repeatPassword"
              placeholder="Digite novamente sua senha"
            />
            {errors.repeatPassword?.message}
          </section>

          <section className="telefone">
            <label htmlFor="telefone">Contato</label>
            <input
              type="text"
              {...register("telefone")}
              id="telefone"
              placeholder="Opção de contato"
            />
            {errors.telefone?.message}
          </section>

          <button type="submit" className="register">
            Cadastrar
          </button>
        </form>
      </nav>
    </StyledRegister>
  );
}
export default RegisterPage;
