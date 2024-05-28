import { Subscription } from './Subscription';

export class DomesticSubscription implements Subscription {
    monthlyFee = 10;
    minPeriod = 12;
    channels = ["Local News", "Local Sports", "Entertainment"];
    features = ["HD Quality", "Catch Up TV"];

    getDescription(): string {
        return `Domestic Subscription: $${this.monthlyFee}/month, Min Period: ${this.minPeriod} months, Channels: ${this.channels.join(", ")}, Features: ${this.features.join(", ")}`;
    }
}
