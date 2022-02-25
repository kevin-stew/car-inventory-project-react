import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'generic car',
        price: "40000.00",
        description: "Standard American Car",
        safety_quality: 'Great',
        drive_time: '400mi',
        max_speed: '120mph',
        dimensions: '19ft x 7ft x 9ft',
        weight: '1 ton',
        cost_of_production: 10000.00,
        make: 'GMC'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload },
        choosePrice: (state, action) => { state.price = action.payload},
        chooseSafetyQuality: (state, action) => { state.safety_quality = action.payload },
        chooseDriveTime: (state, action) => { state.drive_time = action.payload },
        chooseMaxSpeed: (state, action) => { state.max_speed = action.payload },
        chooseDimensions: (state, action) => { state.dimensions = action.payload },
        chooseWeight: (state, action) => { state.weight = action.payload },
        chooseCostOfProduction: (state, action) => { state.cost_of_production = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription, chooseSafetyQuality, 
    chooseDriveTime, chooseMaxSpeed, chooseDimensions, chooseWeight, 
    chooseCostOfProduction, chooseMake } = rootSlice.actions;