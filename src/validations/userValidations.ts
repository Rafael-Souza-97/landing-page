import IUser from "@/interfaces/IUser";

export function userValidation(userContact: IUser) {
  if(
    userContact.name === "" ||
    userContact.company === "" ||
    userContact.email === ""
  ) {
    return "Preencha todos os campos corretamente.";
  }

  if(userContact.name.length <= 3) {
    return "O nome precisa ter pelo menos 4 caracteres.";
  }

  if(userContact.company.length <= 2) {
    return "O nome da empresa precisa ter pelo menos 3 caracteres.";
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userContact.email)) {
    return "O email precisa ser válido.";
  }

  if(userContact.cellPhone.length !== 11) {
    return "O telefone deve ter 11 números.";
  }

  return "";
}

export default userValidation;
