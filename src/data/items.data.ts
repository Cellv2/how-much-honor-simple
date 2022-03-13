import { ItemCost, ItemSlot } from "../types/data.types";

export const itemCostInfo: ItemCost[] = [
    {
        honorAmount: 10328,
        slot: "head",
    },
    {
        honorAmount: 11250,
        slot: "shoulder",
    },
    {
        honorAmount: 0,
        slot: "back",
    },
    {
        honorAmount: 10328,
        slot: "chest",
    },
    {
        honorAmount: 1,
        slot: "bracers",
        marksAmount: 1,
        marksType: "WSG",
    },
    {
        honorAmount: 6311,
        slot: "gloves",
    },
    {
        honorAmount: 10328,
        slot: "legs",
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
        honorAmount: 5897,
        slot: "thrown",
    },
    {
        honorAmount: 15000,
        slot: "shield",
    },
    {
        honorAmount: 5897,
        slot: "wand",
    },
    {
        honorAmount: 2000,
        slot: "trinket-pvp",
    },
    {
        honorAmount: 30000,
        slot: "trinket-battlemasters",
    },
];

export const slotDisplayNames: { slot: ItemSlot; displayName: string }[] = [
    {
        displayName: "Gloves",
        slot: "gloves",
    },
    {
        displayName: "Shoulders",
        slot: "shoulder",
    },
    {
        displayName: "Legs",
        slot: "legs",
    },
    {
        displayName: "Helm",
        slot: "head",
    },
    {
        displayName: "Chest",
        slot: "chest",
    },
    {
        displayName: "Two-Handed Weapon",
        slot: "2h",
    },
    {
        displayName: "Ranged",
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
        displayName: "Wand",
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
