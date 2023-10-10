# [Objets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)

> Stocker de la donnée sous forme de clé-valeur

Un objet en Javascript est un type de donnée permettant de **grouper des informations ensemble** sous la forme d'un dictionnaire.

Les objets Javascript ne sont pas à confondre avec les Objets de la Programmation Orientée Objet. Il est toutefois possible d'utiliser les concepts de POO en Javascript, notamment avec les [classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes).

## Bases

```js
const personne = {
  name: "John",
  familyName: "Lennon",
  job: "Working-class hero"
};
```

Dans cet exemple, `name`, `familyName` et `job` sont les clés de l'objet. `"John"`, `"Lennon"` et `"Working-class hero"` sont les valeurs associées.

On peut accéder aux différentes valeurs en utilisant la syntaxe `personne.name`, ou alternativement `personne["name"]`.

```js
console.log(personne.name);
```

## Manipuler un objet

### Réassigner les valeurs

Pour modifier les valeurs d'un objet, il faut réassigner la valeur correspondant à la clé que l'on souhaite modifier.

```js
personne.job = "Unemployed";
```

> Réassigner les valeurs d'un objet s'appelle "muter un objet", et peut avoir des conséquences inattendues.
> Nous en reparlerons plus tard.

### Supprimer une clé

Il est possible de supprimer une clé d'un objet. On perd alors l'accès à la valeur correspondante.

```js
delete personne.job
```

---

## À retenir

- Un objet est un dictionnaire de paires clé-valeur
- Il ne faut pas confondre les objets Javascript avec les objets de la POO
- Il est possible de modifier le "contenu" d'un objet

---

<!-- ## Exos

- Ouvrir le dossier `/exos/1_syntax/1-5_arrays`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `.js`, et vérifier les résultats dans
  votre navigateur -->

---

### _À suivre: [Tableaux](./1-5_arrays.md)_
