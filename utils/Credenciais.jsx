// utils/Credenciais.js

export const Acesso = (credenciais) => {
  const { username, password } = credenciais;

  let initialUsername = "Coordena"
  let initialPassword = "2024"

  if (username && password) {
    initialUsername = username
    initialPassword = password
  }

  return {
    usuarioFixo: initialUsername,
    senhaFixa: initialPassword,
  };
};