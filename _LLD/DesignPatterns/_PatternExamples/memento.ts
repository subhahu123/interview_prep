// The Memento Pattern lets you save the snapshot of an object’s state at a point in time, and restore it later without exposing the details of that object’s implementation.
// Memento
class EditorMemento {
  constructor(private content: string) {}
  getContent(): string {
    return this.content;
  }
}

// Originator
class TextEditor {
  private content: string = "";

  type(words: string): void {
    this.content += words;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }

  getContent(): string {
    return this.content;
  }
}

// Caretaker
const editor = new TextEditor();

editor.type("Hello ");
const saved = editor.save(); // Save state

editor.type("World!");
console.log(editor.getContent()); // Hello World!

editor.restore(saved); // Undo
console.log(editor.getContent()); // Hello 

