import { createSlice } from "@reduxjs/toolkit"


const initialState  = {
    value: [
    {
        id: 1,
        active: false
    },
    {
        id: 2,
        active: false
    },
    {
        id: 3,
        active: false
    },
    {
        id: 4,
        active: false
    },
    {
        id: 5,
        active: false
    },
    {
        id: 6,
        active: false
    },
    {
        id: 7,
        active: false
    },
    {
        id: 8,
        active: false
    },
    {
        id: 9,
        active: false
    },
    {
        id: 10,
        active: false
    },
    {
        id: 11,
        active: false
    },
    {
        id: 12,
        active: false
    },
    {
        id: 13,
        active: false
    },
    {
        id: 14,
        active: false
    },
    {
        id: 15,
        active: false
    },
    {
        id: 16,
        active: false
    },
    {
        id: 17,
        active: false
    },
    {
        id: 18,
        active: false
    },
    {
        id: 19,
        active: false
    },
    {
        id: 20,
        active: false
    }
    ]
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        change:(state, action) => {
            state.value != state.value.map((item) => {
                if(item.id == action.payload) {
                    item.active = !item.active
                }
                return item;
            })
        }
    }
})

export const {change} = questionSlice.actions;

export default questionSlice.reducer;