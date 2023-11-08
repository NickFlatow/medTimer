declare const timerElement: HTMLElement;
declare const inputTime: HTMLInputElement;
declare const startButton: HTMLButtonElement;
declare const pauseButton: HTMLButtonElement;
declare let pause: boolean;
declare let timeRemaining: number;
declare let interval: number;
declare let sound: HTMLAudioElement;
declare function updateTimer(): void;
declare function toggleButtonVisibility(): void;