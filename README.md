
  

  

# Fundamentos de Ingenieria de Software - Obligatorio 1

  

  

## Repositorio

  

**Como vamos a utilizar repo locales y remotos?**

- Creamos un repositorio remoto en Github en el cual se centralizara todo el código.
- Vamos a utilizar las ramas 'main' y 'develop' como las 2 ramas principales, siendo 'main' producción y 'develop' pre-producción, luego también utilizaremos ramas por cada feature que estaremos agregando a la app.
- En primera instancia, es decir, al escribir este documento, usaremos directamente la rama 'develop'.

> Por ejemplo: queremos agregar la funcionalidad de agregar categorías, creamos la rama local 'feature/agregar_categorias', rama en la cual vamos a trabajar localmente y luego al haber terminado, hacer un merge con 'develop'.

Una vez testeado los cambios, si todo está correcto, se hacer merge con main.

  

**Comandos git a utilizar:**

* git init
	* Para crear un nuevo repositorio
* git clone 
	* Es utilizado para crear una copia del repositorio del lugar donde está, a la máquina en la que se está trabajando. Se pude clonar una rama especifica con -b + nombre de la rama, antes de la dirección del repositorio.
* git commit
	* Es utilizado para guardar los cambios realizados en Git. 
* git pull
	* Baja los cambios hechos del repositorio remoto a la máquina local.
* git push
	* Sube los cambios realizados al repositorio.
* git merge
	*  Se utiliza para unir dos ramas.
* git branch
	* Es utilizado para listar las ramas existentes. Crear y eliminar ramas.
* git checkout
	* Es utilizado para salir de una rama y entrar a otra. Asumiendo estas ramas ya existen.
* git add 
	* Es utilizado para contrastar los cambios hechos de forma local, contra el repositorio. Los cambios no son guardados con git add. Para eso debe luego utilizarse git commit.
* git diff
	* Es utilizado para identificar diferencias en el repositorio.
* git stash
	* Es utilizado en caso se quiera guardar temporalmente cambios realizados. Esto permite pasar a otra tarea e impactar los cambios más tarde.

  

  

## Versionado

  

**Buenas practicas del versionado**

Como fue explicado en el punto anterior, usaremos el versionado de git, subiendo cada feature bajo una rama distinta, para así poder identificar y hacer un rollback de la forma más rapida posible.

**Uso de las ramas separadas de main**

También utilizaremos la rama 'develop' como pre-produccion, es decir como una rama de test antes de subir los cambios a main para asi poder evitar subir errores a produccion.

**Resumen de comits y evolución del proyecto**

El nombre de las ramas de features van a seguir un patrón para facilitar el entendimiento de esta y también a la hora del commit, se le agregará un comentario que resuma brevemente la razon de la rama.

>Por ejemplo: quiero agregar la funcionalidad de crear una pagina de FAQ, la rama podría llamarse feature/crear_pagina_FAQ y luego commitearse con el mensaje ' se agrega la pagina FAQ a la app'

En caso de bugs, el nombre puede ser hotfix/nombre_de_rama

## Elicitación

### Tormenta de ideas

