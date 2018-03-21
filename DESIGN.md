# Project Title

Ce document permet de comprendre l'architecture du projet

## Pour commencer

1 - répertoire js : contient nos fichiers angularJS, notre Pokedex.js ' app  principale'
2 - répertoire services: contient nos factories 
3 - répertoire View : contient nos fragemens de vue pour le routage

index.html , notre page principale qui injecte la directive qui constient notre application

### architecture MVC

```
- Le modèle est représenté par le $scope qui se balade entre le code Javascript et les pages web
- Les controlleur sont ceux qui utilisent les $scope pour les donnée et controlent le routages, ils se trouvent dans pokedex.js
- Les vus se trouvent dans le répertoire views

``` 
### Factories.js

ici se trouvent nos principaux services dont des factories qui retournent les ressources de l'api Pokemon et aussi notre SharedService qui sera partagé entre la recherche by ID et la recherche by Name


