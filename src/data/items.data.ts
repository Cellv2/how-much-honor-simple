import { ItemCost, ItemSlot } from "../types/data.types";

export const itemCostInfo: ItemCost[] = [
    {
        honorAmount: 10328,
        slot: "head",
    },
    {
        honorAmount: 15300,
        slot: "neck",
        marksAmount: 5,
        marksType: "EOTS",
    },
    {
        honorAmount: 11250,
        slot: "shoulder",
    },
    {
        honorAmount: 2949,
        slot: "back",
    },
    {
        honorAmount: 10328,
        slot: "chest",
    },
    {
        honorAmount: 11794,
        slot: "bracers",
        marksAmount: 10,
        marksType: "WSG",
    },
    {
        honorAmount: 6311,
        slot: "gloves",
    },
    {
        honorAmount: 17850,
        slot: "belt",
        marksAmount: 20,
        marksType: "AB",
    },
    {
        honorAmount: 10328,
        slot: "legs",
    },
    {
        honorAmount: 17850,
        slot: "boots",
        marksAmount: 20,
        marksType: "EOTS",
    },
    {
        honorAmount: 15300,
        slot: "ring",
        marksAmount: 5,
        marksType: "AV",
    },
    {
        honorAmount: 19125,
        slot: "2h",
    },
    {
        honorAmount: 19125,
        slot: "ranged",
    },
    {
        honorAmount: 14228,
        slot: "mainhand-melee",
    },
    {
        honorAmount: 9000,
        slot: "offhand-melee",
    },
    {
        honorAmount: 17786,
        slot: "mainhand-spell",
    },
    {
        honorAmount: 9000,
        slot: "offhand-spell",
    },
    {
        honorAmount: 15000,
        slot: "shield",
    },
    {
        honorAmount: 5897,
        slot: "wand", // this is the same as thrown
    },
    {
        honorAmount: 2000,
        slot: "trinket-pvp",
    },
    {
        honorAmount: 30000,
        slot: "trinket-battlemasters",
        marksAmount: 20,
        marksType: "AV",
    },
];

export const slotDisplayNames: { slot: ItemSlot; displayName: string }[] = [
    {
        displayName: "Helm",
        slot: "head",
    },
    {
        displayName: "Neck",
        slot: "neck",
    },
    {
        displayName: "Shoulders",
        slot: "shoulder",
    },
    {
        displayName: "Cloak",
        slot: "back",
    },
    {
        displayName: "Chest",
        slot: "chest",
    },
    {
        displayName: "Bracers",
        slot: "bracers",
    },
    {
        displayName: "Gloves",
        slot: "gloves",
    },
    {
        displayName: "Belt",
        slot: "belt",
    },
    {
        displayName: "Legs",
        slot: "legs",
    },
    {
        displayName: "Boots",
        slot: "boots",
    },
    {
        displayName: "Ring",
        slot: "ring",
    },
    {
        displayName: "Two-Handed Weapon",
        slot: "2h",
    },
    {
        displayName: "Ranged (Crossbow)",
        slot: "ranged",
    },
    {
        displayName: "Melee Mainhand",
        slot: "mainhand-melee",
    },
    {
        displayName: "Melee Offhand",
        slot: "offhand-melee",
    },
    {
        displayName: "Caster Mainhand",
        slot: "mainhand-spell",
    },
    {
        displayName: "Caster Offhand",
        slot: "offhand-spell",
    },
    {
        displayName: "Thrown",
        slot: "thrown",
    },
    {
        displayName: "Shield",
        slot: "shield",
    },
    {
        displayName: "Thrown / Wand",
        slot: "wand",
    },
    {
        displayName: "PvP Trinket",
        slot: "trinket-pvp",
    },
    {
        displayName: "Battlemasters Trinket",
        slot: "trinket-battlemasters",
    },
];
