// composite structural design pattern treats part-whole hierarchies It allows clients to treat individual objects and compositions of objects uniformly.

abstract class FileSystemItem {
   abstract getSize(): number;
   abstract getPath(): string;
   abstract delete(): void;
}

class FFile implements FileSystemItem {
   name:string
   size:number
   constructor(name:string,size:number) {
      this.name = name;
      this.size = size;
   }

   getSize(): number {
      return this.size
   }

   getPath(): string {
       return this.name
   }

   delete(): void {
       console.log(`Deleting the file ${this.name}`)
   }

}

class Folder implements FileSystemItem {
   name:string;
   items:FileSystemItem[]
   constructor(name:string) {
      this.name = name;
   }  

   addItem(item:FileSystemItem) {
      this.items.push(item)
   }

   delete(): void {
      this.items.forEach((item) => {
         item.delete();
      })
      this.items = []
   }

   getPath(): string {
       return this.name
   }

   getSize(): number {
       return this.items.reduce((acc,curr) => {
         return acc+curr.getSize();
       },0)
   }
}

let file1 = new FFile('test1',12);
let file2 = new FFile('test2',13);

let folder1 = new Folder('folder1')
folder1.addItem(file1)

let folder2 = new Folder('subfolder1');
folder1.addItem(folder2);

file1.getPath()
folder1.getPath()

file1.delete()
folder1.delete();