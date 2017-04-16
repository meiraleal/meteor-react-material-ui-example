import {combineReducers} from 'redux';

const InsertRecordReducer = (state = [], action) => {
    switch (action.type) {
    case 'INSERT_RECORD':
        return action.record;
    default:
        return state;
    }
};

const reducers = combineReducers({insertRecord: InsertRecordReducer});

export default reducers;
