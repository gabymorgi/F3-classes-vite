import { FiltersI, GameI, SorterI } from "./games";

export function filter(data: GameI[], filters: FiltersI): GameI[] {
  const { name, tags } = filters;
  return data.filter((game) => {
    if (name && !game.name.toLowerCase().includes(name.toLowerCase()))
      return false;
    if (tags?.length && !tags.some((tag) => game.tags.includes(tag)))
      return false;
    return true;
  });
}

export function sort(data: GameI[], sorter: SorterI): GameI[] {
  const { by, direction } = sorter;
  return data.sort((a, b) => {
    switch (by) {
      case "name":
        if (direction === "asc") return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
      case "time":
        if (direction === "asc") return Number(a.playedTime) - Number(b.playedTime);
        return Number(b.playedTime) - Number(a.playedTime);
      case "score":
        if (direction === "asc")
          return Number(a.score) - Number(b.score);
        return Number(b.score) - Number(a.score);
    }
    return 0;
  });
}

export function autoId(): string {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(
      Math.floor(Math.random() * CHARS.length)
    )
  }
  return autoId;
}
