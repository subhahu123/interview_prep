// factory method creational design pattern

class FNotification {
    public send(message: string) {}
}

class EmailNotification extends FNotification {
    public send(message: string) {
        console.log(`Sending the email with message ${message}`);
    }
}

class SMSNotification extends FNotification {
    public send(message: string) {
        console.log(`Sending the SMS with message ${message}`);
    }
}

abstract class NotificationCreator {
    abstract createNotification(): FNotification;

    public send(message: string) {
        this.createNotification().send(message);
    }
}

class EmailNotificationCreator extends NotificationCreator {
    createNotification(): FNotification {
        return new EmailNotification();
    }
}

class SMSNotificationCreator extends NotificationCreator {
    createNotification(): FNotification {
        return new SMSNotification();
    }
}

function clientCode(factory: NotificationCreator) {
    factory.send('message');
}

let smsNotifyInstance = new SMSNotificationCreator();
clientCode(smsNotifyInstance);
