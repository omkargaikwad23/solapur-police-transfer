import React from "react";
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
// import Footer from "../Components/Footer/Footer";
// import Navigation from "../Components/Navigation/Navigation";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                {/* <Navigation /> */}
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    {/* <Route path="/caseStudies" exact={true} component={CaseStudy} />
                    <Route path="/learn" exact={true} component={StartLearning} />
                    <Route path="/quiz" exact={true} component={Quiz} />
                    <PublicRoute path="/login" exact={true} component={LoginPage} />
                    <PublicRoute path="/register" exact={true} component={RegisterPage} />
                    <Route path="/faqs" exact={true} component={FaqPage} />
                    <Route path="/" exact={true} component={Home} /> */}
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default AppRouter