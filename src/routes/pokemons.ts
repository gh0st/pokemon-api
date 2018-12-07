import { Request, Response, Application } from 'express';
import pokemons = require('../db.json');

export class Pokemons {
  public routes(app: Application): void {
    app.route('/pokemons')
      .get((req: Request, res: Response) => {
        res.status(200).send(pokemons);
      });

    app.route('/pokemons/:id')
      .get((req: Request, res: Response) => {
        let id = req.params.id;
        res.status(200).send(pokemons[id]);
      });

    app.route('/pokemons')
      .post((req: Request, res: Response) => {
        let name = req.body.name;
        let attack = req.body.attac;
        // logic to store in database/json
      });
  }
}
