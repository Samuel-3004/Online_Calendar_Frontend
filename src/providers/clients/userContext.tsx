import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../contacts/contactContext";
import { showToast } from "../../styles/toast";
import {
  TClient,
  TClientRequest,
  TDataLogin,
  TSession,
  TUserLogin,
} from "./types.clients";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
interface IUserContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  idUser: number | undefined;
  setIdUser: React.Dispatch<React.SetStateAction<number | undefined>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: TUserLogin | null;
  setUser: React.Dispatch<React.SetStateAction<TUserLogin | null>>;
  userRegister: (formData: TClientRequest) => Promise<void>;
  userLogin: (formData: TSession) => Promise<void>;
  userLogout: () => void;
}
export const UserListContext = createContext({} as IUserContext);

export const UserListProvider = ({ children }: IDefaultProviderProps) => {
  const [token, setToken] = useState("");
  const [idUser, setIdUser] = useState<number | undefined>();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<TUserLogin | null>(null);

  const navigate = useNavigate();
  const { setcontactsUser } = useContext(userContext);

  const userRegister = async (formData: TClientRequest) => {
    try {
      await api.post<TClient>(`/client`, formData);
      showToast({ type: "sucess", message: "Cadastro realizado com sucesso" });
      navigate("/");
    } catch (error) {
      console.log(error);
      showToast({
        type: "error",
        message: "O cadastro não foi realizado. Tente novamente!",
      });
    }
  };

  const userLogin = async (formData: TSession) => {
    try {
      const response = await api.post<TDataLogin>(`/session`, formData);

      setUser(response.data.user);
      setIdUser(response.data.user.id);
      setcontactsUser(response.data.user.contacts);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", String(response.data.user.id));
      showToast({ type: "success", message: "Login realizado com sucesso" });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      showToast({ type: "error", message: "Email e/ou senha inexistente" });
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/session", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data.user);
          setIdUser(response.data.user.id);
          setcontactsUser(response.data.user.contacts);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  return (
    <UserListContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        userLogout,
        token,
        setToken,
        idUser,
        setIdUser,
        open,
        setOpen
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
