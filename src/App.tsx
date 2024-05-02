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
import {BasicForm} from "./BasicForm.tsx";
import {UCForm} from "./UCForm.tsx";
import {TextArea} from "./TextArea.tsx";
import {FormSelect} from "./FormSelect.tsx";
import {FormList} from "./FormList.tsx";
import {FormRadio} from "./RadioButton.tsx";
import {FormCheck} from "./FormCheck.tsx";
import {CheckMulti} from "./CheckMulti.tsx";
import {FormFile} from "./FormFile.tsx";

export const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Logo/>}/>
                <Route path="/basic" Component={() => (
                    <div>
                        <MyHello myName="React" times={1}/>
                        <Counter init={0}/>
                    </div>
                )}/>
                <Route path="/books" element={<Books/>}/>
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
                <Route path="/state" element={<StateParent/>}/>
                <Route path="/event" element={<EventDate/>}/>
                <Route path="/propagation" element={<Propagation/>}/>
                <Route path="/fortune_telling" element={<FortuneTelling/>}/>
                <Route path="/basic_form" element={<BasicForm/>}/>
                <Route path="/uc_form" element={<UCForm/>}/>
                <Route path="/text_area" element={<TextArea/>}/>
                <Route path="/form_select" element={<FormSelect/>}/>
                <Route path="/form_list" element={<FormList/>}/>
                <Route path="/form_radio" element={<FormRadio/>}/>
                <Route path="/form_check" element={<FormCheck/>}/>
                <Route path="/check_multi" element={<CheckMulti/>}/>
                <Route path="/form_file" element={<FormFile/>}/>
            </Routes>
        </Router>)
}

