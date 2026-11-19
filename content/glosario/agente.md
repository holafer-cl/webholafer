---
title: Agente
date: 2026-11-18
date_creacion: 2026-11-16T18:25:15
author: Fer Díaz-González
type: glosario
version: 1.1.0
tags:
  - ciencia
aliases:
  - agentes
---

Se define fundamentalmente como **un elemento activo en un [[sistema]] o [[red]] de múltiples elementos** [^1]. De manera más precisa, Jacques Ferber (1999) lo define como **una entidad virtual o física** capaz de actuar en un entorno y comunicarse directamente con otros agentes, cuyo comportamiento *«tiende hacia la satisfacción de sus objetivos, teniendo en cuenta los recursos y habilidades disponibles y dependiendo de su percepción, su [[representacion|representación]] y la comunicación que recibe»*, cumpliendo las propiedades necesarias para ser considerado un *«sistema inteligente»* [^1].

[^1]: Bertalanffy Center for the Study of Systems Science (2020). Agent. In Charles François (Ed.), International Encyclopedia of Systems and Cybernetics. Retrieved from http://systemspedia.bcsss.org/?title=AGENT

- **Jerarquía y tipología de agentes (Erceau & Ferber, 1991):** En los sistemas multiagente activos se distinguen distintos niveles jerárquicos:
	- *Agentes reactivos:* Situados en los niveles inferiores, disponen únicamente de un protocolo y lenguaje de comunicación reducidos y sus habilidades dependen solo de una regla de estímulo/acción; esta clase incluye diversos subniveles según su capacidad de formación de grupos y de producir un comportamiento global.
	- *Agentes comunicadores:* Poseen un protocolo de comunicación completo, pero cuyos [[componente|componentes]] conversacionales y comportamentales son interdependientes.
	- *Agentes racionales:* Poseen habilidades precisas, creencias y una representación parcial de su entorno, especialmente de los demás agentes dentro del sistema.
	- *Agentes intencionales:* En el nivel más alto, poseen metas explícitas, planes específicos que les permiten cumplirlas, así como la posibilidad de comprometerse con tareas específicas que están obligados a llevar a cabo, o de contratar a otros agentes para ejecutar ciertas acciones.

- **Propiedades constitutivas del modelo (Ferber, 1999):** Una entidad virtual o física se define por nueve propiedades [^1]:
	1. Es capaz de actuar en un entorno.
	2. Puede comunicarse directamente con otros agentes.
	3. Está impulsada por un conjunto de tendencias (en forma de objetivos individuales o de una función de satisfacción/supervivencia que intenta optimizar).
	4. Posee recursos propios.
	5. Es capaz de percibir su entorno (aunque de forma limitada).
	6. Tiene solo una representación parcial de este entorno (y quizá ninguna en absoluto).
	7. Posee habilidades y puede ofrecer servicios.
	8. Puede ser capaz de reproducirse a sí misma.
	9. Su comportamiento tiende hacia la satisfacción de sus objetivos en función de sus recursos, habilidades, percepción, representación y comunicación recibida.

- **Características operativas deducidas (Saffarpour, 2000):** A partir de la descripción de Ferber, Saffarpour deduce que los agentes son: **autónomos** (tienen control sobre sus propias acciones); dotados de algún nivel de **inteligencia** (desde reglas fijas hasta motores de aprendizaje que les permiten adaptarse a cambios en el entorno); **proactivos y orientados a metas** (no solo reactivos); con **habilidad social** (se comunican con el usuario, el sistema y otros agentes) y capacidad de **cooperación** para realizar tareas complejas; con posibilidad de **moverse** de un sistema a otro para acceder a recursos remotos o encontrar otros agentes; y **adaptativos** (modifican su comportamiento basándose en experiencias previas) —aunque François (2020) advierte que términos como *«inteligencia»* o *«moverse de un sistema a otro»* resultan ambiguos en un sentido general [^1].

> [!note] Relación entre agente y observador
> La diferencia fundamental respecto del **[[observador]]** es **teleológica**: el **agente** se define por operar orientado a metas explícitas dentro de una red multi-elemento. En sistemas biológicos y sociales, dicha condición agéntica no es una entidad separada, sino el rol operativo que asume un observador cuando proyecta propósitos y actúa en las [[relacion|relaciones]] del sistema.