Eduardo Jiménez Bahíllo
# PRÁCTICA 1 EVA 1

|Nagegador|Descripción|Ventajas|Desventajas|
|:---:|:---:|:---:|:---:|
|Chrome|Navegador web de código cerrado desarrollado por Google|Velocidad, frecuencia de actualización|Consumo de recursos, no es código abierto|
|Firefox|Navegador web libre y de código abierto desarrollado por Mozilla|Libre y de código abierto, velocidad|Rendimiento bajo comparado con el resto|
|Opera|Navegador web creado por la empresa noruega Opera Software|Consumo de recursos, modo ahorro de batería|Compatibilidad con los últimos elementos JS, HTML y CSS|

## ![Icono Chrome](https://icons.iconarchive.com/icons/google/chrome/48/Google-Chrome-icon.png) Instalación de Chrome 
Escribir en la terminal:
> sudo nano /etc/apt/sources.list.d/google-chrome.list  

Escribir en el archivo:  
> deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main 

Continuar escribiendo en la terminal:
> wget https://dl.google.com/linux/linux_signing_key.pub  
> sudo apt-key add linux_signing_key.pub  
> sudo apt update  
> sudo apt install google-chrome-stable  

## ![Icono Firefox](https://icons.iconarchive.com/icons/carlosjj/mozilla/48/Firefox-icon.png) Instalación de Firefox
> echo -e "\ndeb http://downloads.sourceforge.net/project/ubuntuzilla/mozilla/apt all main" | sudo tee -a /etc/apt/sources.list > /dev/null  
> sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 2667CA5C  
> sudo apt update  
> sudo apt install firefox-mozilla-build

## ![Icono Opera](https://icons.iconarchive.com/icons/benjigarner/softdimension/48/Opera-icon.png)Instalación de Opera
> sudo add-apt-repository 'deb https://deb.opera.com/opera-stable/ stable non-free'  
> wget -qO- https://deb.opera.com/archive.key | sudo apt-key add -  
> sudo apt-get update  
> sudo apt-get install opera-stable