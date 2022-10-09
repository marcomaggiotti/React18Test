interface User {
  id: number;
  name: string;
}

function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}

class DemoUser implements User {
  private _id: number;
  private _name: string;
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  @configurable(false)
  get id() {
    return this._id;
  }

  @configurable(false)
  get name() {
    return this._name;
  }
}

// logs "12, 26"
export const user = { id: 12, name: "Maria" };

export const myUnchangingUser = {
  name: "Anonymous"
} as const;

export function logUser(u: User) {
  console.log(`${u.id}, ${u.name}`);
}

//logUser(user);
