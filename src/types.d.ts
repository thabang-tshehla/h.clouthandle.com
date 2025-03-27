export type User = {

    name: string;
    emailAddress: string;
    domain: string;
    profilePictureUrl: {
        32: string;
        64: string;
        256: string;
    };
    labels: [{
        name: string
    }];
    
};


export interface BioSocialPlatformType {
    
    platformName: string;
    numFollowers: number;
    platformHandle: string

}

export interface publicClouthandle {

    name: string;
    domain: string;
    profilePictureUrl: {
        32: string;
        64: string;
        256: string;
    };
    labels: LabelType[];
    countries: any[];
    links: BioSocialPlatformType[];
}


export interface CountryType {
    name: string;
    emoji: string;
}
export interface LabelType {

    id: string;
    name: string;
}