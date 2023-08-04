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
  openEditeUser: boolean;
  setOpenEditeUser: React.Dispatch<React.SetStateAction<boolean>>;
  userEdit: (formData: TClientRequest) => Promise<void>
  editUser: boolean;
  setEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  handleToCloseEditUser: () => void;
  userDelete: () => Promise<void>;
}
export const UserListContext = createContext({} as IUserContext);

export const UserListProvider = ({ children }: IDefaultProviderProps) => {
  const [token, setToken] = useState("");
  const [idUser, setIdUser] = useState<number | undefined>();
  const [editUser, setEditUser] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEditeUser, setOpenEditeUser] = useState(false);
  const [user, setUser] = useState<TUserLogin | null>(null);

  const navigate = useNavigate();

  const { setcontactsUser, contactsUser } = useContext(userContext);

  const handleToCloseEditUser = () => {
    setOpenEditeUser(false);
  };

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

  const userEdit = async (formData: TClientRequest) => {
    const token = localStorage.getItem("@TOKEN");

    const userId = localStorage.getItem("@USERID");

    if (token) {
      try {
        const response = await api.patch<TClient | any>(`/client/${userId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);

        showToast({
          type: "success",
          message: "Cadastro alterado com sucesso",
        });

        handleToCloseEditUser();
      } catch (error) {
        showToast({ type: "error", message: "Ocorreu um erro" });
      }
    }
  };

  const userDelete = async () => {
    const token = localStorage.getItem("@TOKEN");

    const userId = localStorage.getItem("@USERID");

    if (token) {
      try {
        await api.delete(`/client/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        userLogout();

        showToast({ type: "success", message: "Apagado com sucesso" });
      } catch (error) {
        console.log(error);
        
        showToast({ type: "error", message: "Erro ao tentar deletar" });
      }
    }
  };

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
        setOpen,
        openEditeUser,
        setOpenEditeUser,
        userEdit,
        editUser,
        setEditUser,
        handleToCloseEditUser,
        userDelete,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
