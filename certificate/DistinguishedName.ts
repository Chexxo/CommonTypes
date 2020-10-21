export class DistinguishedName {
  private _country: string;
  public get country(): string {
    return this._country;
  }

  private _organization: string;
  public get organization(): string {
    return this._organization;
  }

  private _commonName: string;
  public get commonName(): string {
    return this._commonName;
  }

  private _organizationalUnit: string;
  public get organizationalUnit(): string {
    return this._organizationalUnit;
  }

  private _state: string;
  public get state(): string {
    return this._state;
  }

  private _location: string;
  public get location(): string {
    return this._location;
  }

  public constructor(
    country: string,
    organization: string,
    commonName: string,
    organizationalUnit: string,
    state: string,
    location: string
  ) {
    this._country = country;
    this._organization = organization;
    this._commonName = commonName;
    this._organizationalUnit = organizationalUnit;
    this._state = state;
    this._location = location;
  }
}
