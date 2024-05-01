type Props = {
    step: number;
    onUpdate: (step: number) => void;
}

export const StateCounter = ({step, onUpdate}: Props) => {
    const handleClick = () => {
        onUpdate(step)
    }
    return (
        <>
            <button onClick={handleClick}>{step}</button>
        </>
    )

}