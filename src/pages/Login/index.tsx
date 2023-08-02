import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledLogin } from "./Login";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { UserListContext } from "../../providers/clients/userContext";

const schema = yup
  .object({
    email: yup.string().required("Informe o email para login"),
    password: yup.string().required("Informe a sua senha"),
  })
  .required();

function LoginPage({}) {
  const { userLogin } = useContext(UserListContext);
  
  const [isHidden, setIsHidden] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const redirectPage = () => {
    navigate("/register");
  };

  const submit = (formData: any) => {
    userLogin(formData);
  };

  const showPassword = () => {
    setIsHidden(!isHidden);
  };

  return (
    <StyledLogin>
      <h1>
        <b>Agenda Virtual</b>
      </h1>
      <nav>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(submit)}>
          <section className="email">
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email" />
            {errors.email?.message}
          </section>

          <section className="password">
            <label htmlFor="password">Senha</label>
            <div className="icon-input">
              <input
                type={isHidden ? "password" : "text"}
                {...register("password")}
                id="password"
              />
              <button
                className="btn-show-closed"
                type="button"
                onClick={showPassword}
              >
                {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
            {errors.password?.message}

            <button type="submit" className="login">
              Entrar
            </button>
          </section>
        </form>

        <footer>
          <p>Ainda não possui uma conta?</p>
          <button onClick={(event) => redirectPage()} className="register">
            Cadastre-se
          </button>
        </footer>
      </nav>
    </StyledLogin>
  );
}

export default LoginPage;
