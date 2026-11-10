import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()



// Función de ordenamiento condicional para pasar a la propiedad `sort` o `sortFn`
sort: (f1, f2) => {
  // Verificamos si las notas pertenecen al Glosario por su slug/ruta
  const isGlosario1 = f1.slug?.includes("glosario")
  const isGlosario2 = f2.slug?.includes("glosario")

  // Si estamos dentro del Glosario, aplicamos orden puramente ALFABÉTICO (A-Z)
  if (isGlosario1 || isGlosario2) {
    const title1 = f1.frontmatter?.title.toLowerCase() ?? f1.slug ?? ""
    const title2 = f2.frontmatter?.title.toLowerCase() ?? f2.slug ?? ""
    return title1.localeCompare(title2)
  }

  // Para el resto del sitio, se mantiene el orden CRONOLÓGICO por fecha (más reciente primero)
  if (f1.dates && f2.dates) {
    return (f2.dates.created?.getTime() ?? 0) - (f1.dates.created?.getTime() ?? 0)
  }

  // Desempate alfabético general
  const t1 = f1.frontmatter?.title.toLowerCase() ?? ""
  const t2 = f2.frontmatter?.title.toLowerCase() ?? ""
  return t1.localeCompare(t2)
}