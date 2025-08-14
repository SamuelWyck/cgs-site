import App from "./App.jsx";
import HomePage from "./components/homePage.jsx";
import ContactPage from "./components/contactPage.jsx";



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
            }
        ]
    }
];



export default routes;