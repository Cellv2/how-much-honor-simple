import { slotDisplayNames } from "../data/items.data";
import { ItemCost } from "../types/data.types";

// export const makeTableData = (data): Data[] => {
//     const tableData: Data[] = data.map(x => { })
// };

export const lookupSlotDisplayName = (slot: ItemCost["slot"]): string => {
    const found = slotDisplayNames.find(
        (displayNames) => displayNames.slot === slot
    );

    return found?.displayName ?? slot;
};
