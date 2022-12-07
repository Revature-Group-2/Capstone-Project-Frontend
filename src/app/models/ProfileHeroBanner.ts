export interface IProfileHeroBanner {
    avatarImageUrl: string,
    backgroundImageUrl: string,
    firstName: string,
    lastName: string,
    currentCity: string,
    currentCountry: string
}

export class ProfileHeroBanner implements IProfileHeroBanner {
    avatarImageUrl: string
    backgroundImageUrl: string
    firstName: string
    lastName: string
    currentCity: string
    currentCountry: string

    constructor(personHero?: IProfileHeroBanner) {
        this.avatarImageUrl = (personHero?.avatarImageUrl ? personHero?.avatarImageUrl : 'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png') ?? 'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png'
        this.backgroundImageUrl = (personHero?.backgroundImageUrl ? personHero?.backgroundImageUrl : 'https://fthmb.tqn.com/vMHG2Hi44XBqddh93WTo3nkWESU=/5000x3000/filters:fill(auto,1)/low-poly-background-672623312-5a5a8563e258f800370a105a.jpg') ?? 'https://fthmb.tqn.com/vMHG2Hi44XBqddh93WTo3nkWESU=/5000x3000/filters:fill(auto,1)/low-poly-background-672623312-5a5a8563e258f800370a105a.jpg'
        this.firstName = personHero?.firstName ?? ''
        this.lastName = personHero?.lastName ?? ''
        this.currentCity = personHero?.currentCity ?? ''
        this.currentCountry = personHero?.currentCountry ?? ''
    }
}
