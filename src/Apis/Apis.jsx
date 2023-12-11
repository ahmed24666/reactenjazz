export const PartnersApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/partners/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
// export const TestApi = () => {
//     return fetch('https://f1a3-156-199-240-227.ngrok-free.app/', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//     }).then((response) => {
//         return response.json();
//     });
// };//..
export const QuestionsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/questions/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const PopularQuestionsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/questions/popular/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const ReviewsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/reviews/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const StatisticsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/statistics/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const SubscribersApi = (email) => {
    return fetch('https://server.enjaaz.com.sa/api/subscribers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email
        }),
    }).then((response) => {
        return response.json();
    });
};//..
//   Contact
export const ConsultationApi = (name, mobile, service_type, notes) => {
    return fetch('https://server.enjaaz.com.sa/api/consultation-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mobile,
            service_type,
            notes
        }),
    }).then((response) => {
        return response.json();
    });
};//..
export const ContactUsApi = (name, mobile, reason, message) => {
    return fetch('https://server.enjaaz.com.sa/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mobile,
            reason,
            message
        }),
    }).then((response) => {
        return response.json();
    });
};//..
export const JoinUsApi = (name, mobile, partnership_type, notes, portfolio, city, email) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('partnership_type', partnership_type);
    formData.append('notes', notes);
    formData.append('portfolio', portfolio);
    formData.append('city', city);
    formData.append('email', email);

    return fetch('https://server.enjaaz.com.sa/api/join-us/', {
        method: 'POST',
        body: formData, // Send as FormData
    }).then((response) => {
        return response.json();
    });
};
//x
export const ServiceRequestApi = (name, mobile, service_type, notes) => {
    return fetch('https://server.enjaaz.com.sa/api/service-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mobile,
            service_type,
            notes
        }),
    }).then((response) => {
        return response.json();
    });
};//..
export const ServiceRequestWithCalcApi = (name, mobile, service_type, notes, package_type, customer_count, wage_protection,total_price) => {
    return fetch('https://server.enjaaz.com.sa/api/service-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mobile,
            service_type,
            notes, package_type, customer_count, wage_protection, total_price
        }),
    }).then((response) => {
        return response.json();
    });
};//..
export const FreeTrialRequestApi = (name, mobile, service_type, notes) => {
    return fetch('https://server.enjaaz.com.sa/api/service-free-trial-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            mobile,
            service_type,
            notes
        }),
    }).then((response) => {
        return response.json();
    });
};//..
// Offers
export const OffersApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/offers/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
// Packages
export const ServiceManagemenApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/packages/service-management/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//x
export const WageManagementApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/packages/wage-management/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//x

