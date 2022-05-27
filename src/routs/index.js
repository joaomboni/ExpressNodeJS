import express from "express";
import livros from "./livrosRouts.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de NodeJS"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes;
