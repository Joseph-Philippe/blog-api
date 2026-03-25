/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         titre:
 *           type: string
 *         contenu:
 *           type: string
 *         auteur:
 *           type: string
 *         categorie:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 */

const express = require('express');
const router = express.Router();

const {
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    searchArticles
} = require('../controllers/articlesControllers.js');

/**GET ALL
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Liste des articles
 */

/**POST
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Créer un article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Article créé
 */

/**GET BY ID
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Récupérer un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article trouvé
 */


/**PUT
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Modifier un article
 *     tags: [Articles]
 */

/**DELETE
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     tags: [Articles]
 */

/**SEARCH
 * @swagger
 * /api/articles/search:
 *   get:
 *     summary: Rechercher des articles
 *     tags: [Articles]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Résultats de recherche
 */

router.post('/', createArticle);
router.get('/', getArticles);
router.get('/search', searchArticles);
router.get('/:id', getArticleById);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);


module.exports = router;