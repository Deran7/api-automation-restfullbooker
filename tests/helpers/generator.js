import { faker } from "@faker-js/faker";

export function firstName() {
    return faker.name.firstName();
}

export function lastname() {
    return faker.name.lastName()
}
