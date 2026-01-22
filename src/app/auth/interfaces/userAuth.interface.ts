export interface UserAuth {
  idUsuario?: number;
  idPersona?: number;
  usuario: string;
  contrasenia: string;
  correo?: string;
  estado?: string;
  persona?: Person;
  roles?: Role[];
}

export interface Person {
  idPersona: number;
  idCiudad: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  ruc: string;
  direccion: string;
  celular: string;
  email: string;
  telefono: string;
  telefono_adicional: string;
  estado: string;
  ciudad: City;
}

export interface City {
  idCiudad: number;
  ciudad: string;
  estado: string;
}

export interface Role {
  idRol: number;
  rol: string;
  estado: string;
  permisos: any[];
}
