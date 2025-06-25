// flyweight structure design pattern is used to re-use the same object (where state does not change) for saving memory and improve performance


class Character {
   char;
   font;
   constructor(char:string,font:string) {
      
   }

   display(position: number) {
    console.log(`Character '${this.char}' in font '${this.font}' at position ${position}`);
  }
}

// Flyweight Factory
class CharacterFactory {
  private characters: Map<string, Character> = new Map();

  get(char: string, font: string): Character {
    const key = `${char}_${font}`;
    if (!this.characters.has(key)) {
      this.characters.set(key, new Character(char, font));
    }
    return this.characters.get(key)!;
  }
}

// Client
const factory = new CharacterFactory();

const text = "hello";
const font = "Arial";

for (let i = 0; i < text.length; i++) {
  const char = factory.get(text[i], font);
  char.display(i);
}