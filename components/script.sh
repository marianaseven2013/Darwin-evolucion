#!/bin/bash

# Script para crear 25 carpetas con nombres desde evolución1 hasta evolución25
# y agregar dentro de cada carpeta un archivo con el nombre de la carpeta.js y .css
# con contenido específico dentro de los archivos .js

for i in {1..25}
do
  mkdir "evolucion$i"
  touch "evolucion$i/evolucion$i.js" "evolucion$i/evolucion$i.css"
  echo "let DOM_evolucion$i = document.querySelector(\"#evolucion$i\");" > "evolucion$i/evolucion$i.js"
  echo "DOM_evolucion$i.innerHTML = \`evolucion$i\`;" >> "evolucion$i/evolucion$i.js"
  #wecho ".evolucion$i { display:none }" > "evolucion$i/evolucion$i.css"
done

echo "Se han creado 25 carpetas con nombres desde evolución1 hasta evolución25, y se han agregado los archivos correspondientes con el contenido en los .js."
