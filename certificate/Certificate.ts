import { Issuer } from "./Issuer";
import { Subject } from "./Subject";

export class Certificate {
  private _fingerprint: string;
  public get fingerprint(): string {
    return this._fingerprint;
  }

  private _fingerprint256: string;
  public get fingerprint256(): string {
    return this._fingerprint256;
  }

  private _issuer: Issuer;
  public get issuer(): Issuer {
    return this._issuer;
  }

  private _subject: Subject;
  public get subject(): Subject {
    return this._subject;
  }

  private _subjectAltName: string[];
  public get subjectAltName(): string[] {
    return this._subjectAltName;
  }

  private _validFrom: number;
  public get validFrom(): number {
    return this._validFrom;
  }

  private _validTo: number;
  public get validTo(): number {
    return this._validTo;
  }

  private _hasExtendedValidation: boolean;
  public get hasExtendedValidation(): boolean {
    return this._hasExtendedValidation;
  }

  public constructor(
    fingerprint: string,
    fingerprint256: string,
    issuer: Issuer,
    subject: Subject,
    subjectAltName: string[],
    validFrom: number,
    validTo: number,
    hasExtendedValidation: boolean
  ) {
    this._fingerprint = fingerprint;
    this._fingerprint256 = fingerprint256;
    this._issuer = issuer;
    this._subject = subject;
    this._subjectAltName = subjectAltName;
    this._validFrom = validFrom;
    this._validTo = validTo;
    this._hasExtendedValidation = hasExtendedValidation;
  }
}
