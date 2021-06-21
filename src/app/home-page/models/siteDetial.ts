export class SiteDetail {
    domain!: string;
    storage!: string;
    usedStorage!: string;
    domainTag!: string;
    subdomain!: any;
    status!: string;
    availableDomains!: number;
    usedDomains!: number;
    monthlyVisitorCapacity!: number;
    montlyVisitor!: number;

    constructor(
        domain: string,
        storage: string,
        usedStorage: string,
        domainTag: string,
        subdomain: any,
        status: string,
        availableDomains: number,
        usedDomains: number,
        monthlyVisitorCapacity: number,
        montlyVisitor: number) 
        {
            this.domain = domain;
            this.storage = storage;
            this.usedStorage = usedStorage;
            this.domainTag = domainTag;
            this.subdomain = subdomain;
            this.status = status;
            this.availableDomains = availableDomains;
            this.usedDomains = usedDomains;
            this.monthlyVisitorCapacity = monthlyVisitorCapacity;
            this.montlyVisitor = montlyVisitor
        }
}