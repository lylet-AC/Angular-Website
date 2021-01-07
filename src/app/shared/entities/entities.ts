export class Contact {
    name: string;
    value: string;
}

export class Link {
    name: string;
    route: string;
}

export class Social {
    name: string;
    link: string;
}

export class Project {
    language: Language;
    title: string;
    link: string;
    description: string;
}

export class Experience {
    imgSrc: string;
    title: string;
    position: string;
    accomplishments: string[];
    date: string;
    location: string;
}

export enum Language { 
    Python, 
    JavaScript,
    Java,
    CSharp,
    Other
};