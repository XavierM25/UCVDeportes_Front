export interface Usuario {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  usuario: string;
  rol: string;
  correo: string;
  direccion: string;
  telefono: string;
  sexo: string;
  nacimiento: string;
}

export const mockUsuarios: Usuario[] = [
  {
    id: 1,
    nombre: "Jacckmey",
    apellidoPaterno: "G",
    apellidoMaterno: "C",
    usuario: "Jacckmey",
    rol: "Administrador",
    correo: "jacckmey@gmail.com",
    direccion: "Los Olivos",
    telefono: "923145421",
    sexo: "Masculino",
    nacimiento: "2003-02-12"
  },
  {
    id: 2,
    nombre: "Jacqueline",
    apellidoPaterno: "Dos",
    apellidoMaterno: "Dos",
    usuario: "JDos",
    rol: "Estudiante",
    correo: "jacqueline.dos@gmail.com",
    direccion: "Los Olivos",
    telefono: "952154432",
    sexo: "Femenino",
    nacimiento: "2002-08-20"
  }
];
