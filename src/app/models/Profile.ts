export interface IChangePassword {
    oldPassword: string,
    newPassword: string
}

export interface IGeneralInformation {
    firstName: string
    lastName: string
    gender: string
    dob: string
    email: string
    phoneNumber: string
}

export interface IUser {
    id: number
    email: string
    firstName: string
    lastName: string
    avatarImageUrl: string
}

export interface IProfile {
    id: number
    backgroundImageUrl: string

    currentCity: string
    currentCountry: string

    bornCity: string
    bornCountry: string

    dob: string
    gender: string
    martialStatus: string
    schoolName: string

    jobTitle: string
    companyName: string
    companyUrl: string
    
    phoneNumber: string

    owner: IUser
}



