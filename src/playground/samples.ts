
const city = 'Dorsten';
const country = 'Germany';
const address = { city, country }; // { city: city, country: country }
const address2 = { ...address }; // einfacher clone
const address3 = { ...address, street: 'Overbergstr.', dep: '35a' }; // erweiterung
// city, country, street, dep
const address4 = {...address3, street: 'musterstr'}; // overrride
const myList1: string[] = ['saban', 'hans'];
const myList3: string[] = ['peter', 'frank'];
const myList2: string[] = [...myList1];
const myList4: string[] = [...myList1, ...myList3];
const myList5: string[] = [...myList1, 'heike', 'paula', ...myList3];

const { street, dep } = address3;
console.log('street of address3 === ', street);

const testObj = { test1: 123, test2: 123, test3: 123 };
const { test2, test3 } = testObj;

const doit = () => {
  console.log('do it' );
};

const doit1 = param => {
  console.log('do it', param );
};

const doit2 = (param) => {
  console.log('do it', param );
};

const doit3: (num: number) => number = num => num * 2;


/*

<button id="btn">login</button>

*/


class LoginBtn {
  constructor(private btn: HTMLButtonElement) {
    this.initEvents();
  }
  private initEvents() {

    this.btn.addEventListener('click', () => {
      console.log(this); // <button id="btn">login</button>
    })
  }
}

const loginBtn: LoginBtn = new LoginBtn ( document.getElementById ('btn') as HTMLButtonElement )

abstract class MyAbs {
  constructor() { };
  met() { };
}

class UseAbs extends MyAbs {
  do() { };
}

// const myAbs: MyAbs = new MyAbs();

const use: UseAbs = new UseAbs();

interface IHuman {
  walk(): void;
  age: number;
}

interface IMan extends IHuman {
  firstname?: string;
}

class Human implements IHuman {

  // protected name: string;
  age: number;
  constructor( protected name: string ) {
    // this.name = name;
  }

  walk() {
    console.log(this.name + ' walk');
  }
}

class Man extends Human implements IMan {

  private _pro: string ;

  set pro(value: string) {
    this._pro = value;
  }

  get pro(): string {
    return this._pro;
  }

  constructor( name: string ) {
    super( name );
  }

  drive( time: number, car: string = 'bmw' ) {
    console.log(this.name + ' drive');
  }

  walk( location?: string  ) {
    console.log('walk in Man', this.name);
    super.walk()
  }

  fun(param1: string, param2: number, ...rest: any[]) {

  }
}

const m: Man = new Man('saban');
m.drive(12);

const userage = 123;

const userList: string[] = ['saban'];
const list2: Array<string> = ['test'];

const user: { name: string, age: number, zip?: number } = {
  name: 'saban', age: 44
}

let username = 'saban';

for (let i = 1; i < 10; i++) {
  console.log(i);

  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
}

