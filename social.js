var mountainClimber = {
    name: "Bob",
    age: 31,
    gear: ["ice axe", "accessory cord", "crampons", "climbing harness", "belay device", "climbing helmet"],
    favoriteClimbs: [
        {
            climbName: "Mount Vernon",
            difficulty: 3
        },
    ],
    identification: function() {
        return this.name + "is age" + this.age + "likes to climb" + this.climbName;
        console.log(identification);
    },
    mountainClimbingFriends: [
        {
            name: "Sarah",
            age: 31,
            ClimbsPerYear: 50,
            YearOfFirstClimb: 2010,
            favoriteClimbs: [
                {
                    climbName: "Mount Everest",
                    difficulty: 10
                },
            ]
        },
        {
            name: "Zoli",
            age: 9,
            favoriteClimbs: [
                {
                    climbName: "Monkey Hill",
                    difficulty: 1
                },
            ]
        },
        {
            name: "Chris",
            age: 45,
            favoriteClimbs: [
                {
                    climbName: "Mount Washington",
                    difficulty: 7
                },
            ]
        },
        {
            name: "VolcanoMan",
            age: 100,
            favoriteClimbs: [
                {
                    climbName: "Mount St. Helen",
                    difficulty: 1000
                },
            ]
        },
    ]
}
console.log(mountainClimber);