---
title: Problema
date: 2026-10-29
date_creacion: 2026-10-28T11:48:19
author: Fer Díaz-González
type: producto
version: 1.1.0
tags:
  - ciencia
aliases:
  - problemas
---

Del latín *problēma,* y este del griero πρόβλημα *próblēma,* es una **brecha o diferencia entre cómo es la situación ahora y cómo te gustaría que fuera.** [^1]. Esto significa que los problemas pueden ser:

[^1]: Brooks J. (2022). The art of problem solving and its translation into practice. Bdj in Practice, 35 (9), 21–23. https://doi.org/10.1038/s41404-022-1714-y

- **Universales**: la misma situación representaría un problema para todo el mundo.
- **Específicos**: la situación es un problema para nosotros o para un grupo de personas determinado.

De manera más precisa, una **situación** $X$ es un **problema** para el **agente** $A$, si, y solo si, (SSI o IFF) la situación $X$ está en **conflicto** con la **meta** $G$ del agente y eliminar la **discrepancia** entre $X$ y $G$ presenta alguna **dificultad** para el agente $A$ [^2]. Además, para que el agente $A$ tenga realmente un problema, también debe estar en dicha situación $X$. En contraste, el agente $A$ reconoce que la situación $X$ es un problema para él SSI:

1. El agente $A$ representa, correcta o incorrectamente, que la situación $X$ está en conflicto con su meta $G$.
2. El agente $A$ representa, correcta o incorrectamente, que eliminar la discrepancia entre $X$ y $G$ presenta alguna dificultad.
3. El agente $A$ representa, correcta o incorrectamente, que se encuentra en la situación $X$.

[^2]: Barseghyan, H., Patton, P., Dechauffour, G., & Henikoff, C. (2024). What are problems? Philosophical Studies, 181(10), 2755–2777. https://doi.org/10.1007/s11098-024-02201-y

Como se ilustra en la **Figura 1**, los criterios necesarios y suficientes del problema operan en dos dominios interrelacionados que describen a un agente $A$ en situación $X$ con meta $G$ (otra situación). Entendiendo que toda situación es un sistema, los dominios son: 

- **Ontológico:** que define la realización material del sistema.
- **Epistemológico:** que define la representación abstracta del sistema.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e1f5fe', 'edgeLabelBackground':'#ffffff', 'tertiaryColor': '#fff'}}}%%
flowchart TD
    %% Estilos
    classDef startClass fill:#e0f2f1,stroke:#00695c,stroke-width:2px,color:#004d40;
    classDef diamondClass fill:#fffde7,stroke:#fbc02d,stroke-width:2px,color:#f57f17;
    classDef resultClass fill:#e3f2fd,stroke:#1565c0,stroke-width:2px,color:#0d47a1;
    classDef noClass fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#b71c1c;

    %% Cúspide: Elementos base independientes
    Start(["Agente <b><i>A</i></b> en Situación <b><i>X</i></b> con Meta <b><i>G</i></b>"]):::startClass
    
    Start --> Branch1 & Branch2

    %% --- RAMA IZQUIERDA: TENER UN PROBLEMA ---
    Branch1["<b>Tener</b> un Problema (Realización ontológica)"]:::startClass
    Branch1 --> D1

    D1{"¿<b><i>X</i></b> está en conflicto con <b><i>G</i></b>?"}:::diamondClass
    D1 -- No --> EndNo1(["No tiene el problema"]):::noClass
    D1 -- Sí --> D2
    
    D2{"¿Eliminar discrepancia<br/>presenta dificultad?"}:::diamondClass
    D2 -- No --> EndNo1
    D2 -- Sí --> D3
    
    D3{"¿El agente <b><i>A</i></b> está<br/>realmente en <b><i>X</i></b>?"}:::diamondClass
    D3 -- No --> EndNo1
    D3 -- Sí --> Res1(["El agente <b><i>A</i></b><br/><b>TIENE</b> el problema"]):::resultClass


    %% --- RAMA DERECHA: RECONOCER UN PROBLEMA ---
    Branch2["<b>Reconocer</b> un Problema (Representación epistemológica)"]:::startClass
    Branch2 --> E1

    E1{"¿<b><i>A</i></b> representa que<br/><b><i>X</i></b> está en conflicto con <b><i>G</i></b>?<br/>(correcta o incorrecta)"}:::diamondClass
    E1 -- No --> EndNo2(["No reconoce el problema"]):::noClass
    E1 -- Sí --> E2
    
    E2{"¿<b><i>A</i></b> representa que<br/>eliminar discrepancia tiene dificultad?<br/>(correcta o incorrecta)"}:::diamondClass
    E2 -- No --> EndNo2
    E2 -- Sí --> E3
    
    E3{"¿<b><i>A</i></b> representa que<br/>se encuentra en <b><i>X</i></b>?<br/>(correcta o incorrecta)"}:::diamondClass
    E3 -- No --> EndNo2
    E3 -- Sí --> Res2(["El agente <b><i>A</i></b><br/><b>RECONOCE</b> el problema"]):::resultClass
```
**Figura 1. Dominios ontológico y epistemológico del problema.** Desglose de los criterios necesarios, suficientes e interrelacionados para determinar un problema desde la perspectiva del agente, la situación actual y la meta (otra situación), en la realización material y representación abstracta del sistema.

> [!important] Varias conclusiones se derivan de estas definiciones:
> 1. **No todos los problemas incluyen preguntas**
> 2. **No todos los problemas incluyen estados indeseables**
> 3. Para que un agente considere una situación como problemática, debe ser **consciente** de la situación; sin embargo, la consciencia de la situación no es necesaria para que un agente **tenga** un problema o para que una situación **sea** un problema para un agente.
> 4. Los **contextos** no tienen por qué ser parte del problema: el contexto de un problema específico no tiene por qué ser también parte de un problema más general.
> 5. La **eliminación completa de la discrepancia** entre una situación y una meta **elimina el problema**, mientras que el **problema continúa existiendo** cuando recibe una **solución parcial**.
> 6. Para que algo sea **un problema, no tiene por qué ser solucionable,** y el agente no tiene que aceptar que se deba hacer algo al respecto, ni debe utilizar el lenguaje de lo mejorable/solucionable.