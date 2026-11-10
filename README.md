# holafer webpage

Creado con Quartz v5.0.0 © 2026

# Se agrego la siguiente función en PageList.tsx

```text
// 1. Agrega esta nueva función exportada junto a las demás en PageList.tsx
export function byAlphabeticalFolderFirstForGlosario(): SortFn {
  return (f1, f2) => {
    // 1. MANTENEMOS LA REGLA ORIGINAL: Las carpetas van primero siempre
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    // 2. NUEVA REGLA: Si ambos pertenecen al Glosario, ordenamos puramente ALFABÉTICO (A-Z)
    const isGlosario1 = f1.slug?.includes("glosario")
    const isGlosario2 = f2.slug?.includes("glosario")
    if (isGlosario1 && isGlosario2) {
      const title1 = f1.frontmatter?.title.toLowerCase() ?? ""
      const title2 = f2.frontmatter?.title.toLowerCase() ?? ""
      return title1.localeCompare(title2)
    }

    // 3. PARA EL RESTO DEL SITIO: Mantenemos exactamente el orden cronológico por fecha original
    if (f1.dates && f2.dates) {
      return getDate(f2)!.getTime() - getDate(f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // 4. Desempate alfabético general por título
    const t1 = f1.frontmatter?.title.toLowerCase() ?? ""
    const t2 = f2.frontmatter?.title.toLowerCase() ?? ""
    return t1.localeCompare(t2)
  }
}
```
## 

También se modifico PageList.tsx

```
export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const sorter = sort ?? byDateAndAlphabeticalFolderFirst()
```

por

```
export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const sorter = sort ?? byAlphabeticalForGlosario()
```