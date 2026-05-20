export interface UserAuth {
  idUsuario: number;
  usuario: string;
  persona: Person;
  roles: Role[];
}

export interface Person {
  idPersona: number;
  nombres: string;
  apellidos: string;
  email: string;
}

export interface Role {
  idRol: number;
  rol: string;
}
