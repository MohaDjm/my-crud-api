📦 API CRUD avec Node.js et Cassandra
📄 Description du Projet

Cette API permet de gérer des produits avec des opérations CRUD (Create, Read, Update, Delete). Elle utilise Node.js pour le backend et Apache Cassandra comme base de données NoSQL. Le projet est conçu pour gérer de gros volumes de données, en profitant de la performance de Cassandra pour des opérations de lecture/écriture rapides.
✨ Fonctionnalités

    Créer un produit : Ajoutez de nouveaux produits dans la base de données.
    Lire un produit : Récupérez les détails d'un produit spécifique par son ID.
    Mettre à jour un produit : Modifiez les informations d'un produit existant.
    Supprimer un produit : Retirez un produit de la base de données.

🛠 Pré-requis d'Installation
Logiciels Nécessaires

    Node.js : Version 12 ou supérieure.
    Apache Cassandra : Version 4.0 ou supérieure.
    Git : Pour cloner le projet.
    Docker (facultatif) : Pour exécuter Cassandra dans un conteneur Docker.

📋 Dépendances

Les principales dépendances sont :

    express : Framework pour gérer les routes et les requêtes HTTP.
    cassandra-driver : Bibliothèque pour interagir avec Cassandra.
    dotenv : Gestion des variables d'environnement.

🚀 Installation

    Cloner le projet :

git clone https://github.com/MohaDjm/my-crud-api.git
cd my-crud-api

Installer les dépendances :

npm install

Configurer la base de données Cassandra :

    Assurez-vous que Cassandra est en cours d'exécution.
    Dans cqlsh, créez un keyspace et une table products :

    CREATE KEYSPACE test_keyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

    USE test_keyspace;

    CREATE TABLE products (
        product_id UUID PRIMARY KEY,
        name TEXT,
        description TEXT,
        price DECIMAL,
        category TEXT
    );

Configurer les variables d'environnement :

    Créez un fichier .env à la racine du projet pour stocker les configurations, comme le port de l'API :

        PORT=3000

▶️ Démarrage du Projet

Pour démarrer le serveur en mode développement, exécutez :

node app.js

L'API sera accessible à l'adresse http://localhost:3000.
🌐 Utilisation de l'API avec CURL

Voici des exemples de requêtes CURL pour chaque route de l'API.
➕ Créer un Produit

    Méthode : POST
    URL : http://localhost:3000/api/products
    Commande CURL :

curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d "{\"name\":\"Example Product\", \"description\":\"This is an example product\", \"price\":19.99, \"category\":\"Electronics\"}"

Réponse :

    {
      "message": "Product created successfully",
      "product": {
        "product_id": "UUID",
        "name": "Example Product",
        "description": "This is an example product",
        "price": 19.99,
        "category": "Electronics"
      }
    }

📖 Lire un Produit par ID

    Méthode : GET

    URL : http://localhost:3000/api/products/{product_id}

    Commande CURL :

curl -X GET http://localhost:3000/api/products/{product_id}

Remplacez {product_id} par l'UUID du produit.

Réponse (exemple) :

    {
      "product_id": "UUID",
      "name": "Example Product",
      "description": "This is an example product",
      "price": 19.99,
      "category": "Electronics"
    }

📝 Mettre à Jour un Produit

    Méthode : PUT

    URL : http://localhost:3000/api/products/{product_id}

    Commande CURL :

curl -X PUT http://localhost:3000/api/products/{product_id} -H "Content-Type: application/json" -d "{\"name\":\"Updated Product\", \"description\":\"Updated description\", \"price\":29.99, \"category\":\"Updated Category\"}"

Remplacez {product_id} par l'UUID du produit.

Réponse :

    {
      "message": "Product updated successfully"
    }

❌ Supprimer un Produit

    Méthode : DELETE

    URL : http://localhost:3000/api/products/{product_id}

    Commande CURL :

curl -X DELETE http://localhost:3000/api/products/{product_id}

Remplacez {product_id} par l'UUID du produit.

Réponse :

{
"message": "Product deleted successfully"
}
