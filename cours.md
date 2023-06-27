## Introduction : Typescript

...

...

npm install -g typescript
Set-ExecutionPolicy 'unrestricted' pour Windows

Puis tsc

touch fichier.ts
tsc fichier.ts


Les choses à retenir avant d'aller plus loin : 
- TS est un superset de Javascript, tous les programmes JS sont des programmes TS, l'inverse n'est pas necessairement vraie.
- TS ajoute un système de type au JS et tente de détecter du code qui entrainera des exceptions à l'exectution. En revanche, ne vous attendez pas à ce que toutes les exceptions soient detectées par le tsc. Il est tout a fait possible d'être valide pour le type checker de tsc et de declencher des erreurs au runtime.

- Tsc vous permet de configurer son comportement avec un fichier tsconfig.json
- Dans des nouveaux projets : utiliser noImplicitAny et strictNullChecks a `true`

- tsc convertit le Typescript/Javascript nouvelle generation en javascript compatible avec les navigateurs web (transpiling)

- ts ne verifie pas les types au runtime

- '{{}}' permet d'afficher la valeur en question