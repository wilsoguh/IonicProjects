export class SettingsService {
    private altBackground = false;

    setBackground(isAlt: boolean) {
        this.altBackground = isAlt;
    }
    isAlBackground() {
        return this.altBackground;
    }
}