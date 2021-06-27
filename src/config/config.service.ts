import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    //la variable NOD_ENV no está declarada en el ambiente de desarrollo
    const isDevelopmentEnv = process.env.NODE_ENV != 'production';

    //Comprobamos en que ambiente estamos
    if (isDevelopmentEnv) {
      //cargamos la variable de entorno
      const envFilePath = __dirname + '/../../.env';
      //leemos el archivo
      const existsPath = fs.existsSync(envFilePath);

      //comprobamos si existe
      if (!existsPath) {
        //si no existe
        console.log('.env file does not exist');
        process.exit(0);
      }

      //leemos la variable de entorno
      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      //estamos en ambiente de desarrollo
      this.envConfig = {
        //cargamos nuestras variables
        PORT: process.env.PORT,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
