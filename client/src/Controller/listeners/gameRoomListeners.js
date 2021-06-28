import {addPlayer} from '../redux/reducers/players';

let addRoomListeners = (socket, dispatch) => {

    //player joined room

    socket.on("player_joined", (payload) => {
        console.log(payload.player + " has joined");

        dispatch(addPlayer(payload.player));
    });
};

export {addRoomListeners}