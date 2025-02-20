import { makeObservable, observable, action } from "mobx";

export class Store {
    audioIsOn = false;

    constructor() {
        makeObservable(this, {
            audioIsOn: observable,
            toggleAudio: action,
        })
    }

    get getIsAudioOn() {
        return this.audioIsOn;
    }

    toggleAudio() {
        this.audioIsOn = !this.audioIsOn;
    }
}

export const StoreViewModel = new Store();