// Abstract Factory creational design pattern

abstract class Button {
    abstract paint();
    abstract click();
}

abstract class TextBox {
    abstract paint();
    abstract enterText();
    // abstract onChange();
    // abstract onKeyDown();
    // abstract onKeyUp();
}

abstract class GUIFactory {
    abstract createButton(): Button;
    abstract createTextBox(): TextBox;
}

class MacButton implements Button {
    click() {
        console.log('mac clicked');
    }

    paint() {
        console.log('mac button painting');
    }
}

class MacTextBox implements TextBox {
    enterText() {
        console.log('mac entered text');
    }

    paint() {
        console.log('mac textbox painting');
    }
}

class MacGUI implements GUIFactory {
    public createButton(): Button {
        return new MacButton();
    }
    public createTextBox(): TextBox {
        return new MacTextBox();
    }
}

class WinButton implements Button {
    click() {
        console.log('win clicked');
    }
    paint() {
        console.log('win button painting');
    }
}

class WinTextBox implements TextBox {
    enterText() {
        console.log('win entered text');
    }
    paint() {
        console.log('win textbox painting');
    }
}

class WindowsGUI implements GUIFactory {
    public createButton(): Button {
        return new WinButton();
    }
    public createTextBox(): TextBox {
        return new WinTextBox();
    }
}

class Application {
    private button: Button;
    private textbox: TextBox;

    public constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.textbox = factory.createTextBox();
    }

    public render() {
        this.button.paint();
        this.textbox.paint();
    }
}

function clientcode() {
    let factory: GUIFactory;

    const os = 'WIN';

    if (os === 'WIN') {
        factory = new WindowsGUI();
    } else {
        factory = new MacGUI();
    }
    factory.createButton();
    factory.createTextBox();

    let app = new Application(factory);
    app.render();
}
