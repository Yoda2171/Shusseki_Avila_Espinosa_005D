import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interface';

const ESTUDIANTES_KEY = 'My-Estudiantes';
const PROFESORES_KEY = 'My-Profesores';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  private _storage: Storage;
  newUsuario: Usuario = <Usuario>{};
  public usuario: Usuario[];

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addEstudiante(dato: Usuario): Promise<any> {
    return this.storage.get(ESTUDIANTES_KEY).then((datos: Usuario[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(ESTUDIANTES_KEY, datos);
      } else {
        return this.storage.set(ESTUDIANTES_KEY, [dato]);
      }
    });
  }

  async addProfesores(dato: Usuario): Promise<any> {
    return this.storage.get(PROFESORES_KEY).then((datos: Usuario[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(PROFESORES_KEY, datos);
      } else {
        return this.storage.set(PROFESORES_KEY, [dato]);
      }
    });
  }

  async getProfesores(): Promise<Usuario[]> {
    return this.storage.get(PROFESORES_KEY);
  }
  async getEstudiantes(): Promise<Usuario[]> {
    return this.storage.get(ESTUDIANTES_KEY);
  }
}
