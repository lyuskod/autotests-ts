export class Person {
  private readonly _age: number;

  constructor(age: number) {
    this._age = age;
  }

  public get age(): number {
    return this._age;
  }
}
