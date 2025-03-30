export class User {
    constructor(
      public readonly id: string,
      public readonly name: string,
    ) {
      if (!name) {
        throw new Error("Le nom de l'utilisateur est obligatoire.");
      }
    }
  }
  