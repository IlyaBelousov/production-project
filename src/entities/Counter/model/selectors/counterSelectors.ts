import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

const selectValue = (state:StateSchema) => state.counter.value;
export const counterSelectors = {
    selectValue,
};
