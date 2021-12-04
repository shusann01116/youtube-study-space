import { RoomLayout } from "../types/room-layout";
import { circleRoomLayout } from "./layouts/circle_room";
import { classRoomLayout } from "./layouts/classroom";
import { mazeRoomLayout } from "./layouts/maze_room";
import { ver2RoomLayout } from "./layouts/ver2";

type RoomsConfig = {
    roomLayouts: RoomLayout[];

}

export const basicRooms: RoomsConfig = {
    roomLayouts: [circleRoomLayout, mazeRoomLayout]
}

export const temporaryRooms: RoomsConfig = {
    roomLayouts: [classRoomLayout]
}


export const numSeatsInAllBasicRooms = (): number => {
    let numSeatsBasicRooms = 0
    for (const r of basicRooms.roomLayouts) {
        numSeatsBasicRooms += r.seats.length
    }
    return numSeatsBasicRooms
}
