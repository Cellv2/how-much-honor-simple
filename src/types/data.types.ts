export const itemSlots = [
    "head",
    "neck",
    "shoulder",
    "back",
    "chest",
    "bracers",
    "gloves",
    "belt",
    "legs",
    "boots",
    "ring",
    "trinket-pvp",
    "trinket-battlemasters",
    "2h",
    "mainhand-melee",
    "mainhand-spell",
    "offhand-melee",
    "offhand-spell",
    "shield",
    "ranged",
    "thrown",
    "libram",
    "wand",
] as const;
export type ItemSlot = typeof itemSlots[number];

export const markTypes = ["AB", "AV", "EOTS", "WSG"] as const;
export type MarkTypes = typeof markTypes[number];

export type Data = {
    slot: ItemSlot;
    honorAmount: number;
    marksAmount?: number;
    marksType?: MarkTypes;
};
