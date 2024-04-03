import { reactive } from "vue";


export const gameState = reactive({
    players: [{
        id: 0,
        username: "Benji",
        score: 0
    }, {
        id: 1,
        username: "Aartwix",
        score: 0
    }, {
        id: 2,
        username: "Excaliburne",
        score: 0
    }],
    chatMessages: [{
        from: 0,// id of the player
        content: "Bonjour!",
        date: 1712143227058 // timestamp
    }, {
        from: 1,// id of the player
        content: "Hello!",
        date: 1712143227058 // timestamp
    }],
    rounds: [{
        id: 0,
        answer: 5, // The value of the correct answer added at the end of the round
        review: "Le kebab est très bon surtout avec la sauce du chef!",
        startTime: 1712143227058,
        guesses: [{
            from: 0,
            value: 5
        }, {
            from: 1,
            value: 4
        }]
    }],
    settings: {
        numberOfRound: 5,
        timePerRound: 20,
        maxPlayers: 15
    }
})

export function useGameState() {
    return gameState;
}