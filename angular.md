### Angular

## L'interpolation

## 

##

##

##

### NgIf

###

####

Cette directive nous permet d'agir sur le style d'un élément : 
``` html
<p [ngStyle]="{color: color}">
    Bulbizarre
</p>
...

### NgClass

Cette directive permet d'ajouter et d'enlever dynamiquement une classe sur un element

``` html
<div [class.someClass]="isStylewithSomeClass()">Ng Class!</div>
```

On peut utiliser tout un tas de symbole afin d'intéragir avec le templat : 
- {{}} pour afficher le contenu de variable 
- ng ou directives qui commencent par * 
- [] pour le binding de proprietes
- creation de variables locales avec #
- usage des selecteurs pour imbriquer les templates de composants
- gestion des evenements avec ()



### Le cycle de vie des composants

Les input d'un composant ne sont pas encore evaluees au sein du constructeur
``` ts
export 


``` 

Angular nous permet de nous greffer (avec le code) a des moments cles du cycle de vie du composant :
- ngOInit: est appele une fois apres le chargement du composant, ideal lorsqu'on souhaite effectuer des initialisations.
- ngOnDestroy: est appele à la destruction du composant.
- ngOnChanges: A chaque modification de propriété qui participe au databiding, cette methode reçoit les valeurs précédentes et modifies du binding. n'est pas appelee si aucun changement n'est d