import { Subscription } from './Subscription';

export class EducationalSubscription implements Subscription {
    monthlyFee = 15;
    minPeriod = 6;
    channels = ["Documentaries", "Educational Programs"];
    features = ["HD Quality", "No Ads"];

    getDescription(): string {
        return `Educational Subscription: $${this.monthlyFee}/month, Min Period: ${this.minPeriod} months, Channels: ${this.channels.join(", ")}, Features: ${this.features.join(", ")}`;
    }
}
