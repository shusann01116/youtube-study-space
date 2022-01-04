import { RoomLayout } from "../../types/room-layout";

export const SimpleRoomLayout: RoomLayout = {
    version: 1,
    font_size_ratio: 0.018,
    room_shape: {
        width: 330,
        height: 230
    },
    seat_shape: {
        width: 35,
        height: 25
    },
    partition_shapes: [
        {
            name: "v25",
            width: 5,
            height: 25
        },
        {
            name: "v30",
            width: 5,
            height: 30
        },
        {
            name: "v65",
            width: 5,
            height: 65
        },
        {
            name: "v210",
            width: 5,
            height: 210
        },
        {
            name: "h35",
            width: 35,
            height: 5
        },
        {
            name: "h40",
            width: 40,
            height: 5
        },
        {
            name: "h85",
            width: 85,
            height: 5
        },
    ],
    seats: [
        {
            id: 1,
            x: 10,
            y: 0
        },
        {
            id: 2,
            x: 50,
            y: 0
        },
        {
            id: 3,
            x: 10,
            y: 30
        },
        {
            id: 4,
            x: 50,
            y: 30
        },
        {
            id: 5,
            x: 10,
            y: 60
        },
        {
            id: 6,
            x: 50,
            y: 60
        },
        {
            id: 7,
            x: 10,
            y: 90
        },
        {
            id: 8,
            x: 50,
            y: 90
        },
        {
            id: 9,
            x: 10,
            y: 120
        },
        {
            id: 10,
            x: 50,
            y: 120
        },
        {
            id: 11,
            x: 10,
            y: 150
        },
        {
            id: 12,
            x: 50,
            y: 150
        },
        {
            id: 13,
            x: 10,
            y: 180
        },
        {
            id: 14,
            x: 50,
            y: 180
        },
        {
            id: 15,
            x: 105,
            y: 0
        },
        {
            id: 16,
            x: 105,
            y: 30
        },
        {
            id: 17,
            x: 105,
            y: 60
        },
        {
            id: 18,
            x: 105,
            y: 90
        },
        {
            id: 19,
            x: 105,
            y: 120
        },
        {
            id: 20,
            x: 105,
            y: 150
        },
        {
            id: 21,
            x: 105,
            y: 180
        },
        {
            id: 22,
            x: 165,
            y: 0
        },
        {
            id: 23,
            x: 205,
            y: 0
        },
        {
            id: 24,
            x: 245,
            y: 0
        },
        {
            id: 25,
            x: 285,
            y: 0
        },
        {
            id: 26,
            x: 165,
            y: 60
        },
        {
            id: 27,
            x: 205,
            y: 60
        },
        {
            id: 28,
            x: 245,
            y: 60
        },
        {
            id: 29,
            x: 285,
            y: 60
        },
        {
            id: 30,
            x: 165,
            y: 90
        },
        {
            id: 31,
            x: 205,
            y: 90
        },
        {
            id: 32,
            x: 245,
            y: 90
        },
        {
            id: 33,
            x: 285,
            y: 90
        },
        {
            id: 34,
            x: 165,
            y: 150
        },
        {
            id: 35,
            x: 205,
            y: 150
        },
        {
            id: 36,
            x: 245,
            y: 150
        },
        {
            id: 37,
            x: 285,
            y: 150
        },
        {
            id: 38,
            x: 165,
            y: 180
        },
        {
            id: 39,
            x: 205,
            y: 180
        },
        {
            id: 40,
            x: 245,
            y: 180
        },
        {
            id: 41,
            x: 285,
            y: 180
        },
    ],
    partitions: [
        {
            id: 1,
            x: 45,
            y: 0,
            shape_type: "v25"
        },
        {
            id: 2,
            x: 45,
            y: 30,
            shape_type: "v25"
        },
        {
            id: 3,
            x: 45,
            y: 60,
            shape_type: "v25"
        },
        {
            id: 4,
            x: 45,
            y: 90,
            shape_type: "v25"
        },
        {
            id: 5,
            x: 45,
            y: 120,
            shape_type: "v25"
        },
        {
            id: 6,
            x: 45,
            y: 150,
            shape_type: "v25"
        },
        {
            id: 7,
            x: 45,
            y: 180,
            shape_type: "v25"
        },
        {
            id: 8,
            x: 5,
            y: 25,
            shape_type: "h85"
        },
        {
            id: 9,
            x: 5,
            y: 55,
            shape_type: "h85"
        },
        {
            id: 10,
            x: 5,
            y: 85,
            shape_type: "h85"
        },
        {
            id: 11,
            x: 5,
            y: 115,
            shape_type: "h85"
        },
        {
            id: 12,
            x: 5,
            y: 145,
            shape_type: "h85"
        },
        {
            id: 13,
            x: 5,
            y: 175,
            shape_type: "h85"
        },
        {
            id: 14,
            x: 5,
            y: 205,
            shape_type: "h85"
        },
        {
            id: 15,
            x: 160,
            y: 145,
            shape_type: "v65"
        },
        {
            id: 16,
            x: 200,
            y: 145,
            shape_type: "v65"
        },
        {
            id: 17,
            x: 240,
            y: 145,
            shape_type: "v65"
        },
        {
            id: 18,
            x: 280,
            y: 145,
            shape_type: "v65"
        },
        {
            id: 19,
            x: 320,
            y: 145,
            shape_type: "v65"
        },
        {
            id: 20,
            x: 165,
            y: 175,
            shape_type: "h35"
        },
        {
            id: 21,
            x: 205,
            y: 175,
            shape_type: "h35"
        },
        {
            id: 22,
            x: 140,
            y: 0,
            shape_type: "v210"
        },
        {
            id: 23,
            x: 100,
            y: 25,
            shape_type: "h40"
        },
        {
            id: 24,
            x: 100,
            y: 55,
            shape_type: "h40"
        },
        {
            id: 25,
            x: 100,
            y: 85,
            shape_type: "h40"
        },
        {
            id: 26,
            x: 100,
            y: 115,
            shape_type: "h40"
        },
        {
            id: 27,
            x: 100,
            y: 145,
            shape_type: "h40"
        },
        {
            id: 28,
            x: 100,
            y: 175,
            shape_type: "h40"
        },
        {
            id: 29,
            x: 100,
            y: 205,
            shape_type: "h40"
        },
        {
            id: 30,
            x: 160,
            y: 0,
            shape_type: "v30"
        },
        {
            id: 31,
            x: 200,
            y: 0,
            shape_type: "v30"
        },
        {
            id: 32,
            x: 240,
            y: 0,
            shape_type: "v30"
        },
        {
            id: 33,
            x: 280,
            y: 0,
            shape_type: "v30"
        },
        {
            id: 34,
            x: 320,
            y: 0,
            shape_type: "v30"
        },
        {
            id: 35,
            x: 160,
            y: 55,
            shape_type: "v65"
        },
        {
            id: 36,
            x: 200,
            y: 55,
            shape_type: "v65"
        },
        {
            id: 37,
            x: 240,
            y: 55,
            shape_type: "v65"
        },
        {
            id: 38,
            x: 280,
            y: 55,
            shape_type: "v65"
        },
        {
            id: 39,
            x: 320,
            y: 55,
            shape_type: "v65"
        },
        {
            id: 40,
            x: 165,
            y: 85,
            shape_type: "h35"
        },
        {
            id: 41,
            x: 205,
            y: 85,
            shape_type: "h35"
        },
        {
            id: 42,
            x: 245,
            y: 85,
            shape_type: "h35"
        },
        {
            id: 43,
            x: 285,
            y: 85,
            shape_type: "h35"
        },
        {
            id: 44,
            x: 245,
            y: 175,
            shape_type: "h35"
        },
        {
            id: 45,
            x: 285,
            y: 175,
            shape_type: "h35"
        },
    ]
}
