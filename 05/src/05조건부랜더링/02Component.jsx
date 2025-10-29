import App from "../App"
const Component_02 = ({isAuth}) => {
    return (
        <>
            {isAuth? <div>로그인상태!</div> : <div>로그아웃상태!</div>}
        </>
    )
}

export default Component_02