// singleton pattern
class Logger {
    private static instance;

    private constructor() {}

    public static getInstance() {
        if (Logger.instance) {
            return Logger.instance;
        }
        return new Logger();
    }

    public debug(data: string) {
        console.debug('DEBUG', data);
    }

    public error(data: string) {
        console.error('WARN', data);
    }

    public warn(data: string) {
        console.warn('WARN', data);
    }
}
