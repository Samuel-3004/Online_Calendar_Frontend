import { createContext, useState } from "react";
import { api } from "../../services/api";
import { showToast } from "../../styles/toast";
import { TContactNoRelation, TContactRequest, TContactUpdate, TListContacts } from "./types.contacts";
import { IDefaultProviderProps } from "../clients/userContext";

interface IContactContext {
  contactsUser: TListContacts,
  setcontactsUser: React.Dispatch<React.SetStateAction<TListContacts>>,
  contactFounded: TContactNoRelation | undefined,
  setContactFounded: React.Dispatch<React.SetStateAction<TContactNoRelation | undefined>>,
  contactId: number | undefined,
  setContactId: React.Dispatch<React.SetStateAction<number | undefined>>,
  openEd: boolean,
  setOpenEd: React.Dispatch<React.SetStateAction<boolean>>,
  handleToCloseEd: () => void,
  handleToClose: () => void,
  registerContact: (formData: TContactRequest) => Promise<void>,
  editContact: (formData: TContactRequest) => Promise<void>,
  deleteContact: () => Promise<void>
}

export const userContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contactsUser, setcontactsUser] = useState<TListContacts>([]);
  const [contactFounded, setContactFounded] = useState<TContactNoRelation | undefined>();
  const [contactId, setContactId] = useState<number | undefined>();
  const [openEd, setOpenEd] = useState<boolean>(false);
  
  const handleToCloseEd = () => {
    setOpenEd(false);
  };

  const handleToClose = () => {
    setOpenEd(false);
  };

  const registerContact = async (formData: TContactRequest) => {
    const token = localStorage.getItem("@TOKEN");

    const userId = localStorage.getItem("@USERID");

    if (token) {
      try {
        const response = await api.post<TContactNoRelation>(`/contact/${userId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setcontactsUser([...contactsUser, response.data]);

        showToast({
          type: "success",

          message: "Cadastro de tecnologia feito com sucesso",
        });

        handleToClose();

      } catch (error) {
        console.log(error);

        showToast({
          type: "error",

          message: "Erro ao tentar cadastrar uma nova tecnologia",
        });
      }
    }
  };

  const editContact = async (formData: TContactRequest) => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        const response = await api.patch<TContactNoRelation>(`/contact/${contactId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const contactAtual = contactsUser.map((tech) => {
          if (tech.id === contactId) {
            return response.data;
          } else {
            return tech;
          }
        });

        setcontactsUser(contactAtual);

        showToast({ type: "success", message: "Alterado com sucesso" });
        
        handleToCloseEd();
      } catch (error) {
        showToast({ type: "error", message: "Ocorreu um erro" });
      }
    }
  };

  const deleteContact = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        await api.delete(`/contact/${contactId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const contactsAtual = contactsUser.filter((contactUser) => {
          if (contactUser !== contactFounded) {
            return contactUser;
          }
        });

        setcontactsUser(contactsAtual);

        showToast({ type: "success", message: "Apagado com sucesso" });
        
        handleToCloseEd();
      } catch (error) {
        console.log(error);
        
        showToast({ type: "error", message: "Erro ao tentar deletar" });
      }
    }
  };

  return (
    <userContext.Provider
      value={{
        contactsUser,
        setcontactsUser,
        contactFounded,
        setContactFounded,
        contactId,
        setContactId,
        openEd,
        setOpenEd,
        editContact,
        deleteContact,
        handleToCloseEd,
        registerContact,
        handleToClose
      }}
    >
      {children}
    </userContext.Provider>
  );
};
