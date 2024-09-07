export const getArchitects = () => {
    const architects = document.getElementsByTagName('a')
    const non_architects = document.querySelectorAll('span')
    return [Array.from(architects), Array.from(non_architects)]
}
export const getClassical = () => {
    const classical = Array.from(document.querySelectorAll('a.classical'))
    const non_classical = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [classical, non_classical]
}
export const getActive = () => {
    const active = Array.from(document.querySelectorAll('a.classical.active'))
    const non_active = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    return [active, non_active]

}
export const getBonannoPisano = () => {
    const heteml = document.getElementById("BonannoPisano")
    const arr = document.querySelectorAll('a.active.classical:not(#BonannoPisano)')
    return [heteml, Array.from(arr)]
}
