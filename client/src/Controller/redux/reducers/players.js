let ADD_PLAYER = "players/addPlayer";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return [...state, action.payload];
        default:
            return state;
    }
};

let addPlayer = (payload) => {
    return { type: ADD_PLAYER, payload: {name: payload} };
};

export { addPlayer }