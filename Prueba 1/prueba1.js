

const ride_time = 30;
const ride_distance = 7;
const cost_per_minute = [0.2, 0.35, 0.4, 0.45 ]
const cost_per_mile = [1.1, 1.8, 2.3, 3.5 ]

function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile){

    return cost_per_mile.map( (rideMileCost, index)=>{
        const rideMinuteCost = cost_per_minute(index)

        return (rideMinuteCost * ride_time) + (rideMileCost + ride_distance)
    })

}