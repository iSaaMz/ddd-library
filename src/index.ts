import app from "./interfaces/http";
import { AppDataSource } from "./infrastructure/database/DataSource";

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Serveur démarré sur le port 3000");
    });
  })
  .catch((error) => {
    console.error("Erreur lors de l'initialisation de la base de données :", error);
  });
