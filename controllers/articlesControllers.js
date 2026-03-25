let articles = [];

exports.createArticle = (req, res) => {
    const { titre, contenu, auteur } = req.body;

    const article = {
        id: articles.length + 1,
        titre,
        contenu,
        auteur
    };

    articles.push(article);

    res.status(201).json(article);
};

exports.getArticles = (req, res) => {
    res.json(articles);
};

exports.getArticleById = (req, res) => {
    const article = articles.find(a => a.id == req.params.id);

    if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
    }

    res.json(article);
};

exports.updateArticle = (req, res) => {
    const article = articles.find(a => a.id == req.params.id);

    if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
    }

    const { titre, contenu, auteur } = req.body;

    if (titre) article.titre = titre;
    if (contenu) article.contenu = contenu;
    if (auteur) article.auteur = auteur;

    res.json(article);
};

exports.deleteArticle = (req, res) => {
    const index = articles.findIndex(a => a.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Article non trouvé" });
    }

    articles.splice(index, 1);

    res.json({ message: "Article supprimé avec succès" });
};

exports.searchArticles = (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ message: "Paramètre de recherche manquant" });
    }

    const results = articles.filter(a =>
        a.titre.toLowerCase().includes(query.toLowerCase()) ||
        (a.contenu && a.contenu.toLowerCase().includes(query.toLowerCase()))
    );

    res.json(results);
};