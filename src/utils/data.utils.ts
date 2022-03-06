import { slotDisplayNames } from "../data/items.data";
import { Data } from "../types/data.types";

// export const makeTableData = (data): Data[] => {
//     const tableData: Data[] = data.map(x => { })
// };

export const lookupSlotDisplayName = (slot: Data["slot"]): string => {
    const found = slotDisplayNames.find(
        (displayNames) => displayNames.slot === slot
    );

    return found?.displayName ?? slot;
};
