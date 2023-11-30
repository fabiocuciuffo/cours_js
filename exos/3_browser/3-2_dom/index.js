"use strict"
console.log("Exos 3-2: DOM")

/**========================================================================
 *                           Chirugie
 *========================================================================**/
console.log("*** Chirurgie ***")

/**
 * 1) Changez le texte et la couleur du background de l'élément avec l'id 'coucou'
 * 2) Comptez les éléments de type 'i'
 * 3) Comptez les 'i' gris, bleus, et rouge
 * 4) Supprimez les éléments avec la classe 'inutile', ainsi que les i bleus et rouge
 * 5) Créez un élément de type 'p', avec:
 * - votre ville en textContent
 * - la classe 'blue'
 * - ajoutez cet élément en dernier enfant du footer
 * 6) Créez un élément de type 'h3', avec:
 * - 'Infos' en textContent
 * - la classe 'red'
 * - ajoutez cet élément en premier enfant du footer
 * Bonus) Créez 15 éléments de type 'div', avec la classe 'numero'.
 * - Ajoutez en textContent de ces éléments leur numero (entre 1 et 15) et ajoutez les à la 2e section
 */

const coucou = document.getElementById("coucou")
coucou.style.backgroundColor = "blue"
coucou.style.color = "red"

const typeI = Array.from(document.getElementsByTagName("i"))
console.log(typeI.length)

const typeIASuppr = typeI.filter(
    (element) =>
        element.classList.contains("red") || element.classList.contains("blue")
)
console.log(typeIASuppr)

typeIASuppr.forEach((element) => element.remove())

const inutiles = Array.from(document.getElementsByClassName("inutile"))
inutiles.forEach((element) => {
    element.remove()
})

let p = document.createElement("p")
p.textContent = "Bordeaux"
p.classList.add("blue")
document.getElementsByTagName("footer")[0].appendChild(p)

let h3 = document.createElement("h3")
h3.textContent = "Infos"
h3.classList.add("red")
document
    .getElementsByTagName("footer")[0]
    .insertBefore(h3, document.getElementsByTagName("footer")[0].firstChild)

const divs = []
for (let i = 1; i < 16; i++) {
    divs.push(document.createElement("div"))
    divs[divs.length - 1].classList.add("numero")
    divs[divs.length - 1].textContent = i
}

divs.forEach((element) =>
    console.log(document.querySelector("section").appendChild(element))
)
/**========================================================================
 *                           [BONUS] Article
 *========================================================================**/
console.log("*** [BONUS] Article ***")

/**
 * 1) Déplacer l'article dans la 1ère section
 * 2) Reproduire programmatiquement l'élément d'article, et l'ajouter à la 2e section
 */