La primera técnica utilizada fue la **tormenta de ideas** [*Ver el [Anexo](#anexo-1)* ]. Debido a que es un software que apunta a un público en general, con las definiciones que se tienen en ese momento, y que todos los participantes en el desarrollo del proyecto tienen ingresos y ahorran, pueden desde su experiencia, aportar puntos de vista.

Se pusieron sobre la mesa los conceptos y funcionalidades basicas sobre el producto, en un ambiente relajado, dando rienda suelta a la creatividad previo a atarnos a requisitos que vendran luego en la elicitacion

Como principal conclusion de esta etapa, se genero la idea de "registro de ingresos y egresos" con la meta de poder evaluar luego esta informacion con nuevas funcionalidades. Dentro de estas funcionalidades, se puede generar una seccion de educacion y "tips" , proporcionando asi mayor valor al usuario.

  

### Entrevistas

Como segunda técnica de elicitación se eligieron las entrevistas. Para poder tener de primera mano las opiniones de distintos tipos de usuarios. Se eligieron preguntas abiertas para obtener información a modo general, y algunas más específicas para poder tener información en particular sobre temas que previamente se definió como de importancia en una sesión de Tormenta de ideas.

Nuestro primer acercamiento al proyecto fue mediante dos entrevistas. Nuestro principal objetivo con ambas es el de conseguir un punto de vista mas cercano a lo que debe ser construido y asi definir los requisitos del mismo.

Las personas entrevistadas representaban dos grupos: jovenes buscando comenzar sus ahorros y profesionales mayores que necesiten llevar un mayor control de sus ingresos/egresos.

Luego de ambas entrevistas logramos sacar las siguientes conclusiones:

 
-

 #### Evidencia
 Ambas entrevistas realizadas se pueden encontrar [aqui](elicitacion/entrevistas/entrevista-1.md) y [aqui](elicitacion/entrevistas/entrevista-2.md)


### Ingeniería inversa

Como tercer y ultima tenia de felicitación utilizamos la ingeniera inversa. En este caso analizamos en conjunto dos aplicaciones diferentes: [**YNAB budget**](https://www.youneedabudget.com/) y [**CoinApp**](https://coinapp.com.uy/).
Pudimos ver que ambas apuntan al mismo objetivo, pero a diferentes escalas entre  ellas.
Por un lado, **CoinApp** apunta a un usuario mucho mas casual que desea llevar un registro de sus gastos pero no esta tan interesado en aprender a ahorrar mas profundamente. Por ello, las herramientas que ofrece son mucho mas simples.
En cambio, cuando vemos **YNAB budget** podemos denotar un conjunto de herramientas mucho mas completa, teniendo también la principal ventaja de poseer integración con bancos locales.

A continuación se mostrara un desglose de las features mas importantes que pudimos identificar para cada una de ellas:

#### YNAB budget

* Gastos customizables
	* Frecuencia de pago (diario, semanal, mensual).
	* Cantidad a gastar.

* Categorías de los gastos:
	* Entretenimiento, gastos frecuentes, gastos no-mensuales, metas a alcanzar, calidad de vida.
	* Permitir la creación de categorías custom.
	* Marcarlas como categorías indispensables o dispensables.

* Habilidad de planificar los gastos:
	* Permitir una planificación en la cual te avise si superaste tu limite a gastar y que de opciones de redistribuir ese dinero desde otras categorias, priorizando las categorias dispensables.

* Como añadir gastos:
	* Permitir tanto añadir gastos a mano, agregandolos 1 por 1 como automatizar esto permitiendo conectar tu cuenta de banco con la aplicación para que pueda esta ver los movimientos de la cuenta.

* Metrica 'Age of Money'
	* Una metrica que trackea la cantidad de dias en promedio que pasan desde que adquiriste el dinero, hasta que lo gastaste, cuanto mayor sea la cantidad de dias, significa que mayor es la seguridad economica de la persona.

* Tab de información y videos:
	* Videos informativos o articulos sobre como ahorrar, sobre como utilizar la aplicación de forma mas eficiente.

#### CoinApp

* UI
	* Los dos principales métodos de interacción con la App deben ser “Añadir gasto” y “Añadir ingreso”. Estas dos acciones permiten dejar un historial de ingresos/egresos en la cuenta, y por ende, es la función más importante que debemos ofrecer.
	* Mostrar en la primera pantalla un balance de la cuenta en tiempo real, ya que es el principal indicador que tiene el usuario.
    
* Informacion
	* Se debe mostrar una suma de los gastos del último mes. Podríamos analizar también un desglose de los últimos 5 gastos para ser mas especifico y mostrar más control al usuario
    
* Objetivos
	* Dar la posibilidad de crear objetivos de ahorro que serán destinados para un gasto específico, por ejemplo: Un auto, una televisión nueva, entradas a un recital o un viaje.
	* Permitir la posibilidad de crear categorías de gastos y llevar la cuenta por categoría, permitiéndonos hacer ese desglose.
	* Permitir poner límites de gastos (o alertas) para determinadas categorías.
    
* Ahorro cooperativo
	* Evaluar la posibilidad de crear cuentas de ahorro cooperativas en las que diferentes usuarios puedan ahorrar hacia el mismo propósito.

#### Evidencia

Dentro del anexo [Ingenieria Inversa](#ingenieria-inversa) se podran ver las capturas tomadas de ambas aplicaciones

### User Persona

Luego de aplicar las tecnicas documentadas, identificamos dos tipos de personas: 

* Profesional universitario, buscando mejorar sus finanzas 
* Primera experiencia laboral en busca de sus primeros ahorros

![Elizabeth](elicitacion/user-persona/persona-elizabeth.png?raw=true  "Elizabeth")
![Martin](elicitacion/user-persona/persona-martin.png?raw=true  "Martin")


## Especificación

  

  

**Requerimientos funcionales**

  

  

- Permitir agregar / quitar gastos completamente customisables.

  

- Permitir agregar / quitar categorías para los gastos.

  

- Permitir linkear la cuenta de banco con la aplicación para automatizar los pagos.

  

- Planificar los gastos.

  

- Importar pagos mediante el QR de los recibos.

  

- Se debe poder indicar una cantidad de ahorro mensual o anual deseado.

  

- Se debe poder indicar cuanto de la meta se va cumpliendo y cuando se cumplió

  

  

**Requerimientos no funcionales**

  

- El sistema debe ser seguro y cuidar los datos de los clientes.

  

- Debe ser compatible tanto con iOS como con Android.

  

- Debe poder ser publicado en Apple app store y en Google Play.

  

- Debe soportar tanto el idioma Español como Ingles.

  

  

## Validación y verificación

  

  

placeholder

  

  

## Reflexión

  

  

test

  

## Anexos

  

### Elicitacion

#### Tormenta de ideas

![Tormenta de ideas](elicitacion/tormenta-de-ideas/brainstorm.jpg?raw=true  "Tormenta de ideas")

#### Ingenieria inversa

<b>CoinApp</b>

<img src="elicitacion/ingenieria-inversa/IMG_3464.png" width="200">
<img src="elicitacion/ingenieria-inversa/IMG_3465.png" width="200">
<img src="elicitacion/ingenieria-inversa/IMG_3466.png" width="200">
<img src="elicitacion/ingenieria-inversa/IMG_3467.png" width="200">
<img src="elicitacion/ingenieria-inversa/IMG_3468.png" width="200">

</br>

<b>YNAB budget</b>

<img src="elicitacion/ingenieria-inversa/YNAB-1.jpeg" width="200">
<img src="elicitacion/ingenieria-inversa/YNAB-2.jpeg" width="200">
<img src="elicitacion/ingenieria-inversa/YNAB-3.jpeg" width="200">
<img src="elicitacion/ingenieria-inversa/YNAB-4.jpeg" width="200">