export interface User {
    id?:       number;
    email:    string;
    username: string;
    password: string;
    name:     Name;
    address:  Address;
    phone:    string;
}

export interface Address {
    geolocation: Geolocation;
    city:        string;
    street:      string;
    number:      number;
    zipcode:     string;
}

export interface Geolocation {
    lat:  string;
    long: string;
}

export interface Name {
    firstname: string;
    lastname:  string;
}
