import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { isFolderPath } from "./quartz/util/path"
import { getDate } from "./quartz/components/Date"

// 1. Cargamos la configuración base
const config = await loadQuartzConfig()

// 2. Buscamos el plugin FolderPage dentro de los emitters y le inyectamos tu función sort
const folderPage = config.plugins.emitters.find((p) => p.name === "FolderPage")

if (folderPage && folderPage.options) {
  folderPage.options.sort = (f1, f2) => {
    // Mantenemos la regla original: Las carpetas van primero siempre
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    // Si ambos pertenecen al Glosario, orden alfabético estricto (A-Z)
    const isGlosario1 = f1.slug?.includes("glosario")
    const isGlosario2 = f2.slug?.includes("glosario")
    if (isGlosario1 && isGlosario2) {
      const title1 = f1.frontmatter?.title.toLowerCase() ?? ""
      const title2 = f2.frontmatter?.title.toLowerCase() ?? ""
      return title1.localeCompare(title2)
    }

    // Para el resto del sitio: orden cronológico por fecha original
    if (f1.dates && f2.dates) {
      return getDate(f2)!.getTime() - getDate(f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // Desempate alfabético general por título
    const t1 = f1.frontmatter?.title.toLowerCase() ?? ""
    const t2 = f2.frontmatter?.title.toLowerCase() ?? ""
    return t1.localeCompare(t2)
  }
}

export default config
export const layout = await loadQuartzLayout()