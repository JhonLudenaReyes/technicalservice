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
  idLocalidad: number;
  nombres: string;
  apellidos: string;
  direccion: string;
  celular: string;
  estado: string;
  localidad: Locality;
}

export interface Locality {
  idLocalidad: number;
  localidad: string;
  estado: string;
}

export interface Role {
  idRol: number;
  rol: string;
  estado: string;
  permisos: any[];
}
