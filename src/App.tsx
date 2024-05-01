import './App.css'
import {MyHello} from "./MyHello.tsx";
import {Counter} from "./Counter.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Logo} from "./Logo.tsx";
import {Books} from "./Books.tsx";
import {Wellcome} from "./Wellcome.tsx";
import {WellcomeProps} from "./WellcomeProps.tsx";
import {WellcomeKey} from "./WellcomeKey.tsx";
import {StateParent} from "./StateParent.tsx";
import {EventDate} from "./EventDate.tsx";
import {Propagation} from "./Propagation.tsx";
import {FortuneTelling} from "./FortuneTelling.tsx";

export const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" Component={() => (
                    <Logo/>
                )}/>
                <Route path="/basic" Component={() => (
                    <div>
                        <MyHello myName="React" times={1}/>
                        <Counter init={0}/>
                    </div>
                )}/>
                <Route path="/books" Component={() => (
                    <div>
                        <Books/>
                    </div>
                )}/>
                <Route path="/wellcome_child" Component={() => (
                    <div>
                        <Wellcome>
                            <p>一緒に学習しませんか</p>
                        </Wellcome>
                    </div>
                )}/>
                <Route path="/wellcome_props" Component={() => (
                    <div>
                        <WellcomeProps wellcome={<p>一緒に学習しませんか</p>}/>
                    </div>
                )}/>
                <Route path="/wellcome_key" Component={() => (
                    <div>
                        <WellcomeKey>
                            <p key="title">勉強会してます</p>
                            <p key="content">一緒にReactの学習をしませんか</p>
                        </WellcomeKey>
                    </div>
                )}/>
                <Route path="/state" Component={() => (
                    <StateParent/>
                )}/>
                <Route path="/event" Component={() => (
                    <EventDate/>
                )}/>
                <Route path="/propagation" Component={() => (
                    <Propagation/>
                )}/>
                <Route path="/fortune_telling" Component={() => (
                    <FortuneTelling />
                )}/>
            </Routes>
        </Router>)
}

