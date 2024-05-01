import {BackButton} from "./components/BackButton.tsx";

export const Propagation = () => {
    const handleParent = () => alert("親コンポーネントがクリックされました")
    const handleMy = () => alert("Myがクリックされました")
    // const handleChild = (e: { stopPropagation: () => void; }) => {
    //     e.stopPropagation()
    //     alert("子コンポーネントがクリックされました")
    // }

    const handleChild = () => {
        alert("子コンポーネントがクリックされました")
    }
    return (
        <>
            <h1>Propagation</h1>
            <div id="parent" onClick={handleParent}>親要素
                <div id="my" onClick={handleMy}>現在要素
                    <a id="child" href="https://wings.msn.to" target="_blank" onClick={handleChild}>子要素</a>
                </div>
            </div>
            <BackButton/>
        </>
    )
}