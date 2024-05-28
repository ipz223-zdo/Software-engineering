import { SubscriptionFactory } from './SubscriptionFactory';
import { DomesticSubscription } from '../subscriptions/DomesticSubscription';
import { EducationalSubscription } from '../subscriptions/EducationalSubscription';
import { PremiumSubscription } from '../subscriptions/PremiumSubscription';
import {Subscription} from "../subscriptions/Subscription";

export class MobileAppSubscriptionFactory implements SubscriptionFactory {
    createSubscription(type: string): Subscription {
        switch(type) {
            case 'Domestic': return new DomesticSubscription();
            case 'Educational': return new EducationalSubscription();
            case 'Premium': return new PremiumSubscription();
            default: throw new Error('Unknown subscription type');
        }
    }
}
