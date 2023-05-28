// function to solve resource url problem
export function path(folder, file, ext) {
    return new URL(`../${folder}/${file}.${ext}`, import.meta.url).href;
}