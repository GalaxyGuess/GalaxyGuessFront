import { computed, ref } from "vue";
import { decodeJwt } from "jose";
import { computedAsync, useLocalStorage } from "@vueuse/core";

const API_URL = "";
export const gameTokenRaw = useLocalStorage<null|string>("game_token_raw", null, {});

export const isDecodingGameToken = ref(false);

export const gameToken = computedAsync(async () => {
    if (gameTokenRaw?.value == null) return null;
    return decodeJwt(gameTokenRaw.value);
}, null, isDecodingGameToken);

type ErrorResponse = {
    error: any
}

type CreateGameResponse = {
    jwt: string,
}

export async function createGame(username:string, password:string) {
    const res:ErrorResponse|CreateGameResponse = await fetch(API_URL+"/")
                        .then(r=>r.json())
                        .catch(e=>({error: e}));
    if ("error" in res) {
        return 
    }
    gameTokenRaw.value = res.jwt;
}

export async function joinGame(username:string, password:string, gameId:string) {
    const res:ErrorResponse|CreateGameResponse = await fetch(API_URL+"/")
                        .then(r=>r.json())
                        .catch(e=>({error: e}));
    if ("error" in res) {
        return res
    }
    gameTokenRaw.value = res.jwt;
}