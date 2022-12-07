export interface IProfilePersonalInfo {
    bornCity: string,
    bornCountry: string,
    martialStatus: string,
    jobTitle: string,
    companyName: string,
    companyUrl: string,
    schoolName: string
}

export class ProfilePersonalInfo implements IProfilePersonalInfo {

    bornCity: string
    bornCountry: string
    martialStatus: string
    jobTitle: string
    companyName: string
    companyUrl: string
    schoolName: string

    constructor(personInfo?: IProfilePersonalInfo) {
        this.bornCity = personInfo?.bornCity ?? ''
        this.bornCountry = personInfo?.bornCountry ?? ''
        this.martialStatus = personInfo?.martialStatus ?? ''
        this.jobTitle = personInfo?.jobTitle ?? ''
        this.companyName = personInfo?.companyName ?? ''
        this.companyUrl = personInfo?.companyUrl ?? ''
        this.schoolName = personInfo?.schoolName ?? ''
    }

    static hasSomethingToDisplay(personInfo: IProfilePersonalInfo): boolean {
        const reducedValue = (personInfo.schoolName || personInfo.jobTitle || personInfo.bornCity || personInfo.bornCountry || personInfo.martialStatus)
        return reducedValue == '' || reducedValue == null
    }
}