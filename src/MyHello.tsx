type Props = {
    myName: string;
    times: number;
}
export const MyHello = ({myName, times}: Props) => {
    return (
        <>
            <h1>Hello! {myName}</h1>
            <h2>{times} 回目の訪問ですね</h2>
        </>
    )
}