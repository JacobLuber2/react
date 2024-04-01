export function getListOf(list, prop) {
    
return [...new Set(list.map((film) => film[prop] || ""))];

}
export function filterFilmsByDirector(list, director) {
if (director) {
return list.filter((film) => { return film.director == director})
} else {
return list;
}
}