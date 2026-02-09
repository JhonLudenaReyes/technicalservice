export interface RolePermits {
  idRol: number;
  rol: string;
  estado: string;
  permisos: Permiso[];
}

export interface Permiso {
  idPermiso: number;
  permiso: string;
  estado: string;
}
