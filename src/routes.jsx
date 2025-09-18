import App from "./App.jsx";
import HomePage from "./components/homePage.jsx";
import ContactPage from "./components/contactPage.jsx";
import ServicePage from "./components/servicePage.jsx";



const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                index: true,
                element: <HomePage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/services",
                element: <ServicePage />
            }
        ]
    }
];



export default routes;