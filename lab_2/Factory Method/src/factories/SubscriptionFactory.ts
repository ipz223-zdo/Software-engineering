import { Subscription } from '../subscriptions/Subscription';

export interface SubscriptionFactory {
    createSubscription(type: string): Subscription;
}
