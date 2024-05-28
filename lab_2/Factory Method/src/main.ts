import { SubscriptionFactory } from './factories/SubscriptionFactory';
import { WebSiteSubscriptionFactory } from './factories/WebSiteSubscriptionFactory';
import { MobileAppSubscriptionFactory } from './factories/MobileAppSubscriptionFactory';
import { ManagerCallSubscriptionFactory } from './factories/ManagerCallSubscriptionFactory';

const websiteFactory = new WebSiteSubscriptionFactory();
const mobileAppFactory = new MobileAppSubscriptionFactory();
const managerCallFactory = new ManagerCallSubscriptionFactory();

const showSubscriptionDetails = (factory: SubscriptionFactory) => {
    const types = ['Domestic', 'Educational', 'Premium'];
    const detailsDiv = document.getElementById('subscription-details')!;
    detailsDiv.innerHTML = '';

    types.forEach(type => {
        const subscription = factory.createSubscription(type);
        const p = document.createElement('p');
        p.textContent = subscription.getDescription();
        detailsDiv.appendChild(p);
    });
};

document.getElementById('website-btn')!.addEventListener('click', () => {

    showSubscriptionDetails(websiteFactory);
    console.log("Show Subscription Details Website Factory");
});

document.getElementById('mobile-app-btn')!.addEventListener('click', () => {
    showSubscriptionDetails(mobileAppFactory);
    console.log("Show Subscription Details Mobile App Factory");
});

document.getElementById('manager-call-btn')!.addEventListener('click', () => {
    showSubscriptionDetails(managerCallFactory);
    console.log("Show Subscription Details Manager Call Factory");
});
