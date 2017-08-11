import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';
import { VisibilityFilters } from '../actions/index';

const SHOW_ALL = VisibilityFilters.SHOW_ALL;

function visibilityFilter(state = SHOW_ALL, action) {
    console.log("visibilityFilter reducer called");
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter